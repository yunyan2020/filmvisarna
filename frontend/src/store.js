import { createStore } from 'vuex'

const state = {
  movie: []
}

//matates state
const mutations = {
  setMovie(state, list) {
    state.movie = list
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
  }

}

export default createStore({ state, mutations, actions })