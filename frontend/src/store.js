import { createStore } from 'vuex'

const state = {
  movie: [],
  customers: [],
  loggedIn: false
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
  toggleLoggedIn(state, trueOrFalse) { 
    state.loggedIn = trueOrFalse
    console.log("Customer logged in: ", state.loggedIn)
  }

}

//async network requests
const actions = {
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
  async addCustomer(store, customer) {

    let response = await fetch('/rest/customerdetails', {
      method: 'POST',
      body: JSON.stringify(customer)
    })

    let savedCustomer = await response.json()

    console.log("Saved customer: ", savedCustomer)

    store.commit('addCustomer', savedCustomer)
  }

}

export default createStore({ state, mutations, actions })