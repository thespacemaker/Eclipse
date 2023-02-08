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
    title: 'CONTACT ECLIPSE',
    url: '/contact',
  },
])
</script>

<template>
  <div class="flex justify-end h-20 w-full absolute fixed bg-transparent">
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
