<!-- LogoSlider.vue -->
<template>
  <div class="relative overflow-hidden bg-white py-12">
    <div class="max-w-4xl mx-auto px-4">
      <div class="w-full overflow-hidden">
        <!-- Animated Logo Container -->
        <div
            class="flex items-center gap-20 animate-slide"
            @mouseenter="pauseAnimation"
            @mouseleave="resumeAnimation"
        >
          <!-- First set of logos -->
          <div v-for="logo in logos" :key="logo.id" class="flex-shrink-0">
            <a
                :href="logo.url"
                class=" transition-all duration-300"
                target="_blank"
            >
              <img
                  :alt="logo.name"
                  :src="logo.image"
                  class="h-8 w-auto object-contain"
              />
            </a>
          </div>
          <!-- Duplicated logos for seamless scrolling -->
          <div v-for="logo in logos" :key="`dup-${logo.id}`" class="flex-shrink-0">
            <a
                :href="logo.url"
                class=" transition-all duration-300"
                target="_blank"
            >
              <img
                  :alt="logo.name"
                  :src="logo.image"
                  class="h-8 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted} from 'vue';

const logos = [
  {
    id: 1,
    name: 'Behance',
    image: '/icons/wawa-x.svg',
    url: 'https://www.wawa-x.com/'
  },
  {
    id: 3,
    name: 'Apple',
    image: '/icons/mywawa.svg',
    url: 'https://www.mywawa.me/'
  },
  {
    id: 2,
    name: 'Google',
    image: '/icons/Tamkang_University_logo.svg.png',
    url: 'https://english.tku.edu.tw/'
  },
  {
    id: 4,
    name: 'Dribbble',
    image: '/icons/blcp_power_limited_logo.jpg',
    url: 'https://www.blcp.co.th/'
  }
];

let animationPaused = false;
let animationFrame;

const pauseAnimation = () => {
  const slider = document.querySelector('.animate-slide');
  slider.style.animationPlayState = 'paused';
  animationPaused = true;
};

const resumeAnimation = () => {
  const slider = document.querySelector('.animate-slide');
  slider.style.animationPlayState = 'running';
  animationPaused = false;
};

onMounted(() => {
  // Optional: Add any initialization logic here
});

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
});
</script>

<style scoped>
.animate-slide {
  animation: slide 30s linear infinite;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Optional: Add responsive styles */
@media (max-width: 768px) {
  .animate-slide {
    animation-duration: 20s;
  }
}
</style>