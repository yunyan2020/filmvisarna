<template>
  <div class="container">    
   <!-- <Carousel />   -->
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

export default {
  components: { Movies,TopMovies, Calendar },
  // components: { Movies, Carousel, TopMovies, Calendar },
  //components: { Movies, Info, TopMovies, Calendar }
};
</script>

<style scoped>
</style>