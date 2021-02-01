<template>
  <div class="container">
    <div class="bookings-list">
      <p>MyBooking page </p>
      <div v-if = "hasMybookings" >
        <div v-for="booking in myBookings" :key="booking.id" class="booking">
          <h6>
            {{ booking.viewing.movie }} | {{ booking.viewing.date }} |
            {{ booking.viewing.time }} | {{ booking.viewing.screen.name }}
          </h6>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data(){
    return {
      hasMyBookings:false
    }
  },
  computed: {
    myBookings() {
      if (this.$store.state.myBookings){
        this.hasMyBookings=true;
        return this.$store.state.myBookings;
      }
      else {this.hasMyBookings=false}      
    },
  },
};
</script >

<style scoped>
</style>

