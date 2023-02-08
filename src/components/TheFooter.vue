<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <div class="flex justify-around p-12">
    <div class="max-w-80 flex flex-col text-left">
      <img src="headerlogo.png">
      <p class="pl-6">
        Eclipse ENTERTAINMENT, LLC
      </p>
      <p class="pl-6">
        7336 Dogwood Park Dr
      </p>
      <p class="pl-6">
        Richland Hills, TX, 76118
      </p>
      <p class="pl-6">
        p - (817) 261-0038
      </p>
      <p class="pl-6">
        e - info@eclipseentertainment.com
      </p>
    </div>
    <div class="w-30 h-30">
      <h2>Instagram - eclipseentertainmentCO</h2>
    </div>
    <div class="w-30 h-30">
      <h2>TikTok - eclipseentertainmentCO</h2>
    </div>
    <div class="w-30 h-30">
      <h2>Facebook - eclipseentertainmentllc</h2>
    </div>
  </div>
  <div class="my-2">
    2023 Eclipse Entertainment, LLC. All Rights Reserved | Made with &#9829; by Spacemaker
  </div>
</template>
