export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Jonas Streule - Bullshit Bingo',
    htmlAttrs: {
      lang: 'de-CH'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'msapplicationTileColor', name: 'msapplication-TileColor', content: '#ffffff' },
      { hid: 'msapplicationTileImage', name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { hid: 'themeColor', name: 'theme-color', content: '#ffffff' },
      { hid: 'ogTitle', property: 'og:title', content: 'Jonas Streule - Bullshit Bingo' },
      { hid: 'ogDesc', property: 'og:description', content: '' },
      { hid: 'ogImage', property: 'og:image', content: '/jonas_social.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/android-icon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/android-icon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css/normalize.css',
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-gtag.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'vue-scrollto/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  googleFonts: {
    display: 'swap',
    text: 'Hallo Welt hier ist Jonas Streule',
    prefetch: true,
    preconnect: true,
    preload: true,
    downloaD: true,
    families: {
      Roboto: [400, 700]
    }
  },

  styleResources: {
    scss: [
      '~/assets/scss/_variables.scss',
      '~/assets/scss/_mixins.scss'
    ],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'de-CH'
    }
  },

  sitemap: {
    hostname: 'https://jonas-streule.ch',
    gzip: true
  },

  robots: {
    UserAgent: '*',
    Disallow: ''
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    host: 'localhost'
  },

  generate: {
    dir: 'htdocs'
  }
}
