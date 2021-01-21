import { createStore } from 'vuex'

const state = {
  movie: [],
  customers: [],
  viewings: [],
  loggedIn: false,
  currentUser: {},
}

//mutates state
const mutations = {
  setMovie(state, list) {
    state.movie = list
  },
  setViewings(state, list) {
    state.viewings = list
    console.log("Here it is")
  },
  setCustomers(state, list) {
    state.customers = list
  },
  addCustomer(state, customer) {
    state.customers.push(customer)
  },
  toggleLoggedIn(state, trueOrFalse) { 
    state.loggedIn = trueOrFalse
    console.log("Customer logged in: ", state.loggedIn)
  },
  setCurrentUser(state, currentUser) { 
    state.currentUser = currentUser
    console.log("User name: ", state.currentUser.name)
  }

}

//async network requests
const actions = {
  // Actions to GET info from database
  async fetchMovie(store) {
    let list = await fetch('/rest/movieshow')
    list = await list.json()
    //debug list
    console.log(list);

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

    console.log(list)

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