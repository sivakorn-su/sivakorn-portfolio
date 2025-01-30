<template>
  <div>
    <AppHeader/>
    <slot/>
    <AppFooter/>
  </div>
</template>
<script lang="ts" setup>
import AppHeader from "~/components/Layout/AppHeader.vue";
import AppFooter from "~/components/Layout/AppFooter.vue";
</script>