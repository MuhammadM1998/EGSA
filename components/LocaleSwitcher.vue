<template>
  <div class="flex items-center gap-4 rounded-full bg-gray-400 py-2 px-4">
    <button
      class="outline-none transition-transform"
      :class="$i18n.locale === 'ar' ? '' : 'hover:scale-125'"
      aria-label="اللغة العربية"
    >
      <NuxtIcon
        name="Lang-AR"
        fill
        :class="$i18n.locale === 'ar' ? 'text-5xl' : 'text-2xl'"
        @click="$i18n.locale = 'ar'"
      />
    </button>

    <button
      class="outline-none transition-transform"
      :class="$i18n.locale === 'en' ? '' : 'hover:scale-125'"
      aria-label="English"
    >
      <NuxtIcon
        name="Lang-EN"
        fill
        :class="$i18n.locale === 'en' ? 'text-5xl' : 'text-2xl'"
        @click="$i18n.locale = 'en'"
      />
    </button>
  </div>
</template>
