<script setup>
  // Locale
  import { useI18n } from 'vue-i18n';
  const { locale } = useI18n();
  const cookie = useCookie('user-favourite-locale');

  const updateLocale = (newLocale) => {
    locale.value = newLocale;
    cookie.value = newLocale;
    toggleNavState();
    location.reload();
  };

  // Closing the mobile nav after selecting the new locale
  defineProps({
    isNavActive: { type: Boolean, required: true },
  });

  const emit = defineEmits(['update:isNavActive']);

  const toggleNavState = () => {
    emit('update:isNavActive', false);
  };
</script>

<template>
  <div class="flex items-center gap-4 rounded-full bg-gray-400 py-2 px-4">
    <button
      class="outline-none transition-transform"
      :class="$i18n.locale === 'ar' ? '' : 'hover:scale-125'"
      :disabled="$i18n.locale === 'ar'"
      aria-label="اللغة العربية"
      @click="updateLocale('ar')"
    >
      <NuxtIcon
        name="Lang-AR"
        fill
        :class="$i18n.locale === 'ar' ? 'text-5xl' : 'text-2xl'"
      />
    </button>

    <button
      class="outline-none transition-transform"
      :class="$i18n.locale === 'en' ? '' : 'hover:scale-125'"
      :disabled="$i18n.locale === 'en'"
      aria-label="English"
      @click="updateLocale('en')"
    >
      <NuxtIcon
        name="Lang-EN"
        fill
        :class="$i18n.locale === 'en' ? 'text-5xl' : 'text-2xl'"
      />
    </button>
  </div>
</template>
