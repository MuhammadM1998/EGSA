<script setup>
  // Locale
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();

  let data = [
    {
      id: 1,
      name: t('sections.testimonials.testimonial1.name'),
      position: t('sections.testimonials.testimonial1.position'),
      quote: t('sections.testimonials.testimonial1.quote'),
      imgUrl: '~/assets/images/Mustafa-Amir.webp',
    },
    {
      id: 2,
      name: t('sections.testimonials.testimonial2.name'),
      position: t('sections.testimonials.testimonial2.position'),
      quote: t('sections.testimonials.testimonial2.quote'),
      imgUrl: '~/assets/images/Ziad-Turky.webp',
    },
    {
      id: 3,
      name: t('sections.testimonials.testimonial3.name'),
      position: t('sections.testimonials.testimonial3.position'),
      quote: t('sections.testimonials.testimonial3.quote'),
      imgUrl: '~/assets/images/Omar-Maged.webp',
    },
  ];
</script>

<template>
  <section class="app-section bg-gray-100">
    <div class="container">
      <BaseCarousel :data="data" />
    </div>
  </section>
</template>
