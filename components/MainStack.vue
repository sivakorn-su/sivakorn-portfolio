<template>
  <section class="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-6 lg:py-24">
    <h2 class="text-4xl font-bold text-center mb-12"> 🛠️ Main Stacks</h2>

    <div class="max-w-4xl mx-auto">
      <!-- First row -->
      <div class="flex flex-wrap justify-center gap-6 mb-6">
        <div v-for="(tech, index) in mainTechs" :key="index"
             class="w-28 h-28 rounded-xl shadow-sm flex items-center justify-center bg-white p-4 transition-transform hover:scale-110">
          <img :alt="tech.name" :src="tech.icon" class="w-full h-full object-contain">
        </div>
      </div>

      <!-- Second row -->
      <div class="flex flex-wrap justify-center gap-6 mb-8">
        <div v-for="(tech, index) in secondaryTechs" :key="index"
             class="w-28 h-28 rounded-xl shadow-sm flex items-center justify-center bg-white p-4 transition-transform hover:scale-110">
          <img :alt="tech.name" :src="tech.icon" class="w-full h-full object-contain">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StackSection',
  data() {
    return {
      mainTechs: [
        {name: 'HTML5', icon: '/icons/html5.svg'},
        {name: 'CSS3', icon: '/icons/css3.svg'},
        {name: 'Angular', icon: '/icons/Js.svg'},
        {name: 'Vue.js', icon: '/icons/Vue.svg'},
        {name: 'React', icon: '/icons/Nuxt.svg'},
        {name: 'Svelte', icon: '/icons/Laravel.svg'}
      ],
      secondaryTechs: [
        {name: 'Next.js', icon: '/icons/NodeJs.svg'},
        {name: 'Astro', icon: '/icons/NestJS.svg'},
        {name: 'Firebase', icon: '/icons/tailwindcss.svg'},
        {name: 'Laravel', icon: '/icons/dotnet.svg'},
        {name: 'Node.js', icon: '/icons/python.png'}
      ]
    }
  }
}
</script>

<style scoped>
.shadow-sm {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.hover\:shadow-md:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>