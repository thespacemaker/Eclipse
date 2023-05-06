<script setup lang="ts">
const imageList = ref([
  {
    src: 'logos/arlington.png',
    aspect: 'aspect-video',
  },
  {
    src: 'logos/ATT-logo.png',
    aspect: 'aspect-video',
  },
  {
    src: 'logos/choctaw.png',
    aspect: 'aspect-video',
  },
  {
    src: 'logos/dallas.png',
    aspect: 'aspect-video',
  },
  {
    src: 'logos/dallasMavs.png',
    aspect: 'aspect-video',
  },
  {
    src: 'logos/DallasMuseumArt.webp',
    aspect: 'aspect-video',
  },
  {
    src: 'logos/DFW.png',
    aspect: 'aspect-video',
  },
  // {
  //   src: 'logos/Hilton.png',
  //   aspect: 'aspect-video',
  // },
  {
    src: 'logos/Marriott.png',
    aspect: 'aspect-video',
  },
  {
    src: 'logos/Sheraton.png',
    aspect: 'aspect-video',
  },
  {
    src: 'logos/Paramount+.svg',
    aspect: 'aspect-video',
  },
  {
    src: 'logos/PepsiCo-Logo.png',
    aspect: 'aspect-video',
  },
  {
    src: 'logos/sflogo.png',
    aspect: 'aspect-video',
  },
  {
    src: 'logos/fair.png',
    aspect: 'aspect-video',
  },
  {
    src: 'logos/Texas_Rangers_logo.png',
    aspect: 'aspect-video',
  },
  {
    src: 'logos/TexasLive.png',
    aspect: 'aspect-video',
  },
  {
    src: 'logos/TopGolf.png',
    aspect: 'aspect-video',
  },
  {
    src: 'logos/winstar.png',
    aspect: 'aspect-video',
  },
])
</script>

<template>
  <div class="bg-gray-100 flex flex-col justify-center w-full p-12">
    <div class="p-8 text-10 rale text-center w-full">
      <h2>Eclipse Entertainment is <span class="font-bold">proud</span> to have worked with<br>industry leaders around the metroplex</h2>
    </div>
    <div class="flex p-8  text-black w-full justify-center items-center flex-wrap">
      <div v-for="image in imageList" :key="image.src">
        <img class="w-20 md:w-50 mx-2" :src="image.src">
      </div>
    </div>
  </div>
</template>
