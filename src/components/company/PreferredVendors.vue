<script setup lang="ts">
const listItems = ref([
  'Fauxcades',
  'The Fort Worth Convention Center',
  'The Texas Rangers Baseball Club',
  'The University of Arlington',
  'Choctaw Casino',
])

const list2Items = ref([
  'Experience Arlingtons',
  'The Fort Worth Convention & Visitors Bureau',
  'The Dallas Zoo',
  'The Omni Hotels',
  'Texas Motor Speedway',
])
</script>

<template>
  <div class="bg-gray-100 flex justify-center w-full p-12 flex-wrap">
    <div class="p-8 text-10 rale max-w-prose w-200">
      <h2>We are now 'exclusive' and or 'prefered vendors' for industry giants like:</h2>
    </div>
    <div class="flex p-8 text-left text-black">
      <ul class="mx-4">
        <li v-for="item in listItems">
          <ion-icon class="text-blue-500" name="md-arrow-forward" />{{ item }}
        </li>
      </ul>
      <ul class="mx-4">
        <li v-for="item in list2Items">
          <ion-icon class="text-blue-500" name="md-arrow-forward" />{{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
