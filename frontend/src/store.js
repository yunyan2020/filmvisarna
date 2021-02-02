import { registerRuntimeCompiler } from 'vue'
import { createStore } from 'vuex'

const state = {
  movie: [],
  allViewings: [],
  currentUser: null,
  screens: [],
  loggedIn: false,
  booking: { customer: {}, viewing: {}, nrOfSeats: 0, price: 0 },
  myBookings: [],
  allBookings: [],
  currentUser: {},
  bookingDetails: {},
  booking: { price: 0, seats: 0 }, // seats: []
  bookedSeat: { row: [], seats: [] }
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
  setCurrentUserBooking(state, booking) { 
    state.currentUser.booking = booking  // Test
  },
  setBookingCustomer(state, customer) { 
    state.booking.customer = customer
  },
  setBookingViewing(state, viewing) { 
    state.booking.viewing = viewing
  },
  setBookingPrice(state, bookingPrice) { 
    state.booking.price = bookingPrice
  },
  setNrOfSeats(state, nrOfSeats) { 
    state.booking.nrOfSeats = nrOfSeats
  },
  setMyBookings(state, myBookings) {
    state.myBookings = myBookings
  },  
  setAllBookings(state, booking) { 
    state.allBookings.push(booking)
  },  
  setSeatAmount(state, amount) {
    state.booking.seats = amount;
  },
  setBookingDetails(state, bookingDetails) {
    state.bookingDetails = bookingDetails
  },
  setRow(state, row) {
    state.bookedSeat.row = row
  },
  setSeat(state, seat) {
    state.bookedSeat.seats = seat
  }
}

//async network requests
const actions = {

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
    let currentUserBookings =  [];
    console.log('bookings', list);
    
    if(state.currentUser && state.currentUser.id) {
        currentUserBookings = list.filter((booking) => {
        if (booking.customer.id === state.currentUser.id) {
          return booking
        }
      })     
    }    
    console.log('currentUserBookings', currentUserBookings);
    store.commit('setMyBookings', currentUserBookings)
  },
  async addBooking(store, booking) { 
    let newBooking = await fetch('/rest/bookings', {
      method: 'POST',
      body: JSON.stringify(booking)
    })
    try {
      newBooking = await newBooking.json()
      console.log(newBooking)
      store.commit('setCurrentUserBooking', newBooking) // Test
      store.dispatch('fetchMyBookings') // Test
    } catch { 
      console.warn("Booking failed")

    }

  }


}

export default createStore({ state, mutations, actions })