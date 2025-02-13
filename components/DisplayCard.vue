<script lang="ts" setup>
interface Prop {
  image: any
}
</script>

<template>
  <img
      :alt="image.alt"
      :src="image.src"
      class="w-full h-full object-cover rounded-lg shadow-md"
  >
</template>

<style scoped>

</style>