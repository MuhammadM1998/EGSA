<template>
  <section class="app-section bg-black text-white">
    <div class="container">
      <ul class="flex flex-col gap-6 text-center lg:flex-row lg:justify-center">
        <li class="feature">
          <img
            src="https://res.cloudinary.com/cloud-m98/image/upload/v1657717651/EGSA/Features-Missiles_dsc5km.webp"
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
            src="https://res.cloudinary.com/cloud-m98/image/upload/v1657717652/EGSA/Features-Nutrition_ddtmdc.webp"
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
            src="https://res.cloudinary.com/cloud-m98/image/upload/v1657717651/EGSA/Features-Astronaut_nozzdp.webp"
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
            src="https://res.cloudinary.com/cloud-m98/image/upload/v1657717652/EGSA/Features-Rover_qzdwfw.webp"
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
