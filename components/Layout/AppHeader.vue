<template>
  <nav class="fixed top-0 left-0 right-0 bg-white z-50 ">
    <div class="max-w-4xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link class="flex items-center" to="/">
            <div class="text-black font-bold py-2 px-4 rounded">
              🧑‍💻 Sivakorn Suttisom
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
  {name: 'About My Self', path: '/about-my-self'},
  {name: 'Projects', path: '/projects'}
];

const currentPath = computed(() => route.path);
</script>

<style scoped>
/* Add any additional styles here */
</style>