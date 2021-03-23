const cred = require('./airtable-cred.json');

const fs = require('fs');
const path = require('path');
const AirTable = require('airtable');
const axios = require('axios');

const base = new AirTable({ apiKey: cred.apiKey }).base(cred.appId);

const data = [];
const outputPath = {
  data: path.resolve(__dirname, '../src/.vuepress/data'),
  imageDest: path.resolve(__dirname, '../src/.vuepress/public/images/campaign-illust')
};

(async () => {
  // get airtable data
  try {
    const records = await base('illust').select({ maxRecords: 30, view: 'Grid view' }).all();

    await Promise.all(
      records.map(async (record) => {
        const imgName = record.get('image')[0].filename;

        data.push({
          title: record.get('title'),
          description: record.get('description'),
          imageName: imgName
        });

        // airtable record attachment image download
        const image = await axios.get(record.get('image')[0].url, { responseType: 'stream' });

        if (!fs.existsSync(outputPath.imageDest)) fs.mkdirSync(outputPath.imageDest);
        image.data.pipe(fs.createWriteStream(`${outputPath.imageDest}/${imgName}`));
      })
    );
  } catch (err) {
    console.error(err);
  }

  // create json file
  const json = JSON.stringify(data);

  if (!fs.existsSync(outputPath.data)) fs.mkdirSync(outputPath.data);
  fs.writeFileSync(`${outputPath.data}/illust.json`, json);

  console.log('💡Import done');
})();
