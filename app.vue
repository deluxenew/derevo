<template>
  <NuxtLayout>
    <NuxtPage :isTransitionPage="IS_TRANSITION_PAGE" :transition="transition"/>
  </NuxtLayout>
</template>
<script>
export default {
  computed: {
    ...mapGetters(useMain, ["IS_TRANSITION_PAGE"]),
    transition() {
      return {
        name: 'page',
        mode: 'out-in',
        onBeforeLeave: (el) => this.onBeforeLeave(el),
        onBeforeEnter: (el) => this.onAfterEnter(el)
      }
    }
  },
  methods: {
    ...mapActions(useMain, ["SET_TRANSITION_PAGE"]),
    onBeforeLeave(el) {
      this.SET_TRANSITION_PAGE(true)
    },
    onAfterEnter(el) {
      this.SET_TRANSITION_PAGE(false)
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
