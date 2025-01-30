<template>
  <HeroSection></HeroSection>
  <ProjectSlider></ProjectSlider>
  <MainStack></MainStack>
  <ProjectSection></ProjectSection>
</template>

<script>

import {defineComponent} from "vue";
import ProjectSection from "~/components/ProjectSection.vue";
import ProjectSlider from "~/components/ProjectSlider.vue";

export default defineComponent({
  components: {ProjectSlider, ProjectSection}
})
</script>