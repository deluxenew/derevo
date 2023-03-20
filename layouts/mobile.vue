<script setup>

import HeaderTemplate from "~/widgets/HeaderTemplate.vue";
</script>

<template>
  <div class="bg-blue-200">
    <HeaderTemplate />
    <slot/>
  </div>
</template>
