<template>
  <div class="container">
    <div class="container-title">
      <h1>Kalender</h1>
    </div>
    <div class="dates">
      <div class="today">
      <h3>{{ formatedToday }}</h3>
      <div v-for="movie of movieInDate(today)" :key="movie" class="movies">
        <h5>{{ movie.film }}</h5>
        <h3>|</h3>
        <h5>{{ movie.time }}</h5>
        <h3>|</h3>
        <h5>{{ movie.auditorium }}</h5>
      </div>
    </div>
    <div class="tomorow">
      <h3>{{ tomorow }}</h3>
      <!-- <div v-for="" :key="movie" class="movies">
        
      </div> -->
    </div>
    <div class="aftertomorow">
      <h3>{{ aftertomorow }}</h3>
    </div>
    </div>
  </div>
</template>

<script>
import dates from '../../../dates.json'

export default {
  data() {
    let current = new Date()
    let t = new Date(current)
    t.setDate(t.getDate() + 1)
    return {
      showing: dates,
      fullDate: current,
      today: current,
      tomorow: (t).getDate() + '/' + t.getMonth() + 1,
      aftertomorow: t.getDate() + 1 + '/' + t.getMonth() + 1,
    }
  },
  computed: {
    formatedToday: function() {
      return this.today.getDate() + '/' + (this.today.getMonth() + 1)
    }
  },
  methods: {
    movieInDate: function(date) {
      return dates.filter(function(currentDate) {
        let test = (new Date(currentDate.date))
        let y = test.getFullYear() == date.getFullYear()
        console.log(y, test.getFullYear(), date.getFullYear())
        return test.getFullYear() == date.getFullYear() && test.getMonth() == date.getMonth() && test.getDate() == date.getDate()
      })
  
    }
  }
}
</script>

<style scoped>
  
  .movies:hover {
    opacity: .5;
  }

  h5 {
    display: inline-block;
    padding-left: 5px;
  }

  .movies > h3 {
    display: inline-block;
    padding: 0 5px 0 5px;
  }

  h1, h3, h5 {
    color: black;
  }

 .container {
   margin: 10px;
   padding: 1em;
   border: 1px solid black;
 }

 .dates {
   display: flex;
   justify-content: space-around;
   
 }

 .container-title {
   display: inline-block;
 }

</style>