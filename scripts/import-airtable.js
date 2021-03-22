const cred = require('./airtable-cred.json');

const fs = require('fs');
const path = require('path');
const AirTable = require('airtable');

const base = new AirTable({ apiKey: cred.apiKey }).base(cred.appId);

const data = [];
const outputPath = path.resolve(__dirname, '../src/.vuepress/data');

(async () => {
  try {
    const records = await base('illusts').select({ maxRecords: 30, view: 'Grid view' }).all();

    records.map((record) => {
      // console.log('reco', record.fields);

      data.push({
        title: record.get('title'),
        description: record.get('description'),
        imageName: record.get('image')[0].filename
      });
    });
  } catch (err) {
    console.error(err);
  }

  const json = JSON.stringify(data);
  if (!fs.existsSync(outputPath)) fs.mkdirSync(outputPath);
  fs.writeFileSync(`${outputPath}/illusts.json`, json);

  console.log('💡Import done');
})();
