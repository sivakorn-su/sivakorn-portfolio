<template>
  <section class="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-10 text-black">
    <h2 class="text-4xl font-medium leading-tight mb-10 text-center">
      💼 &nbsp; Experience
    </h2>

    <div class="space-y-6">
      <article
          v-for="experience in experiences"
          :key="experience.company"
          class="bg-white border border-gray-100 rounded-lg p-6 shadow-sm"
      >
        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
          <div>
            <h3 class="text-2xl font-semibold">{{ experience.role }}</h3>
            <p class="text-gray-600">{{ experience.company }} · {{ experience.location }}</p>
          </div>
          <p class="text-sm font-medium text-gray-500">{{ experience.period }}</p>
        </div>

        <ul class="space-y-3 text-gray-700 leading-relaxed">
          <li
              v-for="highlight in experience.highlights"
              :key="highlight"
              class="flex gap-3"
          >
            <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-500"></span>
            <span>{{ highlight }}</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
const experiences = [
  {
    role: 'Software Developer',
    company: 'Zenith Comp',
    location: 'Thailand',
    period: 'April 2025 - Present',
    highlights: [
      'Full-stack development across .NET, FastAPI, Next.js, and Svelte applications.',
      'Designed an AI chatbot platform for up to 1,000 concurrent users with image generation, credit-based usage, Agentic AI, and function calling.',
      'Built API gateway, HR management, researcher management, and meeting transcription systems for production use.'
    ]
  },
  {
    role: 'Backend Software Engineer (PHP Laravel)',
    company: 'Wawa Service and Marketing Group Co., Ltd.',
    location: 'Thailand',
    period: 'May 2023 - February 2025',
    highlights: [
      'Developed and maintained Laravel applications with MySQL and PostgreSQL.',
      'Designed RESTful APIs and supported frontend delivery with Vue.js and Nuxt.js.',
      'Worked directly with clients and cross-functional teams to turn requirements into shipped software.'
    ]
  },
  {
    role: 'Cooperative Education Student (Internship)',
    company: 'Tamkang University',
    location: 'Tamsui, Taiwan',
    period: 'October - December 2022',
    highlights: [
      'Researched speech recognition and Dynamic Time Warping for dynamic sound detection using Python.',
      'Applied machine learning techniques to analyze Japanese pronunciation from Taiwanese speakers.'
    ]
  },
  {
    role: 'Full Stack Developer Intern (.NET)',
    company: 'BLCP Power Co., Ltd.',
    location: 'Rayong, Thailand',
    period: 'May - September 2022',
    highlights: [
      'Built and deployed an internal ASP.NET MVC and MSSQL web application.',
      'Fixed bugs, handled user feedback, and performed test cases for internal and contractor-built applications.'
    ]
  }
];
</script>
