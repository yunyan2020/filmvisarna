<template>
  <div class="container">    
   <!-- <Carousel />   -->    
    <MyBookings />
    <Movies />
    <TopMovies />
    <Calendar />
  </div>
</template>

<script>
import Movies from "../components/homepagecomp/Movies.vue";
//import Info from '../components/homepagecomp/Info.vue'
import TopMovies from "../components/homepagecomp/TopMovies.vue";
import Calendar from "../components/homepagecomp/Calendar.vue";
//import Carousel from "../components/homepagecomp/Carousel.vue";
import MyBookings from "../components/MyBookings.vue";

export default {
  //components: { Movies,TopMovies, Calendar },
  components: { MyBookings,Movies,TopMovies, Calendar },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background: black;
}
</style>