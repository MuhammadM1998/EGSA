<template>
  <section class="app-section bg-gray-500 text-white">
    <div
      class="container flex flex-col items-center gap-16 lg:flex-row-reverse"
    >
      <div>
        <picture>
          <source
            media="(max-width: 1023px)"
            srcset="~/assets/images/Hero-Mobile.webp"
          />

          <source
            media="(min-width: 1024px)"
            srcset="~/assets/images/Hero-Desktop.webp"
          />

          <img
            src="~/assets/images/Hero-Mobile.webp"
            alt="The Moon"
            loading="lazy"
          />
        </picture>
      </div>

      <div
        class="flex flex-col items-center gap-4 text-center lg:items-start lg:gap-6 lg:text-start"
      >
        <h1>{{ $t('sections.intro.title') }}</h1>

        <p>{{ $t('sections.intro.sub_title') }}</p>

        <BaseButton type="pill">
          {{ $t('components.buttons.flights_schedule') }}
        </BaseButton>
      </div>
    </div>
  </section>
</template>
