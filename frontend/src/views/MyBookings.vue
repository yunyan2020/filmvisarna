<template>  
  <div class="container">
    <h2>Mina beställningar </h2>
    <div class="bookings-list">
      <div v-for="booking in myBookings" :key="booking.id" class="booking">
        <h6>
          {{ booking.nrOfSeats }} | {{ booking.price }} 
        </h6>
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
       return this.$store.state.myBookings;
    }    
  }
}  
</script >

<style scoped>
.container {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  height: 200px; 
  display: flex;
  margin: 10px;
  padding: 1em;
  left:50%;
  top:20%;
  border: 1px solid rgba(114, 112, 112, 0.521);
}

</style>

