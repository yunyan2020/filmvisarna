import { createStore } from 'vuex'

const state = {
  movie: [],
  customers: []
}

//matates state
const mutations = {
  setMovie(state, list) {
    state.movie = list
  },
  setCustomers(state, list) { 
    state.customers = list
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
  }

}

export default createStore({ state, mutations, actions })