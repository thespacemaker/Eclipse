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

const reviews = ref([
  {
    text: 'Thank you really does not say enough to express our gratitude to you for your contribution to this enormously successful event, nor does it adequately express our admiration for your organization’s creativity, persistence, generosity and professionalism in developing and then executing this extraordinary event. We look forward to working with you again, referring our clients to your care and toasting our collective successes often!',
    reviewer: 'LYNNE DUNCAN',
    reviewerTitle: 'Director of Catering Hilton Anatole Dallas',
  },
  {
    text: 'Thank you really does not say enough to express our gratitude to you for your contribution to this enormously successful event, nor does it adequately express our admiration for your organization’s creativity, persistence, generosity and professionalism in developing and then executing this extraordinary event. We look forward to working with you again, referring our clients to your care and toasting our collective successes often!',
    reviewer: 'DWAYNE S. WOODRING',
    reviewerTitle: 'Executive Directore/CEO, Religious Conference Management Association',
  },
  {
    text: 'Thank you really does not say enough to express our gratitude to you for your contribution to this enormously successful event, nor does it adequately express our admiration for your organization’s creativity, persistence, generosity and professionalism in developing and then executing this extraordinary event. We look forward to working with you again, referring our clients to your care and toasting our collective successes often!',
    reviewer: 'LYNN SMITH',
    reviewerTitle: 'CMP VP of CMeetings, Association of Fundraising Professionals',
  },

])
</script>

<template>
  <div class="background flex flex-cols text-center">
    <div class="w-full h-full overlay p-12">
      <swiper-container
        class="w-80 sm:w-160 md-200 xl:w-300"
        :slides-per-view="1"
        :space-between="spaceBetween"
        :centered-slides="true"
        :pagination="{
          hideOnClick: true,
        }"
        :auto-slides="true"
        @progress="onProgress"
        @slidechange="onSlideChange"
      >
        <swiper-slide
          v-for="review in reviews"
          :key="review.text"
          class="w-300 text-center"
        >
          <div class="md:m-12">
            <p
              class="text-4 md:text-7 text-white font-extralight"
            >
              "{{ review.text }}""
            </p>
            <p class="text-white font-extrabold mt-8">
              {{ review.reviewer }}
            </p>
            <p class="text-white font-thin">
              {{ review.reviewerTitle }}
            </p>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url("../assets/img/bg-5.jpeg");
  background-repeat: none;
  background-size: cover;
}
.overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
