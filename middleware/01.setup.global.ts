export default defineNuxtRouteMiddleware(  (to, from) => {
    // const res = useRouter().isReady().then((g) => console.log({g}))
    console.log({from})
   if (!from) return false




})