export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'pro-study',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/scss/main.scss",
    //  carousel
    // 'vue-slick-carousel/dist/vue-slick-carousel.css',
    // 'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
    '~/assets/css/swiper.css',
    // fonts
    "~/assets/fonts/montserrat/stylesheet.css",
    "~/assets/fonts/nunito/stylesheet.css",
    // icons
    "~/assets/fonts/icomoon/style.css",
    "~/assets/fonts/fontawesome/css/font-awesome.min",
    // css
    "~/assets/css/style.css",
    "~/assets/css/media.css",

    // "~/assets/css/bootstrap-vue.css.map"

  ],



  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/VueAwesomeSwiper', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // bootstrapVue: {
  //   bootstrapCSS: false,
  //   bootstrapVueCSS: false
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
