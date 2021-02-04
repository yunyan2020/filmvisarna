<template>
  <div class="myBookings">
    <div class="bookings-list">
      <h3>Mina beställningar</h3>
      <div v-if="myBookings">
        <div v-for="booking in myBookings" :key="booking.id" class="booking">
          <h4>Pris: {{ booking.price }} Platser: {{ booking.nrOfSeats }}
             {{ booking.viewing.movie }} | {{ booking.viewing.date }} |
            {{ booking.viewing.time }} | {{ booking.viewing.screen }} |
            Bokningsnummer:  {{ booking.bookingRef }}  </h4>
            
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
  width: 500px;
  height: 200px;
  display: flex;
  padding: 2em;
  left: 50%;
  top: 20%;
  margin-top: 1em;
  margin-right: 0.1em;
  padding: 1em;
  letter-spacing: 2px;
}
</style>

