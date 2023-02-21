<script setup lang="ts">
// set the drawer menu element
import { onMounted } from 'vue'
import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips,
} from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initAccordions()
  initCarousels()
  initCollapses()
  initDials()
  initDismisses()
  initDrawers()
  initDropdowns()
  initModals()
  initPopovers()
  initTabs()
  initTooltips()
})
const links = ref([
  {
    title: 'HOME',
    url: '/',
  },
  {
    title: 'THE COMPANY',
    url: '/company',
  },
  {
    title: 'SERVICES',
    url: '/services',
  },
  {
    title: 'THEMES',
    url: '/themes',
  },
  {
    title: 'GALLERY',
    url: '/gallery',
  },
  {
    title: 'CONTACT ECLIPSE',
    url: '/contact',
  },
])
</script>

<template>
  <div class="flex justify-end h-20 w-full absolute fixed bg-transparent">
    <a
      v-for="link in links"
      :key="link.title"
      class="mx-2 my-auto invisible md:visible"
      :href="link.url"
    >
      <h2>
        {{ link.title }}
      </h2>
    </a>
    <div class="md:invisible">
      <div class="text-center">
        <button class="m-4 text-white font-medium rounded-lg text-sm px-5 py-2.5" type="button" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <!-- drawer component -->
      <div id="drawer-right-example" class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-right-label">
        <a
          v-for="link in links"
          :key="link.title"
          class="mx-2 my-auto md:visible"
          :href="link.url"
        >
          <h2>
            {{ link.title }}
          </h2>
        </a>
      </div>
    </div>
    <!-- drawer init and toggle -->
  </div>
</template>
