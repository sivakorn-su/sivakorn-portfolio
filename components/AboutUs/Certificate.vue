```vue
<template>
  <div class="max-w-5xl mx-auto px-6 text-black">
    <!-- Main Content -->
    <div class="py-16">
      <h1 class="text-5xl font-medium leading-tight mb-12">
        📜 &nbsp; Certificates & Awards &nbsp; 🏆
      </h1>

      <div class="space-y-8 text-xl max-w-2xl">
        <div class="flex items-center justify-between border-b pb-4">
          <div class="flex items-center space-x-4">
            <img alt="ARIT Logo" class="w-16 h-16 object-contain" src="/icons/arit.png">
            <div>
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
            <div>
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