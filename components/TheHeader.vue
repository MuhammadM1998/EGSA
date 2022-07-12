<script setup>
  const isNavMenuVisible = ref(false);
</script>

<template>
  <header
    class="relative bg-gray-500 py-4 transition-colors"
    :class="{ 'bg-black': isNavMenuVisible }"
  >
    <div class="container flex items-center justify-between">
      <TheLogo />

      <nav>
        <HamburgerButton
          class="lg:hidden"
          @click="isNavMenuVisible = !isNavMenuVisible"
        />

        <div
          class="nav-menu"
          :class="{ 'nav-menu--visible': isNavMenuVisible }"
        >
          <ul class="flex flex-col gap-4 lg:flex-row">
            <li class="transition-colors hover:text-primary">
              <a href="#">{{ $t('sections.nav.home') }}</a>
            </li>

            <li class="transition-colors hover:text-primary">
              <a href="#">{{ $t('sections.nav.about') }}</a>
            </li>

            <li class="transition-colors hover:text-primary">
              <a href="#">{{ $t('sections.nav.flight_schedule') }}</a>
            </li>

            <li class="transition-colors hover:text-primary">
              <a href="#">{{ $t('sections.nav.flight_request') }}</a>
            </li>

            <li class="transition-colors hover:text-primary">
              <a href="#">{{ $t('sections.nav.space_blog') }}</a>
            </li>
          </ul>

          <LocaleSwitcher />
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
  .nav-menu {
    // Positioning
    @apply absolute right-0 left-0;

    // Layout and UI
    @apply flex flex-col items-center gap-4 bg-black py-8 text-center;

    // Transition
    @apply -translate-y-[150%] text-white  transition-transform;

    // Large Screens (>= 1024px)
    @apply lg:static lg:translate-y-0 lg:flex-row lg:justify-between lg:gap-8 lg:bg-transparent lg:p-0;

    &--visible {
      @apply translate-y-0;
    }
  }
</style>
