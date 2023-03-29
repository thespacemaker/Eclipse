<script setup lang="ts">
import { register } from 'swiper/element/bundle'

register()

const spaceBetween = 10
const onProgress = (e) => {
  const [swiper, progress] = e.detail
  console.log(progress)
}

const onSlideChange = (e) => {
  console.log('slide changed')
}

const images = [
  {
    src: 'img/broadway.jpg',
  },
  {
    src: 'img/ringleader.jpg',
  },
  {
    src: 'img/peacock.jpg',
  },
  {
    src: 'img/air.jpg',
  },
  {
    src: 'img/moulinrouge.jpg',
  },
  {
    src: 'img/madhatter.jpg',
  },
  {
    src: 'img/animals.jpg',
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
  <div class="bg-white flex justify-center p-12">
    <div class="mt-12">
      <h2 class="text-black text-8 md:text-20 rale my-12">
        Welcome To The Show
      </h2>
      <div class="mx-auto my-auto">
        <swiper-container
          class="hidden md:block md:max-w-200 lg:max-w-300 xl:max-w-400"
          :slides-per-view="3"
          :space-between="spaceBetween"
          :centered-slides="false"
          :pagination="{
            hideOnClick: true,
          }"
          @progress="onProgress"
          @slidechange="onSlideChange"
        >
          <swiper-slide
            v-for="img in images"
            :key="img.src"
            class="text-center w-15"
          >
            <div class="m-12">
              <img :src="img.src">
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
      <div class="flex flex-wrap justify-center my-8">
        <button
          v-for="button in buttons"
          :key="button.title"
          class="bg-blue m-0.5 p-4 w-40"
        >
          {{ button.title }}
        </button>
      </div>
      <div class="my-auto mx-auto">
        <p class="my-8 text-wrap my-auto mx-auto md:text-5 md:max-w-prose">
          Eclipse Entertainment can elevate your event by delivering your message and promoting your brand. Watch as the talent and experience of our team works to manage your event to the finest detail. We’ll manage the logistics, operations, and execution as your event takes life and the space is transformed to a whole new level by utilizing our strategic partnerships, customization, and production abilities to deliver effective execution. The initiative of Eclipse Entertainment is to deliver an on stage and behind the scenes magic that lends itself to the final denouement. All orchestrated as your vision is brought to life.
        </p>
        <button class="text-black my-4">
          Learn More
        </button>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.cdnfonts.com/css/raleway-5');
.rale {
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  line-height: 1.1;
  color: #191a1c;
  }

p  {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  line-height: 1.75;
  font-weight: 700;
  color: #888;
}
</style>
