<template>
  <footer class="app-section bg-black pb-0 text-gray-200">
    <div class="container flex flex-col gap-8">
      <div class="flex flex-col gap-8 lg:flex-row lg:gap-12">
        <div class="flex flex-col gap-4 lg:grow lg:gap-8">
          <TheLogo class="mx-auto lg:mx-0" />

          <div class="flex items-center gap-4">
            <NuxtIcon name="Location" class="text-2xl text-primary" />

            <p>{{ $t('sections.footer.location') }}</p>
          </div>

          <div class="flex items-center gap-4">
            <NuxtIcon name="Phone" class="text-2xl text-primary" />

            <div>
              <p>{{ $t('sections.footer.phone1') }}</p>
              <p>{{ $t('sections.footer.phone2') }}</p>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="text-center lg:grow lg:text-start">
          <div class="mb-4">
            <p class="font-bold">
              {{ $t('sections.footer.quick_links.heading') }}
            </p>

            <hr class="mt-2" />
          </div>

          <ul class="quick-links">
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
        </div>

        <!-- Newsletter -->
        <div class="text-center lg:grow lg:items-start lg:text-start">
          <div class="mb-4">
            <p class="font-bold">
              {{ $t('sections.footer.newsletter.heading') }}
            </p>

            <hr class="mt-2" />
          </div>

          <p class="mb-4">
            {{ $t('sections.footer.newsletter.sub_heading') }}
          </p>

          <form class="flex flex-col gap-2">
            <input
              :placeholder="$t('sections.footer.newsletter.email_placeholder')"
              class="rounded-lg"
              type="email"
              name="email"
            />

            <BaseButton type="normal" class="mx-auto">
              {{ $t('components.buttons.subscribe') }}
            </BaseButton>
          </form>
        </div>
      </div>
      <!-- Rights -->
      <div
        class="flex flex-col items-center gap-4 border-t border-gray-300 p-4 text-center lg:flex-row lg:justify-between"
      >
        <p>{{ $t('sections.footer.rights') }}</p>

        <ul class="social-links">
          <li>
            <a href="#"> <NuxtIcon name="Facebook" /></a>
          </li>

          <li>
            <a href="#"><NuxtIcon name="Twitter" /></a>
          </li>

          <li>
            <a href="#"><NuxtIcon name="Instagram" /></a>
          </li>

          <li>
            <a href="#"><NuxtIcon name="LinkedIn" /></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .social-links {
    @apply flex items-center justify-center gap-6;

    li {
      @apply text-2xl transition-colors hover:text-primary;
    }
  }

  .quick-links {
    @apply flex flex-col items-center gap-4 lg:items-start;
    li {
      @apply w-fit  transition-colors hover:text-primary;
    }
  }

  form {
    input {
      @apply py-2 px-4 text-black;
    }
  }
</style>
