// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr:true,
  devServer:{
    host:process.env.NUXT_HOST,
    port:process.env.NUXT_PORT?Number(process.env.NUXT_PORT):3030
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    'nuxt-svgo'
  ],
  svgo: {
    autoImportPath: './assets/icons',
  },
  elementPlus:{},
  css: ['~/assets/scss/main.css','~/assets/styles/fonts.css','~/assets/styles/main.scss','~/assets/styles/root.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
