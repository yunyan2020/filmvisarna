import { createRouter, createWebHistory } from 'vue-router'

import Films from './views/Films.vue'
import Details from './views/Details.vue'
import Homepage from './views/Homepage.vue'
import Contact from './views/tempContact.vue'
import Cinema from './views/Cinema.vue'
import Booking from './views/Booking.vue'
import MyBookings from './views/MyBookings.vue'
import MyProfile from './views/MyProfile.vue'
import NewBooking3 from './views/NewBooking3.vue'

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
    name: 'Cinema',
    path: '/biograf',
    component: Cinema
  },
  {
    name: 'Bokning',
    path: '/bokning/:id',
    component: Booking,
    props: true
  },
  {
    name: 'MyBookings',
    path: '/MyBookings',
    component: MyBookings
  },
  {
    name: 'MyProfile',
    path: '/MyProfile',
    component: MyProfile
  },
  {  
    name: 'Bokning3',
    path: '/bokning3/:id',
    component: NewBooking3,
    props: true
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
