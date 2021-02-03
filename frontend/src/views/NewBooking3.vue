<template>
  <div class="container">
    <div class="title-container">
      <h1>Sammanfattning</h1>
    </div>
    <div class="breakline"></div>
    <div class="booking-seats-detail">
      <h3>Antal bokade platser</h3>
      <h6 class="faded">Totalt: {{seatAmount}}</h6>
      <div class="customer" v-for="customer of getBookingDetails" :key="customer">
        <h3>{{customer.label}}</h3>
        <h3>{{customer.counter}}</h3>
      </div>
      <!-- <div><h3>{{getBookingDetails.label}}</h3></div>
      <div></div>
      <div></div> -->
    </div>
    <div class="breakline"></div>
    <div class="booking-movie-details" v-if="viewing">
      <!-- <h1>{{viewing.movie}}</h1>
      <h3>{{ movieDetails.runtime }}</h3>
      <h6></h6> -->
      <h4>{{ viewing.movie }} | {{ movieDetails.runtime }} | {{ movieDetails.rated }}</h4>
      <h5>{{ viewing.date }} - {{ viewing.time }} | {{ viewing.screen }} | {{ seating }}</h5>
      <h6>Pris: {{ price }}kr</h6>
    </div>
    <div class="breakline"></div>
    <div class="booking-id-container">
      <h2>Bokningsnummer</h2>
      <h6 class="faded"></h6>
      <div class="booking-id">
        <h3>{{bookingId}}</h3>
      </div>
    </div>
    <div class="breakline"></div>
    <div class="buttons">
      <router-link :to="'/'">
        <button v-on:click="completeBooking()">Bekräfta</button>
      </router-link>
      <router-link :to="'/'" >
        <button>Avsluta</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookingId: this.generateId(),
    }
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    viewing() {
      return this.$store.state.allViewings.filter((v) => v.id === this.id)[0];
    },
    price() {
      return this.$store.state.booking.price;
    },
    seatAmount() {
      return this.$store.state.booking.nrOfSeats
    },
    movieDetails() {
       return this.$store.state.movie.filter((movie) => movie.title == this.viewing.movie)[0]
    },
    getBookingDetails() {
      let arr = (Object.values(this.$store.state.bookingDetails));
      return arr.filter((object) => object.counter > 0)
    },
    seatDetails() {
      return this.$store.state.bookedSeat
    },
    seating() {
      return this.$store.state.bookedSeat
    }
  },
  methods: {
    generateId() {
      return Math.random().toString(36).substr(2, 25).toUpperCase()
    },
    completeBooking() {
    this.setBookingViewing()

    let booking = this.$store.state.booking

    this.$store.dispatch('addBooking', booking)
    this.$store.dispatch('updateViewing', this.viewing)
    },
    setBookingViewing() {
    let tempViewing = this.viewing
    tempViewing.seatsTaken +=  this.seatAmount
    console.log("NewBooking3 tempviewing seatstaken: ", tempViewing.seatsTaken)

    this.$store.commit("setBookingViewing", tempViewing);
    }
  } 
}
</script>

<style scoped>
  .breakline {
    width: 98%;
    height: 1px;
    background: white;
    margin: 5px auto 5px auto;
    opacity: 0.1;
    border-radius: 10px;
  }

  .container {
    border: 1px solid white;
    margin: 0 auto;
    width: 50%;
    
  }

  .booking-id {
    border: 1px solid white;
    border-radius: 10px;
    padding: 0 30px 0 30px;
    display: inline-block;

  }

  /* .title-container {

  }

  .booking-seats-detail {

  }

  .booking-movie-details {

  }

  .booking-id-container {

  }

  .buttons {

  } */
</style>