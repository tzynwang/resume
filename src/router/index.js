import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior: (to) => {
    return to.hash ? { selector: to.hash, behavior: 'smooth' } : { x: 0, y: 0 }
  }
})

export default router
