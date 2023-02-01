<script setup lang="ts">
const links = ref([
  {
    title: 'HOME',
    url: '/',
  },
  {
    title: 'THE COMPANY',
    url: '/company',
  },
  {
    title: 'SERVICES',
    url: '/services',
  },
  {
    title: 'THEMES',
    url: '/themes',
  },
  {
    title: 'GALLERY',
    url: '/gallery',
  },
  {
    title: 'NEWS & INFORMATION',
    url: '/news',
  },
  {
    title: 'CONTACT ECLIPSE',
    url: '/contact',
  },
])
</script>

<template>
  <div class="bg-gray-500 flex justify-end h-20 w-full">
    <a
      v-for="link in links"
      :key="link.title"
      class="mx-2 my-auto"
      :href="link.url"
    >
      <h2>
        {{ link.title }}
      </h2>
    </a>
  </div>
</template>
