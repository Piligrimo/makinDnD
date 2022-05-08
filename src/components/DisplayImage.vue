<template>
  <div  >
      <img class="image" :src="images[id]" alt="">
  </div>
</template>

<script>
import images from '../assets/images'

export default {
  name: 'DisplayImage',
  props: {
      id: Number
  },
  data() {
      return {
          images
      }
  }
}
</script>

<style>
.image {
  max-width: 340px;
}
</style>
