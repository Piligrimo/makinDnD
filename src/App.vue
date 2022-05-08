<template>
  <div id="app">
    <router-view :id="trueItem" />
  </div>
</template>

<script>
import Buttons from './components/Buttons.vue'
import DisplayImage from './components/DisplayImage.vue'

function get() {
  fetch('http://localhost:3000/', {
     mode: "no-cors",
    'Content-Type': 'application/json'
  })
    .then((response) => {
      console.log(response.json);
    })
}

export default {
  components: { DisplayImage, Buttons },
  name: 'App',
  computed: {
    trueItem() {
      const seconds = 15
      const count = 48
      return Math.floor(this.time / (seconds * 1000)) % count
    }
  },
  data() {
    return {
      time: 0
    }
  },
  created() {
    get()
    const vue = this
    setInterval(()=> {
      vue.time =  Number(new Date())
    }, 1000)
  }
}
</script>

<style>
body {
  height: 100vh;
  padding: 0;
}
#app {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
p {
  font-size: 70px;
  margin: auto;
}

</style>
