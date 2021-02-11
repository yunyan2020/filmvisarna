<template>
  <div class="container">
    <div class="title-container">
      <h1 class="title">Sammanfattning</h1>
    </div>
    <div class="breakline"></div>
    <div class="booking-seats-detail">
      <h3>Antal bokade platser</h3>
      <h6 class="faded">Totalt: {{seatAmount}}</h6>
      <div class="customer" v-for="customer of getBookingDetails" :key="customer">
        <h3>{{customer.label}}</h3>
        <h3>{{customer.counter}}</h3>
      </div>
    </div>
    <div class="breakline"></div>
    <div class="booking-movie-details" v-if="viewing">
      <p class="label">Film:</p>
      <h3>{{ viewing.movie }} | {{ movieDetails.runtime }} | {{ movieDetails.rated }}</h3>
      <p class="label">Datum, tid och bokade säten:</p>
      <h4>{{ viewing.date }} - {{ viewing.time }} | {{ viewing.screen }}</h4>
      <p class="label">Rader:</p>
      <h5>{{rad}}</h5>
      <p class="label">Säten:</p>
      <h5>{{seat}}</h5>
      <p class="label pris">Pris:</p>
      <h5>{{ price }}kr</h5>
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
      <router-link :to="'/MyBookings'" class="router-link router-bekräfta">
        <button v-on:click="completeBooking()" class="bekräfta">Bekräfta</button>
      </router-link>
      <router-link :to="'/'" class="router-link router-bekräfta">
        <button class="avsluta">Avsluta</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookingId: this.generateId(),
      noSeatsLeft: "",
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
    },
    booking() {
      return this.$store.state.booking
    },
    rad() {
      return this.seating.row.join(', ').toString()
    },
    seat() {
      return this.seating.seats.join(', ').toString()
    }
  },
  methods: {
    generateId() {
      return Math.random().toString(36).substr(2, 25).toUpperCase()
    },
    completeBooking() {
    this.$store.commit('setBookingRef', this.bookingId)
    let bookedSeat = []
    for(let i=0;i<this.seatAmount;i++){
        bookedSeat.push({row:this.seating.row[i],seats:this.seating.seats[i]}) 
      }  
    this.$store.commit('setBookingBookedSeat',bookedSeat)  
    this.setBookingViewing()
    let booking = this.$store.state.booking

    this.$store.dispatch('updateViewing', this.viewing)
    
    this.$store.dispatch('addBooking', booking)
    
    },
    setBookingViewing() {
    let tempViewing = this.viewing
      tempViewing.seatsTaken +=  this.seatAmount
      for(let i=0;i<this.seatAmount;i++){
        tempViewing.bookedSeat.push({row:this.seating.row[i],seats:this.seating.seats[i]}) 
      } 
      this.$store.commit("setBookingViewing", tempViewing);
      }
  } 
}
</script>

<style scoped>
  .pris {
    margin-top: 10px;
  }
  .label {
    font-size: 12px;
    font-weight: 600;
    opacity: 0.5;
    margin-top: 5px;
  }

  .title {
    position: relative;
    top: 10px;
  }

  .faded {
    opacity: 0.5;
    position: relative;
    left: 5px;
    top: 3px;
    margin-top: 5px;
  }

  .breakline {
    width: 100%;
    height: 1px;
    background: white;
    margin: 30px auto 10px auto;
    opacity: 0.1;
    border-radius: 10px;
  }

  .container {
    
    margin: 25px auto 0 auto;
    width: 50%;
    padding: 10px;
  }

  .booking-id {
    border: 1px solid white;
    border-radius: 10px;
    padding: 0 30px 0 30px;
    display: inline-block;

  }

  .customer {
    margin: 4px;
    margin-left: 0;
    border: 1px solid #333;
    border-radius: 12px;
    padding: 1px 6px 1px 6px;
    display: flex;
    justify-content: space-between;
    width: 125px;
  }

  .router-link button {
    font-family: "Poppins", sans-serif;
    margin: 0 auto;
    display: block;
    border-radius: 15px;
    background: black;
    color: white;
    cursor: pointer;
  }

  .router-link button:hover {
    opacity: 0.7;
  }

  .buttons .router-link {
    text-decoration: none;
  }

  .buttons {
    margin-top: 50px;
  }

  .buttons .bekräfta {
    width: 200px;
    height: 40px;
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: 900;
    border: 1px solid rgba(238, 238, 238, 0.1);
  }

  .buttons .avsluta {
    width: 100px;
    font-size: 13px;
    margin-bottom: 15px;
    font-weight: 600;
    border: 1px solid rgba(238, 238, 238, 0.1);
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