// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    colorMode: {
        preference: "light"
    },
    
    build: {
        transpile: ['gsap']
    },
    runtimeConfig: {
        apiKey: process.env.NUXT_API_KEY,
        public: {
            apiKey: process.env.NUXT_PUBLIC_GOOGLE_API_KEY || 'AIzaSyAIxctcXtvca-6BeBaC22gVTPofmMLYFTw'
        }
    },
    devtools: {enabled: true},
    modules: ['@nuxt/ui', '@nuxtjs/i18n', '@nuxtjs/tailwindcss','@pinia/nuxt']
})