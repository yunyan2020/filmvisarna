<template>
  <div class="myBookings">
    <div class="bookings-list">
      <h3>Mina beställningar</h3>
      <div v-if="myBookings">
        <div v-for="booking in myBookings" :key="booking.id" class="booking">
          <h4>
            Pris: {{ booking.price }} Platser: {{ booking.nrOfSeats }} Film:
            {{ booking.viewing.movie }} Tid:{{ booking.viewing.date }}
            {{ booking.viewing.time }}
            Salon: {{ booking.viewing.screen }} Bokningsnummer:
            {{ booking.bookingRef }}
          </h4>
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
  left: 35%;
  top: 20%;
  margin-top: 1em;
  margin-right: 0.1em;
  padding: 1em;
  letter-spacing: 2px;
}

.booking {
  text-align: left;
  border: 1px solid #333;
  display: flex;
  border-radius: 8px;
  box-shadow: 0 0 10px 2px black;
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 150px;
  grid-gap: 1em;
}
</style>

