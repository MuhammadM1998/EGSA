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
    console.log(newLocale);
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
      class="outline-none transition-transform ltr:hover:scale-125"
      :disabled="$i18n.locale === 'ar'"
      aria-label="اللغة العربية"
      @click="updateLocale('ar')"
    >
      <NuxtIcon name="Lang-AR" fill class="text-2xl rtl:text-5xl" />
    </button>

    <button
      class="outline-none transition-transform rtl:hover:scale-125"
      :disabled="$i18n.locale === 'en'"
      aria-label="English"
      @click="updateLocale('en')"
    >
      <NuxtIcon name="Lang-EN" fill class="text-5xl rtl:text-2xl" />
    </button>
  </div>
</template>
