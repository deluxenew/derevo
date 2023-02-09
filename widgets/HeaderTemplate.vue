<template>
  <header ref="header" :style="styles" class="relative w-full">
    <div class="w-full bg-white p-4" :class="classes">
      {{ classes }}
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false,
      headerHeight: 0
    }
  },
  computed: {
    styles() {
      return {
        paddingTop: this.isSticky && this.headerHeight + "px" || 0
      }
    },
    classes() {
      return {'fixed top-0': this.isSticky}
    }
  },
  mounted() {
    if (process.client) {
      this.headerHeight = this.$refs.header.clientHeight
      window.addEventListener("scroll", () => {
        this.isSticky = scrollY >= 1
      })
    }
  }

}
</script>

