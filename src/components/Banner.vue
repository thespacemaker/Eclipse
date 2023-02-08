<script setup lang="ts">
const props = defineProps({
  boldTitle: String,
  title: String,
  subtitle: String,
})
</script>

<template>
  <div class="w-full justify-center background sm-h-100 md-h-200">
    <div class="flex flex-col justify-center content-center overlay">
      <h1 v-if="props.title" class="my-12 rale text-20 text-white">
        <span v-if="props.boldTitle" class="font-bold">{{ props.boldTitle }}</span> {{ props.title }}
      </h1>
      <h4 v-if="props.subtitle" class="font-extrabold">
        {{ props.subtitle }}
      </h4>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-repeat: none;
  background-size: cover;
  background-image: url("bg-6.jpeg");
}

.overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
