<script setup lang="ts">
const props = defineProps({
  title: String,
  subtitle: String,
  videoUrl: String,
})
</script>

<template>
  <div class="bg-gray grid grid-cols-2 w-full">
    <div class="mx-auto p-8">
      <h2>{{ props.title }}</h2>
      <p v-html="props.subtitle" />
    </div>
    <div class="mx-auto p-8">
      <iframe width="560" height="315" :src="props.videoUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
    </div>
  </div>
</template>
