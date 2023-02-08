<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()
</script>

<template>
  <div>
    <Hero />
    <Welcome />
    <VideoBanner
      title="Cutting Edge Themed Entertainment"
      subtitle="Now the largest event theme entertainment production company in the Southwest & The Industry Leader in Cutting Edge Themed Entertainment!- Eclipse looks forward to making your next event Fantabulous!!!
      <br><br>
      The Multi-Award Winning Eclipse Entertainment, LLC is a Full Service Special Event Production including Live Entertainment, Custom Event Design & Production, Audio Visual, Decorations, Living Décor, Rentals, Catering, Security. Staging, Design Consultation & First Class High-Caliber Special Event Production!
      "
      video-url="https://www.youtube.com/embed/Iyh4GPj5HUU"
      class="p-12"
    />
    <Reviews />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
