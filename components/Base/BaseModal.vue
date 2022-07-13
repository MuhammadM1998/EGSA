<script setup>
  const props = defineProps({
    isModalVisible: {
      type: Boolean,
      required: true,
    },
  });

  const emit = defineEmits(['update:isModalVisible']);
  const modal = ref(null);

  const closeModal = () => {
    emit('update:isModalVisible', false);
  };

  watch(
    () => props.isModalVisible,
    (newValue) => {
      if (newValue)
        onClickOutside(modal, () => closeModal(), {
          ignore: [],
        });
    }
  );
</script>

<template>
  <ClientOnly>
    <teleport to="body">
      <transition name="fade" appear>
        <div v-if="isModalVisible" class="backdrop"></div>
      </transition>

      <transition name="pop" appear>
        <div v-if="isModalVisible" ref="modal" class="modal" role="dialog">
          <p class="heading">{{ $t('components.modal.heading') }}</p>
          <p class="subheading">
            {{ $t('components.modal.sub_heading') }}
          </p>

          <button @click.prevent="closeModal">
            {{ $t('components.modal.close') }}
          </button>
        </div>
      </transition>
    </teleport>
  </ClientOnly>
</template>

<style scoped lang="scss">
  .backdrop {
    @apply fixed top-0 left-0 z-40  h-screen w-screen  bg-black bg-opacity-75;

    &.fade-enter-active,
    &.fade-leave-active {
      @apply transition-colors duration-300;
    }

    &.fade-enter-from,
    &.fade-leave-to {
      @apply bg-opacity-0;
    }
  }

  .modal {
    @apply fixed top-1/2 left-1/2 z-50 flex max-w-[70vh] -translate-y-1/2 -translate-x-1/2 flex-col gap-4 rounded-lg bg-white  py-6 px-12;

    .heading {
      @apply text-center text-xl font-semibold text-primary;
    }

    .subheading {
      @apply text-start text-gray-400;
    }

    button {
      @apply mx-auto flex w-fit items-center gap-4 rounded-lg bg-primary py-2 px-6 text-black hover:animate-pulse-fast;
    }

    &.pop-enter-active,
    &.pop-leave-active {
      @apply transition-all duration-300;
    }

    &.pop-enter-from,
    &.pop-leave-to {
      @apply scale-95 opacity-0;
    }
  }
</style>
