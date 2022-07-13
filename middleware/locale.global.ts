export default defineNuxtRouteMiddleware(() => {
  const cookie = useCookie('user-favourite-locale');
  const { vueApp } = useNuxtApp();
  if (cookie.value) vueApp.config.globalProperties.$i18n.locale = cookie.value;

  useHead({
    bodyAttrs: {
      dir: vueApp.config.globalProperties.$i18n.locale === 'en' ? 'ltr' : 'rtl',
      class:
        vueApp.config.globalProperties.$i18n.locale === 'en'
          ? ''
          : 'font-norsal',
    },
  });
});
