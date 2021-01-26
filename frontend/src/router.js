import { createRouter, createWebHistory } from 'vue-router'

import Films from './views/Films.vue'
import Details from './views/Details.vue'
import Homepage from './views/Homepage.vue'
import Contact from './views/tempContact.vue'
import Biograf from './views/tempCinema.vue'
import NewBooking1 from './views/NewBooking1.vue'
import NewBooking2 from './views/NewBooking2.vue'

const routes = [
  {
    name: 'Homepage',
    path: '/',
    component: Homepage

  },
  {
    name: 'Films',
    path: '/films',
    component: Films

  },
  {
    name: 'Details',
    path: '/movieshow/details/:id',
    component: Details
  },
  {
    name: 'Contact',
    path: '/contact',
    component: Contact
  },
  {
    name: 'Biograf',
    path: '/biograf',
    component: Biograf
  },
  {
    name: 'Bokning',
    path: '/bokning/:id',
    component: NewBooking1,
    props: true
  },
  {
    name: 'Bokning2',
    path: '/bokning2',
    component: NewBooking2
  }


]

export default createRouter({
  history: createWebHistory(),
  routes
})
