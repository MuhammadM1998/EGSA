<script setup>
  definePageMeta({
    middleware: () => {
      const cookie = useCookie('user-favourite-locale');
      const { vueApp } = useNuxtApp();
      if (cookie.value)
        vueApp.config.globalProperties.$i18n.locale = cookie.value;
    },
  });
</script>

<template>
  <div
    id="egsa-app"
    :dir="$i18n.locale === 'en' ? 'ltr' : 'rtl'"
    :class="$i18n.locale === 'ar' ? 'font-norsal' : ''"
  >
    <SectionIntro />
    <SectionFeatures />
    <SectionDetails />
    <LazySectionRequestFlight />
    <LazySectionBlog />
    <LazySectionTestimonials />
    <LazyTheFooter />
    <LazyMyCard />
  </div>
</template>
