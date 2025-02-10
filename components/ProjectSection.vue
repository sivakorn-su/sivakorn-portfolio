<!-- ProjectsSection.vue -->
<template>
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-24">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Project Card Component -->
      <div v-for="project in projects"
           :key="project.id"
           ref="cards"
           class="project-card bg-white rounded-xl p-6 relative overflow-hidden transition-all duration-300 transform-gpu hover:ring-2 hover:ring-purple-500 shadow-lg"
           @mouseleave="handleMouseLeave"
           @mousemove="handleMouseMove">

        <div class="mb-12">
          <div class="text-sm text-gray-500 mb-2">{{ project.type }} on {{ project.date }}</div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">{{ project.title }}</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in project.tags"
                  :key="tag"
                  class="px-3 py-1 text-xs font-medium rounded-full bg-amber-400 text-black">
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Footer -->
        <div class="flex items-center gap-3">
          <img :alt="project.title" :src="project.icon" class="w-6 h-6"/>
          <div>
            <div class="text-gray-900 font-medium">{{ project.title }}</div>
            <div class="text-sm text-gray-500">{{ project.description }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-12">
      <button class="px-6 py-3 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow">
        + MORE PROJECT
      </button>
    </div>
  </section>
</template>

<script setup>
import {ref} from 'vue';

const cards = ref([]);

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

const projects = [
  {
    id: 1,
    type: 'Complete at',
    date: 'Sep-2022',
    title: 'Weather Report',
    tags: ['ASP.Net MVC', 'Javascript', 'MSSQL', 'HTML', 'CSS'],
    icon: '/icons/blcp_power_limited_logo.jpg',
    description: 'Project Intern'
  },
  {
    id: 2,
    type: 'Complete at',
    date: 'May-2023',
    title: 'Meeting room booking management system',
    tags: ['MANAGEMENT SYSTEM', 'HTML', 'Tailwind CSS', 'Javascript', 'PHP', 'MSSQL'],
    icon: '/icons/meeting-interview-svgrepo-com.svg',
    description: 'Final project of IT'
  },
  {
    id: 3,
    type: 'Complete at',
    date: 'Dec-2023',
    title: 'Comparison of Japanese sounds using dynamic time warping',
    tags: ['Dynamic Time Warping'],
    icon: '/icons/japan-svgrepo-com.svg',
    description: 'Project Intern'
  }
];

const getTagColor = (tag) => {
  const colors = {
    'NUXT.JS': 'bg-amber-400 text-black',
    'POSTGRESQL': 'bg-amber-400  text-black',
    'FIREBASE AUTH': 'bg-amber-400  text-black',
    'LARAVEL': 'bg-amber-400 text-black',
    'MYSQL': 'bg-amber-400  text-black',
    'MANAGEMENT SYSTEM': 'bg-amber-400 text-black',
    'FIRESTONE': 'bg-amber-400  text-black',
    'TAILWIND': 'bg-amber-400  text-black'
  };
  return colors[tag] || 'bg-gray-200 text-gray-800';
};
</script>

<style scoped>
.project-card {
  transition: transform 0.2s ease-out;
  transform-style: preserve-3d;
  will-change: transform;
}
</style>