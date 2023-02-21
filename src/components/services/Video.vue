<script setup lang="ts">
const props = defineProps({
  title: String,
  subtitle: String,
  videoUrl: String,
})
</script>

<template>
  <div class="bg-white flex flex-wrap w-full justify-center py-12">
    <div class="p-12 text-black">
      <h2 class="my-2 rale text-15 xl-text-left">
        {{ props.title }}
      </h2>
      <p class="xl-text-left" v-html="props.subtitle" />
    </div>
    <div class="p-8">
      <iframe class="hidden md:block" width="560" height="315" :src="props.videoUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
      <iframe class="md:hidden" width="336" height="189" :src="props.videoUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
    </div>
  </div>
</template>
