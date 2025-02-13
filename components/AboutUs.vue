<!-- HorizontalSections.vue -->
<template>
  <div class="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto my-auto py-4 sm:py-6 lg:py-28 justify-center items-center">
    <introduction></introduction>
    <myself></myself>
    <Certificate></Certificate>
    <DisplayCardLists></DisplayCardLists>
  </div>
</template>

<script setup>
import Certificate from "~/components/AboutUs/Certificate.vue";
import Myself from "~/components/AboutUs/Myself.vue";
import Introduction from "~/components/AboutUs/Introduction.vue";
</script>

<style scoped>
.scroll-container {
  overscroll-behavior: none;
  height: 100vh;
  width: 100%;
}

.sections-container {
  width: calc(100% * 6); /* ใช้ calc() เพื่อรองรับจำนวน panel ที่เปลี่ยนแปลง */
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
}

.panel {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: white;
}
</style>
