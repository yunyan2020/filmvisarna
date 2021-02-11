<template>
  <div class="myBookings">
    <div class="bookings-list">
      <h3>Mina beställningar</h3>
      <div v-if="myBookings">
        <div v-for="booking in myBookings" :key="booking.id" class="booking">
          <h4> Film: {{ booking.viewing.movie }} </h4>
          <p>Tid:{{ booking.viewing.date }} {{ booking.viewing.time }}</p>  
          <p>Salon: {{ booking.viewing.screen }}</p>           
          <h4>Bokningsnummer: {{ booking.bookingRef }}</h4> 
          <p>Pris: {{ booking.price }} Platser: {{ booking.nrOfSeats }}  </p> 
           <div class="Seats">
              <h4>Säten detaljer </h4>  
              <div v-for="(seat,i) in booking.bookedSeat" :key=i
                  class="Seats-detail" >              
                  <p> Rad   :{{ seat.row }} Kolumn:{{ seat.seats }} </p>
              </div>              
            </div>           
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      hasMyBookings: false,
    };
  },
  computed: {
    myBookings() {
      return this.$store.state.myBookings;
    },
  },
  created() {
    this.$store.dispatch("fetchMyBookings");
  },
};
</script >

<style scoped>
.myBookings {
  position: absolute;
  text-align: center;  
  box-shadow: 0 0 10px 2px black;
  width: 500px;
  height: 200px;
  display: flex;
  padding: 2em;
  left: 50%;
  top: 20%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 200px;
  grid-gap: 1em;
}

.booking{
  text-align: left;
  border: 1px solid white;
  border-radius: 8px;
  width: 400px;
}
.Seats{
  padding: 1em;
  border: 1px solid #333;
  border-radius: 5px;
  margin:0.5em;
  }
</style>

