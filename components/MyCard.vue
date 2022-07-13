<template>
  <section class="app-section overflow-hidden bg-gray-500 pb-2 text-white">
    <div class="container flex flex-col items-center gap-4" data-aos="fade-up">
      <img
        src="https://res.cloudinary.com/cloud-m98/image/upload/v1657717653/EGSA/Muhammad-Mahmoud_p1ifsl.webp"
        alt="Muhammad Mahmoud"
        loading="lazy"
        class="h-[72px] w-[72px]"
      />

      <p class="font-bold text-primary">{{ $t('sections.my_card.heading') }}</p>
      <p class="text-gray-200">{{ $t('sections.my_card.sub_heading') }}</p>

      <ul class="social-links">
        <li>
          <a
            href="mailto:MuhammadM.1097@gmail.com"
            target="_blank"
            aria-label="Gmail"
          >
            <NuxtIcon name="Gmail" />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/muhammadm1998/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <NuxtIcon name="LinkedIn" />
          </a>
        </li>

        <li>
          <a
            href="https://github.com/MuhammadM1998"
            target="_blank"
            aria-label="GitHub"
          >
            <NuxtIcon name="GitHub" />
          </a>
        </li>

        <li>
          <a
            href="https://dev.to/muhammadm1998"
            target="_blank"
            aria-label="Dev.to"
          >
            <NuxtIcon name="Dev.to" />
          </a>
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
