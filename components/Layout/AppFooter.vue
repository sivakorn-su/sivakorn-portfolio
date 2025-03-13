<template>
  <footer class="fixed bottom-0 right-0 my-10 mx-10 bg-white z-50">
    <UPopover :popper="{ placement: 'left-start' }" class="justify-end items-end">
      <UButton
          icon="i-heroicons-chat-bubble-left-right"
          size="xl"
          color="blue"
          square
          variant="solid"
      />
      <template #panel>
        <div class="p-4">
          <chat-component></chat-component>
        </div>
      </template>
    </UPopover>
  </footer>
</template>
<script lang="ts" setup>
</script>