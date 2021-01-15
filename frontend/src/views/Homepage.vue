<template>
  <!-- <div class="container">
    <div class="nav">
      nav
    </div>
    <div class="info-container">
      <div class="details">
        Öppettider, address och telefonnr
      </div>
      <div class="cinema-info">
        Info om biografen. Salonger och antal platser
      </div>
    </div>
    <div class="current-movies">
      current-movies-container
    </div>
    <div class="top-movies">
      top-movies-container
    </div>
    <div class="calendar">
      <div class="calendar-title">
        <h3>Calendar</h3>
      </div>
      <div class="dates">
        <div class="today">
          today
        </div>
        <div class="tomorow">
          tomorowtext-align: center;
        </div>
      </div>
    </div>
  </div> -->
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
  
  /* .container {
    width: 100%;
    height: 100%;
    width: 100vw;
    height: 120vh;
    background: rgb(20, 20, 20);
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 70px 200px 500px 500px 300px;
  }

  .container > div {
    padding: 1em;
  }

  .info-container {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    background: #333;
  }

  .details {
    background: #efefef;  
  }

  .cinema-info {
    background: #efefef;
  }

  .current-movies {
    background: rgba(51, 51, 51, 0.863);
  }

  .top-movies {
    background: rgba(51, 51, 51, 0.637);
    background: red;
  }

  .calendar {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr;
    background: rgba(51, 51, 51, 0.384);
    justify-content: space-between;
  }

  .dates {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .today {
    
    background: rgba(51, 51, 51, 0.349);
  }

  .tomorow {
    
    background: rgba(51, 51, 51, 0.253);
  }

  .after-tomorow {
    
    background: rgba(51, 51, 51, 0.034);
  } */
</style>