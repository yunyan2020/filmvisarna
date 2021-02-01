<template>
  <div class="container">
    <div class="bookings-list">
      <h3>Mina bokningar</h3>
      <div v-if="myBookings">
        <div v-for="booking in myBookings" :key="booking.id" class="booking">
          <h6>
            {{ booking.viewing.movie }} | {{ booking.viewing.date }} |
            {{ booking.viewing.time }} | {{ booking.viewing.screen.name }}
          </h6>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    myBookings() {
        return this.$store.state.myBookings != null   
    },
  },
};
</script >

<style scoped>

h3 {
  color: orange;
  font-weight: 500;
}

</style>

