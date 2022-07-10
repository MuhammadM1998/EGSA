<script setup>
  // Meta Data
  useHead({
    title: `Page Not Found`,
    meta: [
      {
        name: 'description',
        content: 'Food Hut Error Page, Find Your Next Amazing Recipes',
      },
    ],
  });
</script>

<template>
  <div class="overflow-hidden">
    <TheHeader />

    <section
      class="container flex min-h-[70vh] flex-col items-center justify-between gap-16 py-12 lg:flex-row-reverse"
    >
      <NuxtIcon
        name="404"
        fill
        class="scale-[2.5] text-[12rem] lg:scale-150 lg:text-[40rem]"
      />

      <div class="flex flex-col gap-4">
        <h1 class="text-5xl font-bold dark:text-white lg:leading-tight">
          Whooops!
        </h1>

        <p class="text-gray-100 dark:text-white">
          Sorry,the page you are looking for doesn't exist.
        </p>

        <NuxtLink
          to="/"
          class="bg-red w-fit rounded-full px-8 py-3 text-white transition-opacity hover:opacity-90 lg:m-0 lg:mt-12"
          >Go Back</NuxtLink
        >
      </div>
    </section>
  </div>
</template>

<style scoped>
  p {
  }
</style>
