module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'codeheures',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,800,400,600|Arvo:700|Flamenco:300'},
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css', integrity: 'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr', crossorigin: 'anonymous'}
    ],
    script: [
      {src: '/js/intersection-observer.js'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ffee7b' },
  /*
  ** CSS
   */
  css: [
    '@/assets/css/main.scss'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    babel: {
      presets({ isServer }) {
        return [
          ['vue-app', { targets: isServer ? { node: 'current' } : { browsers: ['>0.25%'] } }]
        ]
      }
    },
    uglify: {
      uglifyOptions: {
        ie8: false,
        ecma: 5,
        mangle: {
          safari10: true
        }
      }
    },
    vendor: ['axios', 'vue-notifications', 'mini-toastr', 'url']
  },
  plugins: [{src:'~/plugins/vue-notifications', ssr: false}],
  /*
  ** Router
   */
  router: {
    middleware: 'pages'
  },

  /*
  ** ENV
   */
  env: {
    api: {
      href_client: process.env.isDev === 'true' ? 'http://api.codeheures.test' : 'https://api.codeheures.fr',
      href_server: 'http://api',
      routes: {
        contact: {path: '/contact', method: 'post'}
      }
    }
  }
}
