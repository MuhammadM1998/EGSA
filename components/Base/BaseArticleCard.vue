<script setup>
  defineProps({
    imgUrl: { type: String, required: true },
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
  });
</script>

<template>
  <div class="max-w-[312px] overflow-hidden rounded-lg shadow-xl">
    <img
      :src="imgUrl"
      :alt="title"
      class="min-h-[250px] min-w-[312px] object-cover"
    />

    <div
      class="flex flex-col items-center gap-4 py-6 px-4 text-center md:items-start md:text-start"
    >
      <p class="font-bold">{{ title }}</p>

      <p class="text-gray-400">{{ subTitle }}</p>

      <BaseButton type="normal">Read More</BaseButton>
    </div>
  </div>
</template>
