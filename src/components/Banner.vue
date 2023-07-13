<script setup lang="ts">
const props = defineProps({
  boldTitle: String,
  title: String,
  subtitle: String,
  backgroundImage: String,
})
</script>

<template>
  <div class="w-full justify-center background">
    <div class="flex flex-col justify-center content-center overlay">
      <div class="my-12 p-12">
        <h1 v-if="props.title" class="rale text-10 sm:text-20 text-white">
          <span v-if="props.boldTitle" class="font-bold">{{ props.boldTitle }}</span> {{ props.title }}
        </h1>
        <h4 v-if="props.subtitle" class="font-extrabold my-4">
          {{ props.subtitle }}
        </h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-repeat: none;
  background-size: stretch;
  background-image: url('img/bg-6.jpeg');
}

.overlay {
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index:9;
}
</style>
