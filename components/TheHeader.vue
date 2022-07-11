<script setup>
  const isNavMenuVisible = ref(false);
</script>

<template>
  <header class="relative bg-gray-500 py-4">
    <div class="container flex items-center justify-between">
      <TheLogo />

      <nav>
        <HamburgerButton @click="isNavMenuVisible = !isNavMenuVisible" />

        <div
          class="nav-menu"
          :class="{ 'nav-menu--visible': isNavMenuVisible }"
        >
          <ul class="flex flex-col gap-4">
            <li>
              <a href="#">{{ $t('sections.nav.home') }}</a>
            </li>

            <li>
              <a href="#">{{ $t('sections.nav.about') }}</a>
            </li>

            <li>
              <a href="#">{{ $t('sections.nav.flight_schedule') }}</a>
            </li>

            <li>
              <a href="#">{{ $t('sections.nav.flight_request') }}</a>
            </li>

            <li>
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
    @apply flex flex-col items-center gap-4 bg-black py-4 text-center;

    // Transition
    @apply -translate-y-[150%] text-white  transition-transform;

    .nav-menu--visible {
      @apply translate-y-0;
    }
  }
</style>
