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
    <div class="tomorrow">
      <h3>{{ formatedTomorrow }}</h3>
      <div v-for="movie of movieInDate(tomorrow)" :key="movie" class="movies">   
        <h5>{{ movie.film }}</h5>
        <h3>|</h3>
        <h5>{{ movie.time }}</h5>
        <h3>|</h3>
        <h5>{{ movie.auditorium }}</h5>
      </div>  
    </div>
    <div class="afterTomorrow">
      <h3>{{ formatedAfterTomorrow }}</h3>
      <div v-for="movie of movieInDate(afterTomorrow)" :key="movie" class="movies">   
        <h5>{{ movie.film }}</h5>
        <h3>|</h3>
        <h5>{{ movie.time }}</h5>
        <h3>|</h3>
        <h5>{{ movie.auditorium }}</h5>
      </div> 
    </div>
    </div>
  </div>
</template>

<script>
import dates from '../../../dates.json'

export default {
  data() {
    let currentDate = new Date()
    let tomorrowCaculate =  new Date(currentDate.getTime() + 24*60*60*1000)
    let afterTomorrowCaculate= new Date(currentDate.getTime() + 24*60*60*1000*2 )
    return {
      showing: dates,
      /* tomorrow = new Date(new Date().setDate(new Date().getDate() + 1)); */
      fullDate: currentDate,
      /* today: current.getDate() + '/' + current.getMonth() + 1, */ 
      today: currentDate,
      tomorrow:tomorrowCaculate ,
      afterTomorrow: afterTomorrowCaculate
    }
  },
  computed: {
    formatedToday: function() {
      return this.today.getDate() + '/' + (this.today.getMonth() + 1)
    },
    formatedTomorrow: function() {
      return this.today.getDate() + 1 + '/' + (this.today.getMonth() + 1)
    },
    formatedAfterTomorrow: function() {
      return this.today.getDate() + 2 + '/' + (this.today.getMonth() + 1)
    }
  },
  methods: {
    movieInDate: function(inDate) {
      return dates.filter(function(currentDate) {
        let test = (new Date(currentDate.date))
        let currentYear = (new Date(inDate)).getFullYear()  
        let y = test.getFullYear() == (new Date(inDate)).getFullYear()  
        console.log(y, test.getFullYear(), (new Date(inDate)).getFullYear() ) 
        return test.getFullYear() == (new Date(inDate)).getFullYear()  && test.getMonth() ==(new Date(inDate)).getMonth() && test.getDate() == (new Date(inDate)).getDate()
      })
  
    }
  }
}
</script>

<style scoped>
  
  .movies:hover {
    opacity: .5;
    text-align: left;
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