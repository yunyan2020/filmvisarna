import { registerRuntimeCompiler } from 'vue'
import { createStore } from 'vuex'

const state = {
  movie: [],
  allViewings: [],
  currentUser: null,
  screens: [],
  loggedIn: false,
  booking: { customer: {}, viewing: {}, nrOfSeats: 0, price: 0 },
  allBookings: [],
  myBookings: []
}

//mutates state
const mutations = {
  setBookings(state, list) { 
    state.allBookings = list
  },
  setMovie(state, list) {
    state.movie = list
  },
  setScreens(state, list) {
    state.screens = list
  },
  setViewings(state, list) {
    state.allViewings = list
    console.log("Viewings list saved")
  },
  setCurrentUser(state, currentUser) {
    state.currentUser = currentUser
  },
  setBookingPrice(state, bookingPrice) { 
    state.booking.price = bookingPrice
  },
  setNrOfSeats(state, nrOfSeats) { 
    state.booking.nrOfSeats = nrOfSeats
  },
  setMyBookings(state, myBookings) {
    state.myBookings = myBookings
  }
}

//async network requests
const actions = {
  async fetchBookings(store) { 
    let list = await fetch('/rest/bookings')
    list = await list.json()
    console.log(list)
    store.commit('setBookings', list)
  },
  async fetchScreens(store) { 
    let list = await fetch('/rest/screens')
    list = await list.json()

    store.commit('setScreens', list)
  },
  async fetchMovie(store) {
    let list = await fetch('/rest/movieshow')
    list = await list.json()

    store.commit('setMovie', list)
  },
  async fetchViewings(store) {
    let list = await fetch('/rest/viewings')
    list = await list.json()

    store.commit('setViewings', list)
  },
  async login(store, credentials) { 
    let customer = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    })
    try {
      customer = await customer.json()
      console.log(customer)
      
      store.commit('setCurrentUser', customer)
    } catch { 
      console.warn("Fel uppgifter")
    }
  },
  async register(store, credentials) { 
    let customer = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(credentials)
    })
    try {
      customer = await customer.json()
      console.log(customer)
      store.commit('setCurrentUser', customer)
    } catch { 
      console.warn("Fel uppgifter")
    }
  },
  async whoAmI(store) { 
    let customer = await fetch('/api/whoami') 
    try {
      customer = await customer.json()
      console.log(customer)
      store.commit('setCurrentUser', customer)
    } catch { 
      console.warn("Inte inloggad")
    }
  },
  async fetchMyBookings(store) {
    let list = await fetch('/rest/bookings')
    list = await list.json()
    let currentUserBookings = list.filter((booking) => {
      if (booking.customer.email === state.currentUser.email) {
        return myBookings
      }
    })
    console.log('currentUserBookings', currentUserBookings);
    store.commit('setMyBookings', currentUserBookings)
  }


}

export default createStore({ state, mutations, actions })