<script lang="ts" setup>
const projectList = ref([
  {
    'id': 1,
    'label': 'MYWAWA',
    'description': 'Website E-Commerce',
    'image': './project/MYWAWA.png',
    'link': 'https://www.mywawa.me/',
  },
  {
    'id': 2,
    'label': 'WAWA-X',
    'description': 'SOFTWARE HOUSE',
    'image': './project/WAWA-X.png',
    'link': 'https://www.wawa-x.com/',
  },
  {
    'id': 3,
    'label': 'Wawa Province',
    'description': 'Website E-Commerce For FTI',
    'image': './project/Wawa Province.png',
    'link': 'https://www.mywawa.me/wawaprovince',
  },
  {
    'id': 4,
    'label': 'THAI_KK',
    'description': 'Website E-Commerce',
    'image': './project/THAI_KK.png',
    'link': 'https://www.thaikk-shop.com/',
  },
  {
    'id': 5,
    'label': 'TCRSS',
    'description': 'INFORMATIVE Website',
    'image': './project/TCRSS.png',
    'link': 'https://staging.tcrss.com/',
  },
]);
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12 lg:py-24 justify-center items-center ">
    <div class="grid grid-cols-1 lg:gap-4 lg:grid-cols-3 ">
      <ProjectCard
          v-for="(item, index) in projectList"
          :key="item.id"
          :item="item"
      />
    </div>
  </div>
</template>

<style scoped>

</style>