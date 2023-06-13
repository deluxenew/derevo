export default defineNuxtPlugin(() => {
    console.log(useRouter().isReady())
})