<script setup lang="ts">
const images = [
  {
    src: 'https://http.cat/200',
  },
  {
    src: 'https://http.cat/200',
  },
  {
    src: 'https://http.cat/200',
  },
  {
    src: 'https://http.cat/200',
  },
]

const buttons = [
  {
    title: 'ABOUT ECLIPSE',
  },
  {
    title: 'SERVICES',
  },
  {
    title: 'THEMES',
  },
]
</script>

<template>
  <div class="bg-white flex w-full h-200">
    <div class="my-auto mx-auto">
      <div class="flex justify-center">
        <img
          v-for="image in images"
          :key="image.src"
          :src="image.src"
          class="w-60 mx-3"
        >
      </div>
      <p class="text-6 text-black my-8">
        Eclipse Entertainment can elevate your event by delivering your message and promoting your brand. Watch as the talent and experience of our team works to manage your event to the finest detail. We’ll manage the logistics, operations, and execution as your event takes life and the space is transformed to a whole new level by utilizing our strategic partnerships, customization, and production abilities to deliver effective execution. The initiative of Eclipse Entertainment is to deliver an on stage and behind the scenes magic that lends itself to the final denouement. All orchestrated as your vision is brought to life.
      </p>
    </div>
  </div>
</template>
