<template>
  <section class="app-section">
    <div class="container flex flex-col gap-12">
      <div
        class="flex flex-col items-center gap-4 lg:flex-row-reverse lg:gap-20"
      >
        <div
          class="flex items-center justify-center lg:basis-full"
          data-aos="fade-right"
        >
          <picture>
            <source
              media="(max-width: 1023px)"
              srcset="
                https://res.cloudinary.com/cloud-m98/image/upload/v1657717652/EGSA/Astronaut-with-Alien-Mobile_u0bxb5.webp
              "
            />

            <source
              media="(min-width: 1024px)"
              srcset="
                https://res.cloudinary.com/cloud-m98/image/upload/v1657717652/EGSA/Astronaut-with-Alien-Desktop_sxtzli.webp
              "
            />

            <img
              src="https://res.cloudinary.com/cloud-m98/image/upload/v1657717652/EGSA/Astronaut-with-Alien-Mobile_u0bxb5.webp"
              alt="Astronaut with Alien Illustration"
              loading="lazy"
            />
          </picture>
        </div>

        <div
          class="flex flex-col gap-4 text-center md:text-start lg:basis-full"
          data-aos="fade-left"
        >
          <h2>{{ $t('sections.details.section_heading') }}</h2>

          <div class="flex flex-col gap-5 text-gray-400">
            <p>{{ $t('sections.details.section_sub_headings.1') }}</p>
            <p>{{ $t('sections.details.section_sub_headings.2') }}</p>
            <p>{{ $t('sections.details.section_sub_headings.3') }}</p>
            <p>{{ $t('sections.details.section_sub_headings.4') }}</p>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-12 lg:flex-row lg:justify-between">
        <!-- Dont forget to bring with you -->
        <div class="flex flex-col gap-4" data-aos="fade-up">
          <h3 class="text-center">
            {{ $t('sections.details.dont_forget.heading') }}
          </h3>

          <ul class="flex flex-col gap-4 text-start text-gray-400">
            <li class="flex items-center gap-5">
              <span class="bullet"> </span>

              <p>
                <span class="font-bold">
                  {{ $t('sections.details.dont_forget.passport.title') }}
                </span>
                {{ $t('sections.details.dont_forget.passport.description') }}
              </p>
            </li>

            <li class="flex items-center gap-5">
              <span class="bullet"> </span>

              <p>
                <span class="font-bold">
                  {{ $t('sections.details.dont_forget.heavy_boots.title') }}
                </span>
                {{ $t('sections.details.dont_forget.heavy_boots.description') }}
              </p>
            </li>

            <li class="flex items-center gap-5">
              <span class="bullet"> </span>

              <p>
                <span class="font-bold">
                  {{ $t('sections.details.dont_forget.crypto_currency.title') }}
                </span>
                {{
                  $t('sections.details.dont_forget.crypto_currency.description')
                }}
              </p>
            </li>
          </ul>
        </div>

        <!-- This is best left at home. -->
        <div class="flex flex-col gap-4" data-aos="fade-up">
          <h3 class="text-center">
            {{ $t('sections.details.leave_at_home.heading') }}
          </h3>

          <ul class="flex flex-col gap-4 text-start text-gray-400">
            <li class="flex items-center gap-5">
              <span class="bullet"> </span>

              <p>
                <span class="font-bold">
                  {{ $t('sections.details.leave_at_home.telephone.title') }}
                </span>
                {{ $t('sections.details.leave_at_home.telephone.description') }}
              </p>
            </li>

            <li class="flex items-center gap-5">
              <span class="bullet"> </span>

              <p>
                <span class="font-bold">
                  {{ $t('sections.details.leave_at_home.sandwiches.title') }}
                </span>
                {{
                  $t('sections.details.leave_at_home.sandwiches.description')
                }}
              </p>
            </li>

            <li class="flex items-center gap-5">
              <span class="bullet"> </span>

              <p>
                <span class="font-bold">
                  {{ $t('sections.details.leave_at_home.swimsuit.title') }}
                </span>
                {{ $t('sections.details.leave_at_home.swimsuit.description') }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .bullet {
    @apply block min-h-[8px] min-w-[8px] rounded-full bg-primary;
  }
</style>
