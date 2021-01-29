<template>
  <div class="container">
    <div class="title-container">
      <h1>Sammanfattning</h1>
    </div>
    <div class="breakline"></div>
    <div class="booking-seats-detail">
      <h3>Antal bokade platser</h3>
      <h6 class="faded">Totalt: </h6>
      <div class="customer" v-for="customer of getBookingDetails" :key="customer">
        <h3>{{customer.label}}</h3>
        <h3>{{customer.counter}}</h3>
      </div>
      <!-- <div><h3>{{getBookingDetails.label}}</h3></div>
      <div></div>
      <div></div> -->
    </div>
    <div class="breakline"></div>
    <div class="booking-movie-details">
      <h1>{{viewing.movie}}</h1>
      <h3>{{ movieDetails.runtime }}</h3>
      <h6></h6>
    </div>
    <div class="breakline"></div>
    <div class="booking-id-container">
      <h3>Bokningsnummer</h3>
      <h6 class="faded"></h6>
      <div class="booking-id"></div>
    </div>
    <div class="breakline"></div>
    <div class="buttons">

    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      bookingId: "",
    }
  },
  computed: {
    m() {
      return this.$store.state.movie.filter((p) => p.id == this.id)[0];
    },
    viewing() {
    return this.$store.state.allViewings.filter((v) => v.id === this.id)[0]
    },
    price() {
      return this.$store.state.booking.price;
    },
    seatAmount() {
      return this.$store.state.booking.seats
    },
    movieDetails() {
       return this.$store.state.movie.filter((movie) => movie.title == this.viewing.movie)[0]
    },
    getBookingDetails() {
      let arr = (Object.values(this.$store.state.bookingDetails));
      return arr.filter((object) => object.counter > 0)
    }
  },
  methods: {
    generateId() {

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