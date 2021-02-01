<template>
  <div class="container">
    <div class="bookings-list">
      <h3>Mina bokningar</h3>
      <div v-if="myBookings">
        <div v-for="booking in myBookings" :key="booking.id" class="booking">
          <h6>
           Price: {{ booking.price }}
            Seats: {{ booking.nrOfSeats }}
          </h6>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    /*  LÄGG TILL I TEMPLATE ISTÄLLET FÖR booking.price
             {{ booking.viewing.movie }} | {{ booking.viewing.date }} |
            {{ booking.viewing.time }} | {{ booking.viewing.screen.name }} */
  props: ["id"],
  computed: {
    myBookings() {
      return this.$store.state.myBookings
    },
  },
  created() {
    this.$store.dispatch("fetchMyBookings")
  }
}
</script >

<style scoped>

</style>

