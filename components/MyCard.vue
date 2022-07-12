<template>
  <section class="app-section bg-gray-500 pb-2 text-white">
    <div class="container flex flex-col items-center gap-4">
      <img
        src="~/assets/images/Muhammad-Mahmoud.webp"
        alt="Muhammad Mahmoud"
        loading="lazy"
        class="h-[72px] w-[72px]"
      />

      <p class="font-bold text-primary">{{ $t('sections.my_card.heading') }}</p>
      <p class="text-gray-200">{{ $t('sections.my_card.sub_heading') }}</p>

      <ul class="social-links">
        <li>
          <a href="#"> <NuxtIcon name="Gmail" /></a>
        </li>

        <li>
          <a href="#"><NuxtIcon name="LinkedIn" /></a>
        </li>

        <li>
          <a href="#"><NuxtIcon name="GitHub" /></a>
        </li>

        <li>
          <a href="#"><NuxtIcon name="Dev.to" /></a>
        </li>
      </ul>

      <p class="text-gray-200">{{ $t('sections.my_card.rights') }}</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .social-links {
    @apply flex items-center justify-center gap-6;

    li {
      @apply text-2xl transition-colors hover:text-primary;
    }
  }
</style>
