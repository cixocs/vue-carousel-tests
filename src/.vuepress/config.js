const env = process.env.NODE_ENV || 'development';
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const sitePath = {
  development: 'http://localhost:3000',
  staging: '',
  production: ''
};

module.exports = {
  themeConfig: {
    domain: sitePath[env]
  },
  base: '/',
  title: 'はじめてのVuePress',
  description: 'VuePressを使用したサイトです。',
  port: '3000',
  dest: 'build',
  head: [
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }],
    ['meta', { property: 'og:locale', content: 'ja_JP' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: '' }],
    ['meta', { property: 'og:title', content: '' }],
    ['meta', { property: 'og:description', content: '' }],
    ['meta', { property: 'og:url', content: '' }],
    ['meta', { property: 'og:image', content: '' }],
    ['meta', { property: 'og:image:secure_url', content: '' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon-precomposed', href: '/apple-touch-icon.png' }]
  ],
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  shouldPrefetch: () => {
    return false;
  },
  postcss: {
    plugins: [
      require('autoprefixer')({
        grid: 'autoplace'
      })
    ]
  },
  stylus: {
    import: [path.resolve(__dirname, './styles/global.styl')]
  },
  plugins: {
    '@goy/svg-icons': { svgsDir: 'svgs' }
  },
  configureWebpack: (config, isServer) => {
    config.resolve.alias['@components'] = path.resolve(__dirname, './components');
    config.resolve.alias['@public'] = path.resolve(__dirname, './public');

    if (config.mode === 'production' && !isServer) {
      config.optimization.minimizer = [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            ecma: 5,
            compress: {
              warnings: false,
              drop_console: true
            },
            mangle: {
              keep_fnames: true
            },
            output: {
              beautify: false,
              comments: /^\**!|@preserve|@license|@cc_on|LICENSE|License|license/
            },
            ie8: true
          }
        })
      ];
    }
  },
  chainWebpack: (config, isServer) => {
    // config.module
    //   .rule('swiper')
    //   .test(/\.js$/)
    //   .exclude.add(/node_modules\/(?!(dom7|ssr-window|swiper)\/).*/)
    //   .end()
    //   .use('babel-loader')
    //   .loader('babel-loader')
    //   .options({
    //     presets: ['@babel/preset-env']
    //   });

    // optimize
    if (process.env.NODE_ENV === 'production' && !isServer) {
      config.plugin('aggressive-merging').use(webpack.optimize.AggressiveMergingPlugin);
      config.plugin('occurrence-order').use(webpack.optimize.OccurrenceOrderPlugin);
    }
  }
};
