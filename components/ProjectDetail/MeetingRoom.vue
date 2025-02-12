<script lang="ts" setup>
// Import Swiper Vue components
import {Swiper, SwiperSlide} from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import required Swiper modules
import {Autoplay, EffectCards, Pagination} from 'swiper/modules';

// Define props and data if needed
const swiperModules = [Pagination, EffectCards, Autoplay];

// Images data for better maintainability
const userDashboardImages = [
  {
    src: '/my-project/user-dashbord.png',
    alt: 'user-dashboard'
  },
  {
    src: '/my-project/user-booking.png',
    alt: 'user-booking'
  },
  {
    src: '/my-project/calendar.png',
    alt: 'calendar'
  }
];
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto my-auto py-4 sm:py-6 lg:py-24">
    <img alt="meeting-room" class="w-full mb-10 rounded-lg" src="/public/my-project/meeting-room.png">

    <!-- Main Features Section -->
    <section class="py-12">
      <h1 class="text-3xl font-bold text-indigo-800 mb-8">
        <span aria-hidden="true" class="heading-emoji">🏢</span> Meeting Room Booking System
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Left Column: Why develop application -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold mb-6">
            <span aria-hidden="true" class="heading-emoji">🎯</span> Key Benefits
          </h2>
          <ul class="space-y-4">
            <li class="flex items-start hover:bg-gray-50 p-2 rounded-md transition-transform">
              <div aria-hidden="true" class="emoji-wrapper">⚡</div>
              <p class="flex-1">Streamlined transaction process for efficiency</p>
            </li>
            <li class="flex items-start hover:bg-gray-50 p-2 rounded-md transition-transform">
              <div aria-hidden="true" class="emoji-wrapper">🎯</div>
              <p class="flex-1">Eliminate booking conflicts and redundancies</p>
            </li>
            <li class="flex items-start hover:bg-gray-50 p-2 rounded-md transition-transform">
              <div aria-hidden="true" class="emoji-wrapper">⚡</div>
              <p class="flex-1">Quick and easy booking during peak hours</p>
            </li>
          </ul>
        </div>

        <!-- Right Column: Technologies -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold mb-6">
            <span aria-hidden="true" class="heading-emoji">⚙️</span> Tech Stack
          </h2>
          <ul class="space-y-4">
            <li class="flex items-center hover:bg-gray-50 p-2 rounded-md transition-transform">
              <div aria-hidden="true" class="emoji-wrapper">🎨</div>
              <p class="flex-1">HTML - Structure</p>
            </li>
            <li class="flex items-center hover:bg-gray-50 p-2 rounded-md transition-transform">
              <div aria-hidden="true" class="emoji-wrapper">💅</div>
              <p class="flex-1">Tailwind CSS - Styling</p>
            </li>
            <li class="flex items-center hover:bg-gray-50 p-2 rounded-md transition-transform">
              <div aria-hidden="true" class="emoji-wrapper">⚡</div>
              <p class="flex-1">JavaScript - Functionality</p>
            </li>
            <li class="flex items-center hover:bg-gray-50 p-2 rounded-md transition-transform">
              <div aria-hidden="true" class="emoji-wrapper">🛠️</div>
              <p class="flex-1">PHP - Backend</p>
            </li>
            <li class="flex items-center hover:bg-gray-50 p-2 rounded-md transition-transform">
              <div aria-hidden="true" class="emoji-wrapper">💾</div>
              <p class="flex-1">MSSQL - Database</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Admin Section -->
    <section class="bg-white p-6 rounded-lg mt-8">
      <h2 class="text-3xl font-bold text-indigo-800 mb-6">
        <span aria-hidden="true" class="heading-emoji">👨‍💼</span> Admin Dashboard
      </h2>
      <img alt="admin-dashboard" class="w-full rounded-lg shadow-md mb-6" src="/public/my-project/admin-dashbord.png">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg shadow-md px-6 py-6">
        <h3 class="text-xl font-semibold mb-4">
          <span aria-hidden="true" class="heading-emoji">🎯</span> Admin Responsibilities
        </h3>
        <ul class="space-y-3">
          <li class="flex items-center">
            <span aria-hidden="true" class="emoji-wrapper">📊</span>
            <span>Monitor Dashboard Analytics</span>
          </li>
          <li class="flex items-center">
            <span aria-hidden="true" class="emoji-wrapper">👥</span>
            <span>User Management</span>
          </li>
          <li class="flex items-center">
            <span aria-hidden="true" class="emoji-wrapper">📅</span>
            <span>Booking Management</span>
          </li>
          <li class="flex items-center">
            <span aria-hidden="true" class="emoji-wrapper">🔧</span>
            <span>Equipment Management</span>
          </li>
          <li class="flex items-center">
            <span aria-hidden="true" class="emoji-wrapper">📆</span>
            <span>Calendar Overview</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- User Section -->
    <section class="bg-white p-6 rounded-lg mt-8">
      <h2 class="text-3xl font-bold text-indigo-800 mb-6">
        <span aria-hidden="true" class="heading-emoji">👤</span> User Dashboard
      </h2>
      <div class="space-y-6 py-6">
        <Swiper
            :autoplay="{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }"
            :effect="'cards'"
            :grab-cursor="true"
            :modules="swiperModules"
            class="w-full max-w-2xl mx-auto mySwiper"
        >
          <SwiperSlide v-for="(image, index) in userDashboardImages" :key="index" class="swiper-slide">
            <img
                :alt="image.alt"
                :src="image.src"
                class="w-full h-full object-cover rounded-lg shadow-md"
            >
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 rounded-lg shadow-md px-6 py-6">
        <h3 class="text-xl font-semibold mb-4">
          <span aria-hidden="true" class="heading-emoji">🎯</span> User Features
        </h3>
        <ul class="space-y-3">
          <li class="flex items-center">
            <span aria-hidden="true" class="emoji-wrapper">📅</span>
            <span>View Calendar Bookings</span>
          </li>
          <li class="flex items-center">
            <span aria-hidden="true" class="emoji-wrapper">👤</span>
            <span>Manage Personal Profile</span>
          </li>
          <li class="flex items-center">
            <span aria-hidden="true" class="emoji-wrapper">📝</span>
            <span>Create New Bookings</span>
          </li>
          <li class="flex items-center">
            <span aria-hidden="true" class="emoji-wrapper">🔧</span>
            <span>Equipment Reservation</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
.emoji-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  min-width: 2.5rem;
  margin-right: 1rem;
  font-size: 1.25rem;
}

.heading-emoji {
  display: inline-block;
  margin-right: 0.5rem;
}

.flex {
  transition: transform 0.3s ease;
}

.flex:hover {
  transform: translateX(5px);
}

h1, h2, h3 {
  letter-spacing: 0.05em;
}
</style>