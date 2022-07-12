<script setup>
  definePageMeta({
    middleware: () => {
      const cookie = useCookie('user-favourite-locale');
      const { vueApp } = useNuxtApp();
      const { locale } = vueApp.__VUE_I18N__.global;
      if (cookie.value) locale.value = cookie.value;
    },
  });
</script>

<template>
  <div
    id="egsa-app"
    :dir="$i18n.locale === 'en' ? 'ltr' : 'rtl'"
    :class="$i18n.locale === 'ar' ? 'font-norsal' : ''"
  >
    <TheHeader />
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
