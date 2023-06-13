<template>
  <header ref="header" :style="styles" class="relative w-full">
    <div class="w-full bg-white p-4 h-48" :class="classes">
     <button class="bg-[#1da1f2]" @click=" useMain().layoutName = 'default'">default</button>
     <button class="bg-[#1da1f2]" @click="useMain().layoutName = 'mobile'">mobile</button>
        <nuxt-link prefetch  to="/">Главная</nuxt-link>
        <nuxt-link prefetch  to="/collapse">collapse</nuxt-link>
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
  methods: {
    setLayout(name) {
      useMain().SET_TRANSITION_LAYOUT(true)
      setPageLayout(name)
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

