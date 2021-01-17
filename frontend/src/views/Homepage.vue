<template>
  <div class="container">
    <Nav />
    <Info />
    <Movies />
    <TopMovies />
    <Calendar />
  </div>
</template>

<script>
import Movies from '../components/homepagecomp/Movies.vue'
import Info from '../components/homepagecomp/Info.vue'
import Nav from '../components/homepagecomp/Nav.vue'
import TopMovies from '../components/homepagecomp/TopMovies.vue'
import Calendar from '../components/homepagecomp/Calendar.vue'


export default {
  components: { Movies, Info, Nav, TopMovies, Calendar }

}
</script>

<style scoped>
 
</style>