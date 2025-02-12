<script lang="ts" setup>
interface Prop {
  item: any
}

defineProps<Prop>()
</script>

<template>
  <UCard
      class="group transition-all duration-300 hover:shadow-lg active:scale-95 sm:hover:scale-105
           hover:shadow-purple-500/50 touch-manipulation backdrop-blur-sm"
  >
    <img
        :alt="item.label"
        :src="item.image"
        class="w-full h-48 object-cover rounded-t-lg transition-transform group-hover:opacity-90"
    />
    <div class="space-y-2 mt-4">
      <h4 class="font-medium group-hover:text-purple-500 transition-colors">
        {{ item.label }}
      </h4>
      <p class="text-gray-600  text-sm">
        {{ item.description }}
      </p>
    </div>
    <div class="mt-4 text-right">
      <a
          :href="item.link"
          class="group-hover:bg-purple-50 text-purple-500  rounded-lg py-2 px-4 inline-block transition-colors"
          rel="noopener noreferrer"
          target="_blank"
      >
        View Project
      </a>
    </div>
  </UCard>
</template>

<style scoped>
</style>