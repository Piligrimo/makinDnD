<template>
  <div>
    <img class="answer" v-if="succed" src="../pics/check.png" />
    <div v-else-if="!failed"  class="container">
        <img class="button" v-for="(image, i) in variants" :key="i" :src="image.src" @click="check(image.id)"/>
    </div>
    <img v-else class="answer" src="../pics/close.png" />
  </div>
</template>

<script>
import images from '../assets/images'
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
export default {
  name: 'Buttons',
  props: {
      id: Number
  },
  watch: {
    id()  {
      this.failed = false

    }
  },
  data() {
      return {
          failed: false,
          succed: false
      }
  },
  computed: {
    variants() {
      var ids = []
      while (ids.length < 15){
        const random = getRandomInt(48)
        if  (random !== this.id){
          ids.push(random)
          ids =  [...new Set(ids)]}
        }
      const arr = ids.map((id) => ({
        id,
        src: images[id]
      }))
      arr.splice(getRandomInt(16),0, {
        id: this.id,
        src: images[this.id]
      })
      return arr
    }
  },
  methods: {
    check(id) {
      if(id === this.id) {
        this.succed = true
      } else {
        this.failed = true
      }
    }
  }
}
</script>

<style>
.button {
  max-width: 70px;
}
.answer{
  max-width: 90vw;
}
.container {
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  gap: 2px 2px; 
}
</style>
