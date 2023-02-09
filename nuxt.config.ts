import { fileURLToPath } from 'node:url'
export default defineNuxtConfig({
    app: {

    },
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    tailwindcss: {
        cssPath: '~/assets/css/input.css'
    },
    alias: {
        'images': fileURLToPath(new URL('./assets/images', import.meta.url)),
        'style': fileURLToPath(new URL('./assets/style', import.meta.url)),
        'data': fileURLToPath(new URL('./assets/other/data', import.meta.url))
    }
})
