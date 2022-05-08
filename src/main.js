import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import DisplayImage from './components/DisplayImage.vue'
import Buttons from './components/Buttons.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false


const routes = [
  { path: '/', component: DisplayImage },
  { path: '/btns', component: Buttons }
]

const router = new VueRouter({
  routes 
})

new Vue({
  render: function (h) { return h(App) },
  router,
}).$mount('#app')
