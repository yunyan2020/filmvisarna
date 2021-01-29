<template>
  <div class="container">
    <div class="bookings-list">
      <div v-for="booking in myBookings" :key="booking.id" class="booking">
        <h6>
          {{ booking.viewing.movie }} | {{ booking.viewing.date }} |
          {{ booking.viewing.time }} | {{ booking.viewing.screen }}
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      email: "",
    };
  },
  computed: {
    myBookings() {
      return this.$store.state.myBookings;
    },
  },
};
</script >

<style scoped>
</style>

