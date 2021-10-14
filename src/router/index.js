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
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

// const scrollBehavior = function(to) {
//   const position = {}

//   // scroll to anchor by returning the selector
//   if (to.hash) {
//     position.selector = to.hash

//     // specify offset of the element
//     if (to.hash === '#anchor2') {
//       position.offset = { y: 100 }
//     }

//     // if the returned position is falsy or an empty object,
//     // will retain current scroll position.
//     return false
//   }

//   return new Promise((resolve) => {
//     // check if any matched route config has meta that requires scrolling to top
//     if (to.matched.some((m) => m.meta.scrollToTop)) {
//       // coords will be used if no selector is provided,
//       // or if the selector didn't match any element.
//       position.x = 0
//       position.y = 0
//     }

//     // wait for the out transition to complete (if necessary)
//     this.app.$root.$once('triggerScroll', () => {
//       // if the resolved position is falsy or an empty object,
//       // will retain current scroll position.
//       resolve(position)
//     })
//   })
// }

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior: (to) => {
    return to.hash ? { selector: to.hash, behavior: 'smooth' } : { x: 0, y: 0 }
  }
})

export default router
