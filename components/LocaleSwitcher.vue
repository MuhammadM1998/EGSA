<script setup>
  import { useI18n } from 'vue-i18n';
  const { locale } = useI18n();

  const loadLocale = () => {
    if (localStorage.getItem('user-favourite-locale'));
    locale.value = localStorage.getItem('user-favourite-locale');
  };

  const updateLocale = (newLocale) => {
    locale.value = newLocale;
    localStorage.setItem('user-favourite-locale', newLocale);
  };

  onMounted(() => {
    loadLocale();
  });
</script>

<template>
  <div class="flex items-center gap-4 rounded-full bg-gray-400 py-2 px-4">
    <button
      class="outline-none transition-transform"
      :class="$i18n.locale === 'ar' ? '' : 'hover:scale-125'"
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
