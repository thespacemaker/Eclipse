<script setup lang="ts">
const galleryPhotos = ref([
  {
    src: 'img/7.jpg',
    aspect: 'aspect-video',
  },
  {
    src: 'img/air.jpg',
    aspect: 'aspect-square',
  },
  {
    src: 'img/animals.jpg',
    aspect: 'aspect-portrait',
  },
  {
    src: 'img/broadway.jpg',
    aspect: 'aspect-video',
  },
  {
    src: 'img/madhatter.jpg',
    aspect: 'aspect-square',
  },
  {
    src: 'img/tall.jpg',
    aspect: 'aspect-square',
  },
  {
    src: 'img/moulinrouge.jpg',
    aspect: 'aspect-square',
  },
  {
    src: 'img/peacock.jpg',
    aspect: 'aspect-video',
  },
  {
    src: 'img/ringleader.jpg',
    aspect: 'aspect-square',
  },
  {
    src: 'img/star.jpg',
    aspect: 'aspect-square',
  },
  {
    src: 'img/duet.jpg',
    aspect: 'aspect-square',
  },
  {
    src: 'img/tron.jpg',
    aspect: 'aspect-square',
  },
  {
    src: 'img/leopard.jpg',
    aspect: 'aspect-square',
  },
  {
    src: 'img/flying.jpg',
    aspect: 'aspect-video',
  },
  {
    src: 'img/cowboy.jpg',
    aspect: 'aspect-square',
  },
  {
    src: 'img/swing.jpg',
    aspect: 'aspect-square',
  },
  {
    src: 'img/arial.jpg',
    aspect: 'aspect-square',
  },
  {
    src: 'img/camo.jpg',
    aspect: 'aspect-square',
  },
  {
    src: 'img/showgirls.jpg',
    aspect: 'aspect-square',
  },
  {
    src: 'img/snake.jpg',
    aspect: 'aspect-square',
  },
  {
    src: 'img/statue.jpg',
    aspect: 'aspect-square',
  },
  {
    src: 'img/hoola.jpg',
    aspect: 'aspect-video',
  },
  {
    src: 'img/greek.jpg',
    aspect: 'aspect-square',
  },
  // {
  //   src: 'img/tall.jpg',
  //   aspect: 'aspect-square',
  // },
])
</script>

<template>
  <div class="gap-8 md:columns-3 lg:columns-4 columns-2">
    <img
      v-for="(img, index) in galleryPhotos"
      :key="index"
      class="w-full mb-6"
      :src="img.src"
    >
    <!-- <img class="w-full aspect-square mb-6" src="https://picsum.photos/500/300?random=2">
    <img class="w-full aspect-square mb-6" src="https://picsum.photos/500/300?random=3">
    <img class="w-full aspect-square mb-6" src="https://picsum.photos/500/300?random=4">
    <img class="w-full aspect-video mb-6" src="https://picsum.photos/500/300?random=5">
    <img class="w-full aspect-video mb-6" src="https://picsum.photos/500/300?random=6">
    <img class="w-full aspect-square mb-6" src="https://picsum.photos/500/300?random=7">
    <img class="w-full aspect-video mb-6" src="https://picsum.photos/500/300?random=8">
    <img class="w-full aspect-square mb-6" src="https://picsum.photos/500/300?random=9">
    <img class="w-full aspect-square mb-6" src="https://picsum.photos/500/300?random=10">
    <img class="w-full aspect-square mb-6" src="https://picsum.photos/500/300?random=11">
    <img class="w-full aspect-square mb-6" src="https://picsum.photos/500/300?random=12">
    <img class="w-full aspect-square mb-6" src="https://picsum.photos/500/300?random=13">
    <img class="w-full aspect-square mb-6" src="https://picsum.photos/500/300?random=14"> -->
  </div>
</template>

<style>
div {
  z-index: 0;
}
img {
  position: relative;
  animation-name: example;
  animation-duration: 30s;
  animation-iteration-count: 100;
  z-index: 1;
}

@keyframes example {
  0%   {left:0px; top:0px;}
  100% {left:0px; top:-600px;}
}
</style>
