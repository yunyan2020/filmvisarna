<template>
  <div class="container">    
   <!-- <Carousel />   --> 
    <Movies />
    <hr>
    <TopMovies />
    <hr>
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
};
</script>

<style scoped>
.container {
  /* width: 100%; */
  height: 100%;
  background: black;
}

hr {
  /* border: 1px solid #333;
  margin: 0 auto;
  width: 98%;
  box-shadow: 0 0 10px 2px black; */
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(32, 32, 32, 0.75), rgba(255, 255, 255, 0));
  box-shadow: 0 0 10px 2px black;
  margin: 20px 0 20px 0;
}
</style>