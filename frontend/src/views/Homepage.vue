<template>
  <div class="container">    
    <Movies />
    <hr>
    <TopMovies />
    <hr>
    <Calendar />
  </div>
</template>

<script>
import Movies from "../components/homepagecomp/Movies.vue";
import TopMovies from "../components/homepagecomp/TopMovies.vue";
import Calendar from "../components/homepagecomp/Calendar.vue";

export default {
  components: { Movies,TopMovies, Calendar },
};
</script>

<style scoped>
.container {
  height: 100%;
  background: black;
}

hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(32, 32, 32, 0.75), rgba(255, 255, 255, 0));
  box-shadow: 0 0 10px 2px black;
  margin: 20px 0 20px 0;
}
</style>