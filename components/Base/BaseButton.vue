<script setup>
  const props = defineProps({
    type: { type: String, required: true },
  });

  // Modal
  const isModalVisible = ref(false);
</script>

<template>
  <div>
    <button
      class="button hover:animate-pulse-fast"
      :class="type"
      @click.prevent="isModalVisible = true"
    >
      <slot />

      <div v-if="type === 'pill'">
        <NuxtIcon
          name="Arrow-Right"
          :class="{ 'block rotate-180': $i18n.locale === 'ar' }"
        />
      </div>
    </button>

    <BaseModal v-model:is-modal-visible="isModalVisible" />
  </div>
</template>

<style scoped lang="scss">
  .button {
    @apply flex w-fit items-center gap-4 bg-primary py-2 px-6 text-black;

    &.pill {
      @apply rounded-full;
    }

    &.normal {
      @apply rounded-lg;
    }
  }
</style>
