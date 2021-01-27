import { createStore } from 'vuex'

const state = {
  movie: [],
  customers: [],
  allViewings: [],
  screens: [],
  loggedIn: false,
  currentUser: {},
  booking: { price: 0, nrOfSeats: 0, seats: [] }
}

//mutates state
const mutations = {
  setMovie(state, list) {
    state.movie = list
  },
  setCustomers(state, list) {
    state.customers = list
  },
  addCustomer(state, customer) {
    state.customers.push(customer)
  },
  setScreens(state, list) {
    state.screens = list
  },
  setViewings(state, list) {
    state.allViewings = list
    console.log("Viewings list saved")
  },
  toggleLoggedIn(state, trueOrFalse) {
    state.loggedIn = trueOrFalse
    console.log("Customer logged in: ", state.loggedIn)
  },
  setCurrentUser(state, currentUser) {
    state.currentUser = currentUser
    console.log("User name: ", state.currentUser.name)
  },
  setBookingPrice(state, bookingPrice) { 
    state.booking.price = bookingPrice
  },
  setNrOfSeats(state, nrOfSeats) { 
    state.booking.nrOfSeats = nrOfSeats
  }

}

//async network requests
const actions = {
  // Actions to GET info from database
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
  async fetchCustomerDetails(store) {
    let list = await fetch('/rest/customerdetails')
    list = await list.json()

    console.log(list);

    store.commit('setCustomers', list)
  },
  async fetchViewings(store) {
    let list = await fetch('/rest/viewings')
    list = await list.json()

    store.commit('setViewings', list)
  },

  // Actions to ADD/POST info to database
  async addCustomer(store, customer) {

    let response = await fetch('/rest/customerdetails', {
      method: 'POST',
      body: JSON.stringify(customer)
    })

    let savedCustomer = await response.json()

    store.commit('addCustomer', savedCustomer)
  }

}

export default createStore({ state, mutations, actions })