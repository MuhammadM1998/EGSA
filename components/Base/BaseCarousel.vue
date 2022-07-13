<script setup>
  // Swiper Config
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination, Navigation, EffectFade, Lazy, Keyboard } from 'swiper';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import 'swiper/css/effect-fade';
  import 'swiper/css/lazy';

  const swiperConfig = {
    modules: [Pagination, Navigation, EffectFade, Lazy, Keyboard],
    pagination: {
      clickable: true,
    },
    navigation: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    lazy: true,
    lazy: {
      checkInView: true,
      enabled: true,
    },
    keyboard: {
      enabled: true,
    },
    slidesPerView: 1,
    centeredSlides: true,
    preloadImages: false,
    lazy: {
      checkInView: true,
      enabled: true,
    },
    rewind: true,
    autoplay: true,
  };

  // Rendering data
  defineProps({
    data: { type: Array, required: true },
  });
</script>

<template>
  <Swiper v-bind="swiperConfig">
    <SwiperSlide
      v-for="item in data"
      :key="item.id"
      class="flex flex-col items-center gap-4 px-16 text-center"
    >
      <img
        :alt="item.name"
        class="swiper-lazy h-20 w-20 rounded-full"
        :data-src="item.imgUrl"
      />

      <div class="swiper-lazy-preloader"></div>

      <q class="text-gray-400">{{ item.quote }}</q>

      <div>
        <p class="font-bold">{{ item.name }}</p>
        <p>{{ item.position }}</p>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style>
  :root {
    --swiper-theme-color: #ffcb06;
  }

  .swiper {
    @apply flex flex-col gap-2;
  }

  .swiper-wrapper {
    @apply items-center;
  }

  .swiper-pagination {
    @apply static;
  }

  .swiper-pagination-bullet {
    @apply transition-all;
  }
</style>
