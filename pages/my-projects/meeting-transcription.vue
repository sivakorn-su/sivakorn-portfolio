<template>
  <div class="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-12 lg:py-24 text-black">
    <section class="bg-white rounded-lg border border-gray-100 p-6 md:p-8 shadow-sm">
      <p class="text-sm font-semibold text-purple-600 mb-3">FastAPI · Python · Whisper · Vue.js · Laravel</p>
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Meeting Transcription & Speaker Diarization System
      </h1>
      <p class="text-gray-700 leading-relaxed mb-8">
        A full-stack meeting transcription platform that processes audio and video recordings, identifies individual
        speakers, and returns structured speaker-labeled transcripts with timestamps.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article class="rounded-lg bg-gray-50 p-5">
          <h2 class="text-xl font-semibold mb-4">Core Responsibilities</h2>
          <ul class="space-y-3 text-gray-700">
            <li>Built asynchronous FastAPI pipelines for uploads, transcription, diarization, and results.</li>
            <li>Integrated OpenAI Whisper and WeSpeaker-based speaker classification.</li>
            <li>Added overlap detection and branching logic for simultaneous speech segments.</li>
          </ul>
        </article>

        <article class="rounded-lg bg-gray-50 p-5">
          <h2 class="text-xl font-semibold mb-4">Delivery</h2>
          <ul class="space-y-3 text-gray-700">
            <li>Improved transcript quality with an LLM-powered spell correction pipeline using Together AI API.</li>
            <li>Containerized the application with Docker and deployed it on Hugging Face Spaces.</li>
            <li>Built the user interface with Laravel and Vue.js.</li>
          </ul>
        </article>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
</script>
