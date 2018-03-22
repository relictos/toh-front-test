require('dotenv').config()
const resolve = require('path').resolve

const polyfills = [
  'Promise',
  'Object.assign',
  'Object.values',
  'Array.prototype.find',
  'Array.prototype.findIndex',
  'Array.prototype.includes',
  'String.prototype.includes',
  'String.prototype.startsWith',
  'String.prototype.endsWith'
]

const lessImports = [
  resolve(__dirname, 'assets/less/variables.less')
]

//Global import of less variables
const isVueRule = (rule) => {
  return rule.test.toString() === '/\\.vue$/'
}
const isLessRule = (rule) => {
  return ['/\\.less$/', '/\\.less$/'].indexOf(rule.test.toString()) !== -1
}
const lessResourcesLoader = {
  loader: 'style-resources-loader',
  options: {
    patterns: lessImports,
    injector: (source, resources) => source + resources.map(({ content }) => content).join('')
  }
}

module.exports = {
  env: {
    apiUrl: process.env.API_URL || 'http://localhost',
    appName: process.env.APP_NAME || 'Nuxt Client',
    appLocale: process.env.APP_LOCALE || 'en',
    githubAuth: !!process.env.GITHUB_CLIENT_ID || '',
    is_debug: (process.env.DEBUG_ON == "true") ? true : false
  },

  head: {
    title: process.env.APP_NAME,
    titleTemplate: '%s - ' + process.env.APP_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    // script: [
    //   { src: `https://cdn.polyfill.io/v2/polyfill.min.js?features=${polyfills.join(',')}` }
    // ]
  },

  loading: { color: '#3B8070' },

  router: {
    middleware: [
      'locale', 
      'check-auth'
    ]
  },

  plugins: [
    '~components/global',
    '~plugins/axios',
    '~plugins/vform',
    '~/plugins/i18n',
    '~/plugins/vuebar'
  ],

  modules: [
    '@nuxtjs/dotenv',
    ['semantic-ui-vue/nuxt', {css: false}],
  ],

  build: {
    extractCSS: true,
    publicPath: '/dist/',
    extend (config) {
      //for less variables import
      config.module.rules.forEach((rule) => {
        if (isVueRule(rule)) {
          rule.options.loaders.less.push(lessResourcesLoader)
        }
        if (isLessRule(rule)) {
          rule.use.push(lessResourcesLoader)
        }
      })
    }
  },
  css: [
    {src: '~/utils/semantic/dist/semantic.min.css', lang: 'css'},
    {src: 'assets/less/app.less', lang: 'less'}
  ],
}
