<template>
  <transition v-bind="transitionLayout">
    <NuxtLayout>
      <NuxtPage :transition="transitionPage"/>
    </NuxtLayout>
  </transition>
</template>
<script>
export default {
  computed: {
    transitionLayout() {
      return {
        onBeforeLeave: () => this.SET_TRANSITION_LAYOUT(true),
        onBeforeEnter: () => this.SET_TRANSITION_LAYOUT(false)
      }
    },
    transitionPage() {
      return {
        name: 'page',
        mode: 'out-in',
        onBeforeLeave: () => this.SET_TRANSITION_PAGE(true),
        onBeforeEnter: () => this.SET_TRANSITION_PAGE(false)
      }
    }
  },
  methods: {
    ...mapActions(useMain, ["SET_TRANSITION_PAGE", "SET_TRANSITION_LAYOUT"]),
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

.layout-enter-active,
.layout-leave-active {
  transition: all 0.3s;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
