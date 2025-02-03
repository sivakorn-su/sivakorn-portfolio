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
      <ProjectSection></ProjectSection>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import ProjectSection from "~/components/ProjectSection.vue";
import ProjectSlider from "~/components/ProjectSlider.vue";
import Intro from "~/components/Intro.vue";
import MainStack from "~/components/MainStack.vue";
import HeroSection from "~/components/HeroSection.vue";

export default defineComponent({
  components: {
    Intro,
    ProjectSlider,
    ProjectSection,
    MainStack,
    HeroSection
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
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