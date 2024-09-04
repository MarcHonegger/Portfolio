// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },

  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'de', language: 'de-CH', name: 'Deutsch', file: 'de.json'},
      // { code: 'de', iso: 'de-CH', name: 'Deutsch', file: 'de.json'},
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    langDir: 'locales/',
    lazy: true,
    vueI18n: './i18n/i18n.config.ts'
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/image", "@nuxt/ui", "@nuxtjs/i18n"],
  compatibilityDate: '2024-09-03',
})