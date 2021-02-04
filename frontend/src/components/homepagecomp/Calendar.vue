<template>
  <div class="container">
    <div class="container-title">
      <h1>Kalender</h1>
    </div>
    <div class="dates">
          <div class="today date">
            <h6>{{today}}</h6>
            <h2>Idag</h2>
            <div v-for="movie in movieToday" :key="movie.title" class="movie-container">
            <router-link :to="'/movieshow/details/' + movie.id">
              <img :src="movie.poster" class="poster">
            </router-link>
            <div v-if="movieTodayDetails" class="details">
              <p>Salong & tid:</p>
              <h1>{{movieTodayDetails.screen}} {{movieTodayDetails.time}}</h1>
              <p>Film:</p>
              <h3>{{ movie.title }}</h3>
              <p>Speltid:</p>
              <h4>{{movieToday[0].runtime}}</h4>
            </div>
            </div>
          </div>
          <div class="tomorow date">
            <h6>{{tomorrow}}</h6>
            <h2>Imorgon</h2>
            <div v-for="movie in movieTomorrow" :key="movie.title" class="movie-container">
            <router-link :to="'/movieshow/details/' + movie.id">
              <img :src="movie.poster" class="poster">
            </router-link>
            <div v-if="movieTomorrowDetails" class="details">
              <p>Salong & tid:</p>
              <h1>{{movieTomorrowDetails.screen}} {{movieTomorrowDetails.time}}</h1>
              <p>Film:</p>
              <h3>{{ movie.title }}</h3>
              <p>Speltid:</p>
              <h4>{{movieTomorrow[0].runtime}}</h4>
            </div>
            </div>
          </div>
          <div class="aftertomorow date">
            <h6>{{afterTomorrow}}</h6>
            <h2>I Övermorgon</h2>
            <div v-for="movie in movieAfterTomorrow" :key="movie.title" class="movie-container">
              <router-link :to="'/movieshow/details/' + movie.id">
                <img :src="movie.poster" class="poster">
              </router-link>
              <div v-if="movieAfterTomorrowDetails" class="details">
                <p>Salong & tid:</p>
                <h1>{{ movieAfterTomorrowDetails.screen }} {{ movieAfterTomorrowDetails.time }}</h1>
                <p>Film:</p>
                <h3>{{ movie.title }}</h3>
                <p>Speltid:</p>
                <h4>{{ movieAfterTomorrow[0].runtime }}</h4>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      today: "",
      tomorrow: "",
      afterTomorrow: "",
    };
  },
  computed: {
    movies() {
      return this.$store.state.movie
    },
    thisMovieAfterTomorrow() {
      /* let test = this.movies.filter((movie) => movie.titel === this.movieToday.title)
      return test */
      return this.movieAfterTomorrow
    },
    movieToday() {
      // Filters through viewings json for viewing object on todays date
      let tempViewing = this.$store.state.allViewings.filter((viewing) => viewing.date === this.today)
      // Checks if there are viewings in tempViewings array, if true filters through the movie json for movie with same title for movie object
      return tempViewing[0] ? this.movies.filter((movie) => movie.title === tempViewing[0].movie) : "Inget visas idag"
    },
    movieTodayDetails() {
      return this.$store.state.allViewings.filter((viewing) => viewing.date === this.today)[0]
    },
    movieTomorrow() {
      let tempViewing = this.$store.state.allViewings.filter((viewing) => viewing.date === this.tomorrow)
      return tempViewing[0] ? this.movies.filter((movie) => movie.title === tempViewing[0].movie) : "Inget visas idag"
    },
    movieTomorrowDetails() {
      return this.$store.state.allViewings.filter((viewing) => viewing.date === this.tomorrow)[0]
    },
    movieAfterTomorrow() {
      let tempViewing = this.$store.state.allViewings.filter((viewing) => viewing.date === this.afterTomorrow)
      return tempViewing[0] ? this.movies.filter((movie) => movie.title === tempViewing[0].movie) : "Inget visas idag"
    },
    movieAfterTomorrowDetails() {
      return this.$store.state.allViewings.filter((viewing) => viewing.date === this.afterTomorrow)[0]
    }
  },
  methods: {
    setDates() {
      // Setting the dates for today and two days ahead
      let tday = new Date();
      let tmorrow = new Date();
      tmorrow.setDate(tday.getDate() + 1);
      let afterTmorrow = new Date();
      afterTmorrow.setDate(tmorrow.getDate() + 1);

      this.today = tday.toJSON().slice(0, 10).replace(/-/g, "/");
      this.tomorrow = tmorrow.toJSON().slice(0, 10).replace(/-/g, "/");
      this.afterTomorrow = afterTmorrow
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
    }
  },
  mounted() {
    this.setDates()
  }
};
</script>

<style scoped>

p {
  font-size: 12px;
  font-weight: 600;
  opacity: 0.7;
}

h1 {
  color: white;
}

img:hover {
  opacity: 0.5;
}

h5 {
  display: inline-block;
  padding-left: 5px;
}

.movies > h3 {
  display: inline-block;
  padding: 0 5px 0 5px;
}

.container {
  margin: 10px;
  padding: 1em;
  justify-content: space-between;
}

.dates {
  /* display: flex;
  justify-content: space-around; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;
  justify-content: center;
}

.container-title {
  display: inline-block;
}

.date h2 {
  text-align: center;
  margin: 10px 0 40px 0;
  color: #f9f6f7; 
}

.date h6 {
  text-align: center;
}

.poster {
  width: 125px;
  height: 200px;
  border-radius: 8px;
}

.movie-container {
  display: flex;
  gap: 1em;
  margin-left: 50px;
}

.details {
  position: relative;
  top: 20px;
}
</style>