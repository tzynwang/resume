import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import test from '@/views/Test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'test',
    component: test
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
