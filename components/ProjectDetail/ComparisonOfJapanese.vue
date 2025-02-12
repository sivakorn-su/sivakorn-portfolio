<script lang="ts" setup>
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Autoplay, EffectCards, Pagination} from 'swiper/modules';

const swiperModules = [Pagination, EffectCards, Autoplay];

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
    <img alt="Japanese DTW Project Header" class="w-full mb-10 rounded-lg shadow-lg" src="/public/my-project/dtw.png">

    <!-- Main Features Section -->
    <section class="py-12">
      <h1 class="text-3xl font-bold text-indigo-800 mb-8 flex items-center">
        <span aria-hidden="true" class="heading-emoji flex items-center justify-center">🎌</span>
        <span>Comparison of Japanese Sounds Using Dynamic Time Warping</span>
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Left Column: Project Purpose -->
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 class="text-2xl font-semibold mb-6 flex items-center">
            <span aria-hidden="true" class="heading-emoji flex items-center justify-center">🎯</span>
            <span>Project Purpose</span>
          </h2>
          <ul class="space-y-4">
            <li class="flex items-start hover:bg-gray-50 p-2 rounded-md transition-all">
              <div aria-hidden="true" class="emoji-wrapper flex items-center justify-center">⚡</div>
              <p class="flex-1">
                This app compares sound patterns and measures their similarity,
                designed for students who want to practice Japanese pronunciation
                against native speaker references.
              </p>
            </li>
          </ul>
        </div>

        <!-- Right Column: Technologies -->
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 class="text-2xl font-semibold mb-6 flex items-center">
            <span aria-hidden="true" class="heading-emoji flex items-center justify-center">⚙️</span>
            <span>Tech Stack</span>
          </h2>
          <ul class="space-y-4">
            <li class="feature-item">
              <div aria-hidden="true" class="emoji-wrapper flex items-center justify-center">🐍</div>
              <p class="flex-1">Python - Core analysis engine</p>
            </li>
            <li class="feature-item">
              <div aria-hidden="true" class="emoji-wrapper flex items-center justify-center">🎙️</div>
              <p class="flex-1">Dataset: JVS_ver1 - Japanese voice samples</p>
            </li>
            <li class="feature-item">
              <div aria-hidden="true" class="emoji-wrapper flex items-center justify-center">🔊</div>
              <p class="flex-1">Vosk-model-ja-0.22 - Speech recognition toolkit</p>
            </li>
            <li class="feature-item">
              <div aria-hidden="true" class="emoji-wrapper flex items-center justify-center">📊</div>
              <p class="flex-1">Praat - Audio analysis program</p>
            </li>
          </ul>
        </div>
      </div>

      <!-- Workflow Section -->
      <section class="bg-white p-6 rounded-lg mt-8 shadow-md hover:shadow-lg transition-shadow">
        <h2 class="text-3xl font-bold text-indigo-800 mb-6 flex items-center">
          <span aria-hidden="true" class="heading-emoji flex items-center justify-center">⏱️</span>
          <span>Workflow</span>
        </h2>
        <img alt="Project Workflow Diagram" class="w-full rounded-lg shadow-md py-6"
             src="/public/my-project/workflow.png">
      </section>

      <!-- Speech Analysis Section -->
      <section class="bg-white p-6 rounded-lg mt-8 shadow-md hover:shadow-lg transition-shadow">
        <h2 class="text-3xl font-bold text-indigo-800 mb-6 flex items-center">
          <span aria-hidden="true" class="heading-emoji flex items-center justify-center">🔍</span>
          <span>Speech Analysis</span>
        </h2>
        <img alt="Speech Data Transformation" class="w-full rounded-lg shadow-md mb-6"
             src="/public/my-project/transform-data.png">
      </section>

      <!-- Dataset Section -->
      <section class="bg-white p-6 rounded-lg mt-8 shadow-md hover:shadow-lg transition-shadow">
        <h2 class="text-3xl font-bold text-indigo-800 mb-6 flex items-center">
          <span aria-hidden="true" class="heading-emoji flex items-center justify-center">💾</span>
          <span>Dataset: JVS_ver1</span>
        </h2>
        <img alt="JVS Dataset Overview" class="w-full rounded-lg shadow-md mb-6"
             src="/public/my-project/dataset.png">
      </section>

      <!-- Voice Recognition Section -->
      <section class="bg-white p-6 rounded-lg mt-8 shadow-md hover:shadow-lg transition-shadow">
        <h2 class="text-3xl font-bold text-indigo-800 mb-6 flex items-center">
          <span aria-hidden="true" class="heading-emoji flex items-center justify-center">🗣️</span>
          <span>Speech Recognition</span>
        </h2>
        <img alt="Vosk Model Speech Recognition" class="w-full rounded-lg shadow-md mb-6"
             src="/public/my-project/DataPrediction.png">
        <p class="text-gray-700">
          Using vosk-model-ja-0.22, a specialized toolkit for Japanese speech recognition and analysis.
        </p>
      </section>

      <!-- Data Transformation Section -->
      <section class="bg-white p-6 rounded-lg mt-8 shadow-md hover:shadow-lg transition-shadow">
        <h2 class="text-3xl font-bold text-indigo-800 mb-6 flex items-center">
          <span aria-hidden="true" class="heading-emoji flex items-center justify-center">📈</span>
          <span>Intensity & Pitch Conversion</span>
        </h2>
        <img alt="Audio to Intensity and Pitch Transformation" class="w-full rounded-lg shadow-md mb-6"
             src="/public/my-project/ConvertToIntensityAndPitch.png">
      </section>

      <!-- Speaker Comparison Section -->
      <section class="bg-white p-6 rounded-lg mt-8 shadow-md hover:shadow-lg transition-shadow">
        <h2 class="text-3xl font-bold text-indigo-800 mb-6 flex items-center">
          <span aria-hidden="true" class="heading-emoji flex items-center justify-center">🔊</span>
          <span>Speaker Comparison</span>
        </h2>
        <img alt="Male and Female Speaker Comparison" class="w-full rounded-lg shadow-md mb-6"
             src="/public/my-project/compear.png">
        <p class="text-gray-700">
          Visual representation of speech patterns between male and female speakers.
        </p>
      </section>

      <!-- DTW Explanation Section -->
      <section class="bg-white p-6 rounded-lg mt-8 shadow-md hover:shadow-lg transition-shadow">
        <h2 class="text-3xl font-bold text-indigo-800 mb-6 flex items-center">
          <span aria-hidden="true" class="heading-emoji flex items-center justify-center">🔄</span>
          <span>Dynamic Time Warping</span>
        </h2>
        <img alt="Dynamic Time Warping Visualization" class="w-full rounded-lg shadow-md mb-6"
             src="/public/my-project/dtw.png">
        <p class="text-gray-700 leading-relaxed">
          Dynamic Time Warping is a sophisticated algorithm that measures similarity between time-dependent sequences.
          It calculates the optimal alignment between two series by stretching or compressing segments to accommodate
          variations in speed, making it ideal for comparing speech patterns regardless of speaking rate.
        </p>
      </section>

      <!-- Heatmap Comparison Section -->
      <section class="bg-white p-6 rounded-lg mt-8 shadow-md hover:shadow-lg transition-shadow">
        <h2 class="text-3xl font-bold text-indigo-800 mb-6 flex items-center">
          <span aria-hidden="true" class="heading-emoji flex items-center justify-center">🌡️</span>
          <span>Speaker Similarity Heatmap</span>
        </h2>
        <img alt="Speaker Comparison Heatmap" class="w-full rounded-lg shadow-md mb-6"
             src="/public/my-project/heatmap.png">
      </section>

      <!-- Results Section -->
      <section class="bg-white p-6 rounded-lg mt-8 shadow-md hover:shadow-lg transition-shadow">
        <h2 class="text-3xl font-bold text-indigo-800 mb-6 flex items-center">
          <span aria-hidden="true" class="heading-emoji flex items-center justify-center">🏁</span>
          <span>Comparison Results</span>
        </h2>
        <img alt="Final Comparison Results" class="w-full rounded-lg shadow-md mb-6"
             src="/public/my-project/Result.png">
        <p class="text-gray-700 leading-relaxed">
          The final analysis shows quantifiable similarities and differences between speakers,
          providing valuable feedback for pronunciation practice.
        </p>
      </section>
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
  display: inline-flex;
  margin-right: 0.75rem;
  font-size: 1.25em;
  width: 1.5em;
  height: 1.5em;
}

.feature-item {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: all 0.3s ease;
}

.feature-item:hover {
  background-color: #f3f4f6;
  transform: translateX(5px);
}

h1, h2, h3 {
  letter-spacing: 0.05em;
}

section {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

section:hover {
  transform: translateY(-2px);
}
</style>