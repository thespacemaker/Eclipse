<script setup lang="ts">

</script>

<template>
  <div class="bg-black w-full">
    <Banner
      class="above"
      title="Video & Image Gallery"
      subtitle="LET US ENTERTAIN YOU!"
    />

    <div class="static h-full transparent">
      <PhotoGallery class="w-full below py-12" />
    </div>
  </div>
</template>

<style scoped>
.above {
  position: static;
  z-index: 1;
}

.below {
  position: absolute;
  z-index: -1;
}
</style>
