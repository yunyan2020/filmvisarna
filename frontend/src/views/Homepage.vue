<template>
  <div class="container">    
   <!-- <Carousel />   -->
    <Movies />
    <TopMovies />
    <Calendar />
    <MyBookings />
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
   components: {MyBookings,Movies,TopMovies, Calendar },
  //components: { Movies,TopMovies, Calendar },
  // components: { Movies, Carousel, TopMovies, Calendar },
  //components: { Movies, Info, TopMovies, Calendar }
};
</script>

<style scoped>
</style>