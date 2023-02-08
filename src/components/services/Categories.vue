<script setup lang="ts">
const images = [
  {
    text: 'WHAT WE DO BEST!',
    icon: 'wine-outline',
    src: 'https://http.cat/200',
  },
  {
    text: 'ENTERTAINMENT',
    icon: 'flash-outline',
    src: 'https://http.cat/200',
  },
  {
    text: 'EVENT DESIGN & MANAGEMENT!',
    icon: 'ios-infinite',
    src: 'https://http.cat/200',
  },
  {
    text: 'AUDIO VISUAL PRODUCTION!',
    icon: 'mic-outline',
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
  <div class="bg-white flex flex-wrap w-full pt-12">
    <div class="my-auto mx-auto pt-12">
      <div class="flex flex-wrap justify-center content-center">
        <div
          v-for="image in images"
          :key="image.src"
          :src="image.src"
          class="flex flex-col mx-4 text-black"
        >
          <ion-icon :name="image.icon" class="w-full text-20 justify-center my-4" />
          <h2 class="rale text-5 text-black">
            {{ image.text }}
          </h2>
        </div>
      </div>
      <p class="text-4 my-8 max-w-280 p-8 mx-auto">
        With a solid reputation of integrity and professional expertise, we are your one-stop source for themed entertainment production services. We make it convenient for our costumers by custom tailoring our services to meet your particular needs. Our scope of services range from talent procurement to the successful completion of turn-key show productions.
        <br>
        No event is too big or too small.
        <br>
        <br>
        Having us on your side ensures that you have the best team working for you!
      </p>
    </div>
  </div>
</template>
