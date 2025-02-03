<script lang="ts" setup>
import {onMounted} from 'vue'
import gsap from 'gsap'

onMounted(() => {
  const tl = gsap.timeline()

  tl.from(".name-text", {
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out"
  })
})
</script>

<template>
  <div class="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 lg:py-28 mt-28 relative">
    <div class="flex flex-row items-center">
      <div class="space-y-4 z-10">
        <h1 class="name-text text-8xl md:text-9xl font-bold text-gray-800">Sivakorn</h1>
        <h1 class="name-text text-8xl md:text-9xl font-bold text-gray-800 ml-8 md:ml-10">Suttisom</h1>
        <div class="name-text text-xl text-gray-600 underline">🧑‍💻 Back End Developer</div>
      </div>
      <svg
          class="absolute right-0 top-1/2 -translate-y-1/2 w-96 md:w-[500px] opacity-70"
          viewBox="0 0 700 300"
          xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Square (bottom layer) -->
        <rect
            fill="none"
            height="200"
            stroke="#1E90FF"
            stroke-width="20"
            width="200"
            x="480"
            y="10"
        />
        <!-- Circle (middle layer) -->
        <circle
            cx="450"
            cy="180"
            fill="none"
            r="100"
            stroke="#FFD700"
            stroke-width="20"
        />
        <!-- Triangle (top layer) -->
        <path
            d="M120 80 L200 220 L40 220 Z"
            fill="none"
            stroke="#FF6347"
            stroke-width="20"
            transform="translate(180, 10)"
        />
      </svg>
    </div>
  </div>
</template>