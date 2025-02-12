<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, EffectCards, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

const router = useRouter();
const cards = ref([]);

// Project emoji mapping
const projectEmojis = {
  'Weather Report': '🌤️',
  'Meeting room booking management system': '📅',
  'Comparison of Japanese sounds using dynamic time warping': '🎌'
};

const projects = [
  {
    id: 1,
    type: 'Complete at',
    date: 'Sep-2022',
    title: 'Weather Report',
    tags: ['ASP.Net MVC', 'Javascript', 'MSSQL', 'HTML', 'CSS'],
    icon: '/icons/blcp_power_limited_logo.jpg',
    description: 'Project Intern',
    link: '/my-projects/weather-report',
  },
  {
    id: 2,
    type: 'Complete at',
    date: 'May-2023',
    title: 'Meeting room booking management system',
    tags: ['MANAGEMENT SYSTEM', 'HTML', 'Tailwind CSS', 'Javascript', 'PHP', 'MSSQL'],
    icon: '/icons/meeting-interview-svgrepo-com.svg',
    description: 'Final project of IT',
    link: '/my-projects/meeting-room',
  },
  {
    id: 3,
    type: 'Complete at',
    date: 'Dec-2023',
    title: 'Comparison of Japanese sounds using dynamic time warping',
    tags: ['Dynamic Time Warping'],
    icon: '/icons/japan-svgrepo-com.svg',
    description: 'Project Intern',
    link: '/my-projects/comparison-of-japanese',
  }
];

const navigateToProject = (link) => {
  if (link) {
    router.push(link);
  }
};

const handleMouseMove = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = (y - centerY) / 20;
  const rotateY = -(x - centerX) / 20;

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
};

const handleMouseLeave = (e) => {
  const card = e.currentTarget;
  card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
};
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-20">
    <h2 class="text-4xl font-bold text-center mb-12">
      <span aria-hidden="true" class="mr-2">💼</span>My Projects
    </h2>

    <!-- Desktop View - Grid Layout -->
    <div class="hidden md:block">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in projects"
             :key="project.id"
             ref="cards"
             class="project-card bg-white rounded-xl p-6 relative overflow-hidden transition-all duration-300 transform-gpu hover:ring-2 hover:ring-purple-500 shadow-lg cursor-pointer"
             @click="navigateToProject(project.link)"
             @mouseleave="handleMouseLeave"
             @mousemove="handleMouseMove">

          <div class="mb-12">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm text-gray-500">{{ project.type }} {{ project.date }}</span>
              <span aria-hidden="true" class="text-2xl">{{ projectEmojis[project.title] }}</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ project.title }}</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in project.tags"
                    :key="tag"
                    class="px-3 py-1 text-xs font-medium rounded-full bg-amber-400 text-black">
                {{ tag }}
              </span>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <img :alt="project.title" :src="project.icon" class="w-6 h-6"/>
            <div>
              <div class="text-gray-900 font-medium">{{ project.title }}</div>
              <div class="text-sm text-gray-500">{{ project.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile View - Swiper Cards -->
    <div class="md:hidden">
      <Swiper
          :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }"
          :effect="'cards'"
          :grab-cursor="true"
          :modules="[EffectCards, Autoplay, Pagination]"
          :pagination="{
          clickable: true,
          dynamicBullets: true
        }"
          class="mySwiper"
      >
        <SwiperSlide v-for="project in projects" :key="project.id" class="swiper-slide">
          <div class="project-card bg-white rounded-xl p-6 h-full">
            <div class="mb-12">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-gray-500">{{ project.type }} {{ project.date }}</span>
                <span aria-hidden="true" class="text-2xl">{{ projectEmojis[project.title] }}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">{{ project.title }}</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in project.tags"
                      :key="tag"
                      class="px-3 py-1 text-xs font-medium rounded-full bg-amber-400 text-black">
                  {{ tag }}
                </span>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <img :alt="project.title" :src="project.icon" class="w-6 h-6"/>
              <div>
                <div class="text-gray-900 font-medium">{{ project.title }}</div>
                <div class="text-sm text-gray-500">{{ project.description }}</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="text-center mt-12">
      <a class="px-6 py-3 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow" href="/projects">
        + MORE PROJECTS
      </a>
    </div>
  </section>
</template>

<style scoped>
.project-card {
  transition: transform 0.2s ease-out;
  transform-style: preserve-3d;
  will-change: transform;
}

.mySwiper {
  width: 100%;
  max-width: 340px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  min-height: 400px;
}

:deep(.swiper-pagination-bullet) {
  background-color: theme('colors.purple.500');
}

:deep(.swiper-pagination-bullet-active) {
  background-color: theme('colors.purple.700');
}
</style>