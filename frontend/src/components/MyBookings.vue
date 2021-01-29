<template>
  <div class="container">
    <div class="bookings-list">
      <div v-for="booking in MyBookings" :key="booking.id" class="booking">
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
      return this.$store.state.MyBookings;
    },
  },
};
</script >

<style scoped>
</style>

