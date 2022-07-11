<template>
  <section class="app-section bg-black text-white">
    <div class="container">
      <ul class="flex flex-col gap-6 text-center lg:flex-row lg:justify-center">
        <li class="feature">
          <img
            src="~/assets/images/Features-Missiles.webp"
            class="feature__img"
            alt="Missiles"
            loading="lazy"
          />

          <p>
            {{ $t('sections.features.missiles') }}
          </p>
        </li>

        <li class="feature">
          <img
            src="~/assets/images/Features-Nutrition.webp"
            class="feature__img"
            alt="Nutrition"
            loading="lazy"
          />

          <p>
            {{ $t('sections.features.nutrition') }}
          </p>
        </li>

        <li class="feature">
          <img
            src="~/assets/images/Features-Astronaut.webp"
            class="feature__img"
            alt="Astronaut"
            loading="lazy"
          />

          <p>
            {{ $t('sections.features.astronaut') }}
          </p>
        </li>

        <li class="feature">
          <img
            src="~/assets/images/Features-Rover.webp"
            class="feature__img"
            alt="Rover"
            loading="lazy"
          />

          <p>
            {{ $t('sections.features.rover') }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .feature {
    @apply flex flex-col items-center gap-4;

    &__img {
      @apply h-[68px] w-[60px];
    }
  }
</style>
