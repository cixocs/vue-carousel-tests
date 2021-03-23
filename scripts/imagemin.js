const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

const dir = 'src/.vuepress/public/images/campaign-illust';

(async () => {
  await imagemin([`${dir}/*.jpg`], {
    destination: dir,
    plugins: [imageminMozjpeg({ quality: 70 })]
  });

  console.log('🛠　Images optimized');
})();
