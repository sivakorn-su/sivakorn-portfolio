<template>
  <div>
    <div
        v-if="isLoading"
        class="loading-overlay"
    >
      <intro></intro>
    </div>

    <div
        :class="{ 'opacity-hidden': isLoading, 'opacity-visible': !isLoading }"
        class="content"
    >
      <HeroSection></HeroSection>
      <ProjectSlider></ProjectSlider>
      <MainStack></MainStack>
      <certificate></certificate>
      <ProjectSection></ProjectSection>
    </div>
  </div>
</template>

<script setup>
import Certificate from "~/components/AboutUs/Certificate.vue";
import GithubContribution from "~/components/GithubContribution.vue";

const isLoading = ref(false);

onMounted(() => {
  if (typeof window !== 'undefined') {
    isLoading.value = localStorage.getItem('hasVisited') !== 'true';

    if (!localStorage.getItem('hasVisited')) {
      setTimeout(() => {
        isLoading.value = false;
        localStorage.setItem('hasVisited', 'true');
      }, 3000);
    }
  }
});
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.content {
  transition: opacity 0.5s ease-in-out;
}

.opacity-hidden {
  opacity: 0;
  pointer-events: none;
}

.opacity-visible {
  opacity: 1;
  pointer-events: auto;
}
</style>