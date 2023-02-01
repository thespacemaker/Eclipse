<script setup lang="ts">
const props = defineProps({
  title: String,
  subtitle: String,
})
</script>

<template>
  <div class="w-full justify-center py-12">
    <h1 v-if="props.title" class="my-12">
      {{ props.title }}
    </h1>
    <h4 v-if="props.subtitle">
      {{ props.subtitle }}
    </h4>
  </div>
</template>
