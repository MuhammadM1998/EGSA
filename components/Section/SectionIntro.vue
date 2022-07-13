<template>
  <div class="flex min-h-screen flex-col">
    <TheHeader />

    <section class="app-section grid grow items-center bg-gray-500 text-white">
      <div
        class="container flex flex-col items-center gap-16 lg:flex-row-reverse lg:justify-between"
      >
        <div>
          <picture>
            <source
              media="(max-width: 1023px)"
              srcset="
                https://res.cloudinary.com/cloud-m98/image/upload/v1657717653/EGSA/Hero-Mobile_mhoyzg.webp
              "
            />

            <source
              media="(min-width: 1024px)"
              srcset="
                https://res.cloudinary.com/cloud-m98/image/upload/v1657717653/EGSA/Hero-Desktop_ph9iga.webp
              "
            />

            <img
              src="https://res.cloudinary.com/cloud-m98/image/upload/v1657717653/EGSA/Hero-Mobile_mhoyzg.webp"
              alt="The Moon"
              loading="lazy"
            />
          </picture>
        </div>

        <div
          class="flex flex-col items-center gap-4 text-center lg:items-start lg:gap-6 lg:text-start"
        >
          <h1 :class="$i18n.locale === 'en' ? 'font-mavis ' : 'font-norsal'">
            {{ $t('sections.intro.title') }}
          </h1>

          <p>{{ $t('sections.intro.sub_title') }}</p>

          <BaseButton type="pill">
            {{ $t('components.buttons.flights_schedule') }}
          </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>
