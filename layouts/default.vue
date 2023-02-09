<script setup>

import HeaderTemplate from "~/widgets/HeaderTemplate.vue";
</script>

<template>
  <div class="flex flex-col">
    <HeaderTemplate />
    <slot/>
  </div>
</template>
