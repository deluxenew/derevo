import {fileURLToPath} from 'node:url'

export default defineNuxtConfig({
    app: {},
    modules: [
        '@nuxtjs/tailwindcss',
        ['@pinia/nuxt', {
            autoImports: [
                'defineStore', 'acceptHMRUpdate'
            ],
        },
        ],
    ],
    tailwindcss: {
        cssPath: '~/assets/css/input.css'
    },
    imports: {
        dirs: ["composables/storeModules", "composables/http"]
    },
    dirs: [
        './store'
    ],
    alias: {
        'images': fileURLToPath(new URL('./assets/images', import.meta.url)),
        'style': fileURLToPath(new URL('./assets/style', import.meta.url)),
        'data': fileURLToPath(new URL('./assets/other/data', import.meta.url))
    }
})
