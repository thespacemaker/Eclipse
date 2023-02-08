<script setup lang="ts">
const props = defineProps({
  title: String,
  subtitle: String,
  videoUrl: String,
})
</script>

<template>
  <div class="bg-gray-100 flex flex-wrap justify-center w-full">
    <div class="ml-auto p-8 max-w-prose">
      <h2 class="rale text-15 text-left my-4">
        {{ props.title }}
      </h2>
      <p class="text-left" v-html="props.subtitle" />
    </div>
    <div class="mr-auto p-8">
      <iframe width="560" height="315" :src="props.videoUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
    </div>
  </div>
</template>
