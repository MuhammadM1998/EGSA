<template>
  <section class="app-section">
    <div class="container flex flex-col gap-12">
      <div
        class="flex flex-col gap-4 lg:flex-row-reverse lg:items-center lg:gap-20"
      >
        <div class="lg:basis-full">
          <picture>
            <source
              media="(max-width: 1023px)"
              srcset="~/assets/images/Astronaut-with-Alien-Mobile.webp"
            />

            <source
              media="(min-width: 1024px)"
              srcset="~/assets/images/Astronaut-with-Alien-Desktop.webp"
            />

            <img
              src="~/assets/images/Astronaut-with-Alien-Mobile.webp"
              alt="Astronaut with Alien Illustration"
              loading="lazy"
            />
          </picture>
        </div>

        <div
          class="flex flex-col gap-4 text-center lg:basis-full lg:text-start"
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
        <div class="flex flex-col gap-4 text-center lg:text-start">
          <h3>{{ $t('sections.details.dont_forget.heading') }}</h3>

          <ul class="flex flex-col gap-4 text-left text-gray-400 lg:text-start">
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
        <div class="flex flex-col gap-4 text-center lg:text-start">
          <h3>{{ $t('sections.details.leave_at_home.heading') }}</h3>

          <ul class="flex flex-col gap-4 text-left text-gray-400 lg:text-start">
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
