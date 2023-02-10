<template>
  <NuxtLayout>
    <NuxtPage :transition="{ name: 'page', mode: 'out-in', onAfterLeave: () => onAfterLeave() }"/>
  </NuxtLayout>
</template>
<script>
export default {
  methods: {
    onAfterLeave() {
      console.log(123123)
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
