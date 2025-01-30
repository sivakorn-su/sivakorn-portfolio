<template>
  <nav class="fixed top-0 left-0 right-0 bg-white z-50">
    <div class="max-w-4xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link class="flex items-center" to="/">
            <div class="bg-black text-white font-bold py-2 px-4 rounded">
              SSDX
            </div>
          </router-link>
        </div>

        <!-- Navigation Links -->
        <div class="flex items-center space-x-8">
          <router-link
              v-for="item in navItems"
              :key="item.path"
              :class="{ 'text-purple-600': item.path === currentPath }"
              :to="item.path"
              class="text-gray-600 hover:text-purple-600 transition-colors"
          >
            {{ item.name }}
          </router-link>

          <!-- Theme Toggle -->
          <div class="flex items-center bg-gray-100 rounded-full p-1">
            <button
                :class="{ 'bg-white shadow-sm': !isDark }"
                class="w-8 h-8 rounded-full flex items-center justify-center focus:outline-none"
                @click="toggleTheme"
            >
              <svg
                  v-if="!isDark"
                  class="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                />
              </svg>
            </button>
            <button
                :class="{ 'bg-white shadow-sm': isDark }"
                class="w-8 h-8 rounded-full flex items-center justify-center focus:outline-none"
                @click="toggleTheme"
            >
              <svg
                  v-if="isDark"
                  class="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {computed, ref} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();
const isDark = ref(false);

const navItems = [
  {name: 'Home', path: '/'},
  {name: 'Skills', path: '/skills'},
  {name: 'Projects', path: '/projects'}
];

const currentPath = computed(() => route.path);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  // Add your theme switching logic here
  document.documentElement.classList.toggle('dark');
};
</script>

<style scoped>
/* Add any additional styles here */
</style>