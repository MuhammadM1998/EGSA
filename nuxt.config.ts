import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'EGSA',
      // htmlAttrs: { lang: 'en' },
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href:
            process.env.NODE_ENV === 'development'
              ? '/public/favicon.ico'
              : '/favicon.ico',
        },
      ],

      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Multilingual (EN & AR) Landing Page for The Egyptian Space Agency, a moon flights agency.',
        },
        // Facebook Meta Tags
        { property: 'fb:app_id', content: '966242223397117' },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:url',
          content: '<><><><><><><><><><><><><><><><><><><><><><><><><><><><>',
        },
        {
          property: 'og:title',
          content:
            'Experience the amazing sensation of travelling to the moon!',
        },
        { property: 'og:site_name', content: 'EGSA' },
        {
          property: 'og:description',
          content:
            'Multilingual (EN & AR) Landing Page for The Egyptian Space Agency, a moon flights agency.',
        },
        {
          property: 'og:image',
          content: '<><><><><><><><><><><><><><><><><><><><><><><><><><><><>',
        },
        {
          property: 'og:image:secure_url',
          content: '<><><><><><><><><><><><><><><><><><><><><><><><><><><><>',
        },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'EGSA Website' },
        // Twitter Meta Tags
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          property: 'twitter:domain',
          content: '<><><><><><><><><><><><><><><><><><><><><><><><><><><><>',
        },
        {
          property: 'twitter:url',
          content: '<><><><><><><><><><><><><><><><><><><><><><><><><><><><>',
        },
        { property: 'twitter:title', content: 'EGSA' },
        {
          property: 'twitter:description',
          content:
            'Multilingual (EN & AR) Landing Page for The Egyptian Space Agency, a moon flights agency.',
        },
        {
          property: 'twitter:image',
          content: '<><><><><><><><><><><><><><><><><><><><><><><><><><><><>',
        },
      ],
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icons',
    '@vueuse/nuxt',
    '@intlify/nuxt3',
  ],

  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
      fallbackLocale: 'ar',
      availableLocales: ['en', 'ar'],
    },
  },
});
