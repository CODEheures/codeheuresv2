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
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css', integrity: 'sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp', crossorigin: 'anonymous'}
    ],
    script: [
      // {src: 'https://unpkg.com/ionicons@4.1.2/dist/ionicons.js', body:true, async: '', defer: ''}
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
      subdomain: 'api',
      port: '8001',
      routes: {
        contact: {path: '/contact', method: 'post'}
      }
    }
  }
}
