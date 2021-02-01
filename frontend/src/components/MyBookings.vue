<template>
  <div class="container">
    <div class="bookings-list">
      <div v-if = "isMybookings" >
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
      isMyBookings:false
    }
  },
  computed: {
    myBookings() {
      if (this.$store.state.myBookings){
        this.isMyBookings=true;
        return this.$store.state.myBookings;
      }
      else {this.isMyBookings=false}      
    },
  },
};
</script >

<style scoped>
</style>

