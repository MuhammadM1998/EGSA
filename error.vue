<script setup>
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();

  // Meta Data
  useHead({
    title: t('meta.error.title'),
    meta: [
      {
        name: 'description',
        content: t('meta.error.description'),
      },
    ],
  });
</script>

<template>
  <section class="app-section flex min-h-screen bg-gray-400">
    <div
      class="container flex flex-col justify-center gap-4 text-center lg:flex-row-reverse lg:items-center"
    >
      <div>
        <NuxtIcon
          name="404"
          fill
          class="grid place-content-center text-[18rem] lg:text-[28rem]"
        />
      </div>

      {{ locale }}

      <div class="flex flex-col gap-4">
        <h1 class="text-5xl font-bold dark:text-white lg:leading-tight">
          {{ $t('sections.error.heading') }}
        </h1>

        <p class="text-gray-100 dark:text-white">
          {{ $t('sections.error.sub_heading') }}
        </p>

        <NuxtLink
          to="/"
          class="mx-auto flex w-fit items-center gap-4 rounded-lg bg-primary py-2 px-6 text-black hover:animate-pulse-fast"
          aria-label="Go Back to Homepage"
        >
          {{ $t('components.buttons.go_home') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
