// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    colorMode: {
        preference: "light"
    },
    build: {
        transpile: ['gsap']
    },
    devtools: {enabled: true},
    modules: ['@nuxt/ui', '@nuxtjs/i18n', '@nuxtjs/tailwindcss']
})