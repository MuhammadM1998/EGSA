<template>
  <div
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
