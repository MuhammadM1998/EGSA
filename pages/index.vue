<script setup>
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();

  useHead({
    title: t('meta.home.title'),
    meta: [
      {
        name: 'description',
        content: t('meta.home.description'),
      },
    ],
  });
</script>

<template>
  <SectionIntro />
  <SectionFeatures />
  <SectionDetails />
  <LazySectionRequestFlight />
  <LazySectionBlog />
  <LazySectionTestimonials />
  <LazyTheFooter />
  <LazyMyCard />
</template>
