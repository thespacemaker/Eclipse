<script setup lang="ts">
const actsList = ref([
  'Actors',
  'Acrobats',
  'Aerialists',
  'Artists',
  'Athletes',
  'Bands',
  'Bartenders',
  'Catering',
  'Celebrity Impersonators',
  'Child Entertainers',
  'Circus Performers',
  'Clowns',
  'Comedians',
  'Contortionists',
  'Costume Designers',
  'Dancers',
  'DJs',
  'Drag Queens',
  'Drummers',
  'Event Decor',
  'Event Design',
  'Event Management',
])

const acts2List = ref([
  'Exotic Animals',
  'Fire Performers',
  'Game Rentals',
  'Grand Openings',
  'Greeters',
  'Horsemen',
  'Hosts/Hostess',
  'Illusionists',
  'Jugglers',
  'Living Decor',
  'Look Alikes',
  'Magicians',
  'Marrionettes',
  'MCs',
  'Mimes',
  'Models',
  'Mixologists',
  'Musicians',
  'National Music Acts',
  'Photographers',
  'Poets',
])

const acts3List = ref([
  'Props',
  'Prop Designers',
  'Security',
  'Stilt Walkers',
  'Show Girls',
  'Singers',
  'Sound Equipment',
  'Sound Technichians',
  'Speciality Acts',
  'Masseuses',
  'Spa Technicians',
  'Spokesmen',
  'Staging',
  'Stunt Performers',
  'Themed Characters',
  'Tour Guides',
  'Transportation',
  'Trick Ropers',
  'Trick Riders',
  'Video Mapping',
  'Videographers',
  'World Cultural Entertainment',
])
</script>

<template>
  <div class="bg-gray-100 flex flex-col justify-center w-full p-12">
    <div class="p-8 text-10 rale text-center w-full">
      <h2>Eclipse Entertainment is an all-inclusive event provider.<br> Our acts include, but are not limited to:</h2>
    </div>
    <div class="flex p-8  text-black w-full justify-center m-2">
      <ul class="mx-4 text-left">
        <li v-for="item in actsList">
          <div>
            {{ item }}
          </div>
        </li>
      </ul>
      <ul class="mx-4 text-left">
        <li v-for="item in acts2List">
          {{ item }}
        </li>
      </ul>
      <ul class="mx-4 text-left">
        <li v-for="item in acts3List">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
