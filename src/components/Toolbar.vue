<script setup lang="ts">
const links = ref([
  'HOME',
  'THE COMPANY',
  'SERVICES',
  'THEMES',
  'GALLERY',
  'NEWS & INFORMATION',
  'CONTACT ECLIPSE',
])
</script>

<template>
  <div class="bg-gray-500 flex justify-end h-20 w-full">
    <h2 v-for="link in links" :key="link" class="mx-2 my-auto">
      {{ link }}
    </h2>
  </div>
</template>
