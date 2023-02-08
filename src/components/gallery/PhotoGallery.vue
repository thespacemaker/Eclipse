<script setup lang="ts">
</script>

<template>
  <div class="gap-8 columns-3">
    <img class="w-full aspect-video mb-6" src="https://picsum.photos/500/300?random=1">
    <img class="w-full aspect-square mb-6" src="https://picsum.photos/500/300?random=2">
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
    <img class="w-full aspect-square mb-6" src="https://picsum.photos/500/300?random=14">
  </div>
</template>

<style>
div {
  z-index: 0;
}
img {
  position: relative;
  animation-name: example;
  animation-duration: 15s;
  z-index: 1;
}

@keyframes example {
  0%   {left:0px; top:0px;}
  25%  {left:0px; top:-40px;}
  50%  {left:0px; top:-80px;}
  75%  {left:0px; top:-120px;}
  100% {left:0px; top:-160px;}
}
</style>
