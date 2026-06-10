<template>
  <section class="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-6 lg:py-24">
    <h2 class="text-4xl font-bold text-center mb-12">🛠️ Main Stacks</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <article
          v-for="group in skillGroups"
          :key="group.title"
          class="bg-white rounded-lg border border-gray-100 p-6 shadow-sm"
      >
        <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ group.title }}</h3>
        <div class="flex flex-wrap gap-2">
          <span
              v-for="skill in group.skills"
              :key="skill"
              class="px-3 py-2 rounded-full bg-amber-100 text-gray-900 text-sm font-medium"
          >
            {{ skill }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
const skillGroups = [
  {
    title: 'Languages',
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Python', 'SQL']
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Vue.js', 'Nuxt.js', 'Next.js', 'React.js', 'Svelte', 'Laravel', 'FastAPI', 'ASP.NET MVC', 'Tailwind CSS']
  },
  {
    title: 'Databases',
    skills: ['MSSQL', 'MySQL', 'PostgreSQL']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'CI/CD', 'Docker', 'Cloudflare', 'AWS S3']
  }
];
</script>
