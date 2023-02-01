<script setup lang="ts">
const props = defineProps({
  title: String,
  subtitle: String,
  videoUrl: String,
})
</script>

<template>
  <div class="bg-white grid grid-cols-2 w-full">
    <div class="mx-auto p-8 text-black">
      <h2 class="my-2">
        {{ props.title }}
      </h2>
      <p v-html="props.subtitle" />
    </div>
    <div class="mx-auto p-8">
      <iframe width="560" height="315" :src="props.videoUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
    </div>
  </div>
</template>
