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
      imgUrl:
        'https://res.cloudinary.com/cloud-m98/image/upload/v1657717653/EGSA/Mustafa-Amir_qhlmet.webp',
    },
    {
      id: 2,
      name: t('sections.testimonials.testimonial2.name'),
      position: t('sections.testimonials.testimonial2.position'),
      quote: t('sections.testimonials.testimonial2.quote'),
      imgUrl:
        'https://res.cloudinary.com/cloud-m98/image/upload/v1657717653/EGSA/Ziad-Turky_tkb3sx.webp',
    },
    {
      id: 3,
      name: t('sections.testimonials.testimonial3.name'),
      position: t('sections.testimonials.testimonial3.position'),
      quote: t('sections.testimonials.testimonial3.quote'),
      imgUrl:
        'https://res.cloudinary.com/cloud-m98/image/upload/v1657717653/EGSA/Omar-Maged_abbb8b.webp',
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
