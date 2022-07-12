import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'EGSA',

      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href:
            process.env.NODE_ENV === 'development'
              ? '/public/favicon.ico'
              : '/favicon.ico',
        },
        // Google Fonts
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: true,
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap',
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
          content:
            'https://res.cloudinary.com/cloud-m98/image/upload/c_scale,h_630,q_40,w_1200/v1656823565/EGSA/Website-Screenshot_hq6wko.png',
        },
        {
          property: 'og:image:secure_url',
          content:
            'https://res.cloudinary.com/cloud-m98/image/upload/c_scale,h_630,q_40,w_1200/v1656823565/EGSA/Website-Screenshot_hq6wko.png',
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
          content:
            'https://res.cloudinary.com/cloud-m98/image/upload/c_scale,h_630,q_40,w_1200/v1656823565/EGSA/Website-Screenshot_hq6wko.png',
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