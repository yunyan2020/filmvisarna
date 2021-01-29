<template>
  <div class="container">
    <div class="booking-information">
      <h1>{{ viewing.movie }}</h1>
      <p>{{ viewing.date }}  |  {{ viewing.time }}  |  {{ price }}SEK | {{ screen.name }}</p>
    </div>
    <div class="selection">
      <div class="scene">
        <h6>skärm</h6>
      </div>
      <div class="seats">
        <div v-for="row in screen.seatsPerRow" :key="row" class="row">
          <div v-for="seat in row" :key="seat" class="seat"></div>
        </div>
      </div>
    </div>
    <div class="submit-exit">
      <button class="vidare" v-on:click="addBookingInfo()">Vidare</button>
      <div v-if="mustLogin" class="error">{{ mustLogin }}</div>
      <router-link :to="'/'">
      <button class="avsluta" v-on:click="resetBookingInfo()">Avsluta</button>
      </router-link>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      mustLogin: ""
    }
  },
  props: ['id'],
  computed: {
    customer() {
      return this.$store.state.currentUser
    },
    viewing() {
    return this.$store.state.booking.viewing
    },
    price() {
      return this.$store.state.booking.price
    },
    nrOfSeats() {
      return this.$store.state.booking.nrOfSeats
    },
    screen() {
      return this.$store.state.screens.filter((s) => s.name === this.viewing.screen)[0]
    },
    isLoggedIn() {
      return this.$store.state.currentUser != null
    }
  },
  methods: {
    addBookingInfo() {
      if(this.isLoggedIn) {
      this.mustLogin = ""
      this.$store.state.commit('setBookingCustomer', this.customer)
      this.completeBooking()
      }
      else {
        this.mustLogin = "Du måste logga in för att fortsätta"
      }
    },
    resetBookingInfo() {
      this.$store.commit('setBookingCustomer', null)
      this.$store.commit('setBookingViewing', null)
      this.$store.commit('setBookingPrice', 0)
      this.$store.commit('setNrOfSeats', 0)
    },
    completeBooking() {
      let booking = this.$store.state.booking
      this.$store.dispatch('addBooking', booking)
    }
  }
}
</script>

<style scoped>
.container {
  width: 75%;
  height: 90vh;
  border: 1px solid white;
  margin: 50px auto;
}

h1 p {
  color: white;
}

.booking-information {
  height: 15%;
  border: 1px solid yellow;
}

.selection {
  height: 75%;
  border: 1px solid red;
}

.scene {
  text-align: center;
  margin: 20px auto 10px auto;
  border: 1px solid white;
  background: #eee;
  color: black;
  width: 35%;
  height: 50px;
  box-shadow: 0px 4px 30px 2px rgba(255, 255, 255, 0.397);
}

.seats {
  margin: 50px auto 10px auto;
  border: 1px solid purple;
  width: 60%;
  height: 80%;
  padding-top: 50px;
}

.row {
  display: flex;
  justify-content: center;
  padding: 2px 0 5px 0;
}

.seat {
  width: 2px;
  height: 7px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 1px solid #7e7474;
  margin: 5px;
  padding: 10px;
  cursor: pointer;
}

.seat:hover {
  opacity: 0.5;
}

.submit-exit {
  position: relative;
  bottom: 25px;
}

.submit-exit > button {
  font-family: "Poppins", sans-serif;
  display: block;
  margin: 0 auto;
  color: #eee;
  background: #0f0f0f;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid rgba(238, 238, 238, 0.1);
  padding: 4px 8px 4px 8px;
}

.submit-exit > button:hover {
  opacity: 0.5;
}

.submit-exit > .vidare {
  width: 200px;
  height: 40px;
  margin-bottom: 15px;
  font-size: 20px;
}

.error {
  color: crimson;
  margin-bottom: 0.5em;
}

</style>