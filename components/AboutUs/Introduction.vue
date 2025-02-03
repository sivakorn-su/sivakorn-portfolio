<script lang="ts" setup>
import {onMounted} from 'vue'
import gsap from 'gsap'

onMounted(() => {
  // Animate the circle moving to the right
  gsap.to(".circle", {
    x: 700,
    duration: 1,
    rotation: 360,
    ease: "power2.out"
  });

  // Animate the text fading in
  gsap.from(".name-text", {
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out"
  });
});
</script>

<template>
  <div class="justify-center items-center container">
    <div class="px-10 text-black">
      <h1 class="name-text text-9xl">Sivakorn</h1>
      <h1 class="mx-10 name-text text-9xl">Suttisom</h1>
      <div class="name-text underline">Back End Developer</div>
    </div>
    <svg
        class="circle"
        height="400"
        viewBox="0 0 400 400"
        width="400"
        xmlns="http://www.w3.org/2000/svg"
    >
      <circle
          cx="125"
          cy="125"
          fill="orange"
          r="125"
      />
    </svg>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  overflow: hidden;
}

.circle {
  position: absolute;
  top: 0;
  left: 0; /* Start off-screen */
}
</style>
