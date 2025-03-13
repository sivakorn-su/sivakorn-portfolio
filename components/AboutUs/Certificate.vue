```vue
<template>
  <div class="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-6 text-black">
    <!-- Main Content -->
    <div class="py-12">
      <h1 class="text-5xl font-medium leading-tight mb-16 text-center">
        📜 &nbsp; Certificates & Awards &nbsp; 🏆
      </h1>

      <div class="space-y-6 text-xl justify-center items-center px-5">
        <div class="flex items-center justify-between border-b pb-4">
          <div class="flex items-center space-x-6">
            <img alt="ARIT Logo" class="w-16 h-16 object-contain" src="/icons/arit.png">
            <div class="px-4">
              <div class="font-semibold">💻 &nbsp; System Design Analyst Certificate</div>
              <div class="text-gray-600">ARIT Company Limited</div>
            </div>
          </div>
          <NuxtLink
              class="text-blue-600 hover:underline"
              target="_blank"
              to="https://tpqi-net.tpqi.go.th/cer/print/MTMwODU2"
          >
            🔗 &nbsp; View Certificate
          </NuxtLink>
        </div>
        <div class="flex items-center justify-between border-b pb-4">
          <div class="flex items-center space-x-4">
            <img alt="ICDL Logo" class="w-16 h-16 object-contain" src="/icons/ICDL.svg.png">
            <div class="px-4">
              <div class="font-semibold">📱 &nbsp; Application Essentials</div>
              <div class="text-gray-600">ICDL</div>
            </div>
          </div>
          <NuxtLink
              class="text-blue-600 hover:underline"
              target="_blank"
              to="https://profile.icdlasia.org/fa3cc120-7a61-4b21-817c-af74b2f4a850"
          >
            🔗 &nbsp; View Certificate
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// No additional logic needed for this component
</script>
```