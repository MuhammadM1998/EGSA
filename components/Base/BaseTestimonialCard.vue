<script setup>
  defineProps({
    imgUrl: { type: String, required: true },
    name: { type: String, required: true },
    position: { type: String, required: true },
    quote: { type: String, required: true },
  });
</script>

<template>
  <div class="flex flex-col items-center gap-4 text-center">
    <img
      :src="imgUrl"
      :alt="name"
      class="h-20 w-20 rounded-full"
      loading="lazy"
    />

    <q class="text-gray-400">{{ quote }}</q>

    <div>
      <p class="font-bold">{{ name }}</p>
      <p>{{ position }}</p>
    </div>
  </div>
</template>
