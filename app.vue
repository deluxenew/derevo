<template>
  <NuxtLayout>
    <NuxtPage :transition="{ name: 'page', mode: 'out-in', onBeforeLeave: (el) =>  onBeforeLeave(el), onAfterEnter: (el) => onAfterEnter(el) }"/>
  </NuxtLayout>
</template>
<script>
export default {
  methods: {
    onBeforeLeave(el) {
      console.log( el)
      useMain().SET_TRANSITION_PAGE(true)
      console.log( Date.now(), '1')
    },
    onAfterEnter(el) {
      console.log( el)
      console.log(Date.now(), '2')
      useMain().SET_TRANSITION_PAGE(false)
    }
  }
}
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.15s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
