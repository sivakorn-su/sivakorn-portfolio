<script lang="ts" setup>
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import required Swiper modules
import {Autoplay, EffectCards, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/vue";

// Define props and data if needed
const swiperModules = [Pagination, EffectCards, Autoplay];

// Images data for better maintainability
const hobby = [
  {
    src: '/hobby/hobby1.jpg',
    alt: 'user-dashboard',
  },
  {
    src: '/hobby/hobby2.jpg',
    alt: 'user-booking',
  },
  {
    src: '/hobby/hobby3.jpg',
    alt: 'calendar',
  },
  {
    src: '/hobby/hobby4.jpg',
    alt: 'calendar',
  },
  {
    src: '/hobby/hobby5.jpg',
    alt: 'calendar',
  }
];
const hobby2 = [
  {
    src: '/hobby/hobby6.jpg',
    alt: 'user-dashboard',
  },
  {
    src: '/hobby/hobby7.jpg',
    alt: 'user-booking',
  },
  {
    src: '/hobby/hobby8.jpg',
    alt: 'calendar',
  },
  {
    src: '/hobby/hobby9.jpg',
    alt: 'calendar',
  }
  ,
  {
    src: '/hobby/hobby10.jpg',
    alt: 'calendar',
  }
];
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 text-black justify-center items-center">
    <div class="py-16">
      <!-- Header Section with Animated Emojis -->
      <h1 class="text-5xl font-medium leading-tight mb-12 text-center animate-bounce">
        🎨 My Creative Hobbies 🎯
      </h1>

      <!-- Carousel Container with improved spacing -->
      <div class="flex flex-col md:flex-row justify-center items-center gap-8 ml-20 px-4 md:px-10">
        <!-- First Swiper -->
        <div class="w-full md:w-1/2 max-w-sm">
          <Swiper
              :autoplay="{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }"
              :effect="'cards'"
              :grab-cursor="true"
              :modules="swiperModules"
              :width="280"
              class="mySwiper"
          >
            <SwiperSlide
                v-for="(image, index) in hobby"
                :key="index"
                class="swiper-slide relative"
            >
              <img
                  :alt="image.alt"
                  :src="image.src"
                  class="w-full h-full object-cover rounded-lg shadow-lg"
              >
              <span class="absolute top-2 right-2 text-2xl" v-text="image.emoji"></span>
            </SwiperSlide>
          </Swiper>
        </div>

        <!-- Second Swiper with different delay -->
        <div class="w-full md:w-1/2 max-w-sm mt-8 md:mt-0">
          <Swiper
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }"
              :effect="'cards'"
              :grab-cursor="true"
              :modules="swiperModules"
              :width="280"
              class="mySwiper"
          >
            <SwiperSlide
                v-for="(image, index) in hobby2"
                :key="index"
                class="swiper-slide relative"
            >
              <img
                  :alt="image.alt"
                  :src="image.src"
                  class="w-full h-full object-cover rounded-lg shadow-lg"
              >
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mySwiper {
  padding: 1rem;
}

.swiper-slide {
  transition: transform 0.3s ease;
}

.swiper-slide:hover {
  transform: scale(1.02);
}
</style>