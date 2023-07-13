<script setup lang="ts">
</script>

<template>
  <iframe id="background-video" src="https://www.youtube.com/embed/v1Ly0EyXBxo?playlist=v1Ly0EyXBxo&autoplay=1&loop=1&mute=1&playsinline=1&controls=0&modestbranding" loop="1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; loop; picture-in-picture" allowfullscreen />
  <div id="text">
    <img class="invisible md:visible" src="../../assets/img/headerlogo.png">
  </div>
</template>

<style scoped>
#background-video {
    width: 100vw;
    height: 100vh;
    object-fit: stretch;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -10;
  }

  h1, h2 {
    color: white;
    font-family: Trebuchet MS;
    font-weight: bold;
    text-align: center;
  }

  h1 {
    font-size: 6rem;
    margin-top: 30vh;
  }

  h2 { font-size: 3rem; }

@media (max-width: 750px) {
    #background-video { display: none; }
    body {
      background: url("https://assets.codepen.io/6093409/river.jpg") no-repeat;
      background-size: cover;
    }
}
#text{
  position: absolute;
  color: #FFFFFF;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
