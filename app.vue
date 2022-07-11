<template>
  <div :dir="$i18n.locale === 'en' ? 'ltr' : 'rtl'">
    <TheHeader />
    <SectionIntro />
    <SectionFeatures />
    <SectionDetails />
    <LazySectionRequestFlight />
    <LazySectionBlog />
    <LazySectionTestimonials />
    <LazyTheFooter />
    <LazyMyCard />

    <LocaleSwitcher />
  </div>
</template>
