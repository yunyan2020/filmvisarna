import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/tempHome.vue'
import Details from './views/tempDetails.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Details',
    path: '/details',
    component: Details
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router