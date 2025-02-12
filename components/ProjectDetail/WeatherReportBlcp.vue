<script lang="ts" setup>
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto justify-center items-center">
    <img alt="BLCP" class="w-full mb-10" src="/public/my-project/BLCP.png">

    <div class="py-12">
      <h1 class="text-3xl font-bold text-indigo-800 mb-8">
        <span class="heading-emoji">🌦️</span> Weather Report (Project with BLCP Co.Ltd)
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Left Column: Why develop application -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold mb-6">
            <span class="heading-emoji">🎯</span> Key Objectives
          </h2>
          <ul class="space-y-4">
            <li class="flex items-start hover:bg-gray-50 p-2 rounded-md">
              <div class="emoji-wrapper">🌍</div>
              <p class="flex-1">According to environmental laws, company employees are aware of the standards for air
                quality in the neighborhoods where they reside.</p>
            </li>
            <li class="flex items-start hover:bg-gray-50 p-2 rounded-md">
              <div class="emoji-wrapper">🏥</div>
              <p class="flex-1">Follow the proper guidelines based on the health recommendations in varied climatic
                situations.</p>
            </li>
            <li class="flex items-start hover:bg-gray-50 p-2 rounded-md">
              <div class="emoji-wrapper">📱</div>
              <p class="flex-1">Easy and convenient to get information on every device.</p>
            </li>
          </ul>
        </div>

        <!-- Right Column: Tech Stack -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold mb-6">
            <span class="heading-emoji">⚙️</span> Tech Stack
          </h2>
          <ul class="space-y-4">
            <li class="flex items-center hover:bg-gray-50 p-2 rounded-md">
              <div class="emoji-wrapper">🎨</div>
              <p class="flex-1">HTML - Structure</p>
            </li>
            <li class="flex items-center hover:bg-gray-50 p-2 rounded-md">
              <div class="emoji-wrapper">💅</div>
              <p class="flex-1">CSS - Styling</p>
            </li>
            <li class="flex items-center hover:bg-gray-50 p-2 rounded-md">
              <div class="emoji-wrapper">⚡</div>
              <p class="flex-1">JavaScript - Functionality</p>
            </li>
            <li class="flex items-center hover:bg-gray-50 p-2 rounded-md">
              <div class="emoji-wrapper">🔷</div>
              <p class="flex-1">ASP.Net MVC - Backend Framework</p>
            </li>
            <li class="flex items-center hover:bg-gray-50 p-2 rounded-md">
              <div class="emoji-wrapper">💾</div>
              <p class="flex-1">MSSQL - Database</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
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

.flex:hover {
  transform: translateX(5px);
  transition: transform 0.3s ease;
}

h1, h2 {
  letter-spacing: 0.05em;
}
</style>