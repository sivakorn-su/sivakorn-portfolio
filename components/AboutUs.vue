<!-- HorizontalSections.vue -->
<template>
  <div ref="container" class="max-w-6xl mx-auto px-4 scroll-container">
    <div class="sections-container">
      <div class="description panel">
        <introduction></introduction>
      </div>

      <section class="panel text-black">
        <myself></myself>
      </section>
      <section class="panel text-black">
        <Certificate></Certificate>
      </section>
      <section class="panel purple text-black">THREE</section>
      <section class="panel green text-black">FOUR</section>
      <section class="panel gray text-black">FIVE</section>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Introduction from "~/components/AboutUs/Introduction.vue";
import Myself from "~/components/AboutUs/Myself.vue";
import Certificate from "~/components/AboutUs/Certificate.vue";

gsap.registerPlugin(ScrollTrigger)

const container = ref(null)

onMounted(() => {
  const sections = gsap.utils.toArray(".panel")
  const sectionWidth = sections[0].offsetWidth

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".sections-container",
      pin: true,
      scrub: 1,
      snap: {snapTo: 1 / (sections.length - 1), duration: 0.3, ease: "power1.inOut"},
      start: "top top",
      end: () => `+=${sectionWidth * (sections.length - 1)}`,
      invalidateOnRefresh: true
    }
  })
})
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
