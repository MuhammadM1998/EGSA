export default defineNuxtRouteMiddleware(() => {
  const cookie = useCookie('user-favourite-locale');
  const { vueApp } = useNuxtApp();
  if (cookie.value) vueApp.config.globalProperties.$i18n.locale = cookie.value;

  useHead({
    htmlAttrs: {
      dir: vueApp.config.globalProperties.$i18n.locale === 'en' ? 'ltr' : 'rtl',
    },
  });
});
