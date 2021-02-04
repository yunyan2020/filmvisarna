<template>
  <div class="container">
    <div class="scene-image" v-if="movie">
      <img :src="movie.movieScene" alt="" class="scene" />
    </div>
    <div class="movie" v-if="movie">
      <div class="poster">
        <img :src="movie.poster" alt="" class="movie-poster" />
      </div>
      <div class="line"></div>
      <div class="movie-information" v-if="movie">
        <h1>{{ movie.title }}</h1>
        <h4>{{ movie.genre }}</h4>
        <h6>{{ movie.runtime }} | {{ movie.rated }}</h6>
      </div>
      <button class="trailer-button" @click="viewTrailer()">Trailer <i class="far fa-play-circle"></i></button>
    </div>
    <div class="movie-detail" v-if="movie">
      <h3>{{ movie.plot }}</h3>
      <hr>
      <div class="information" v-if="movie">
        <h5>Regi:</h5>
        <h3>{{ movie.director }}</h3>
        <h5>Skådespelare:</h5>
        <h3>{{ movie.actors.join(" - ") }}</h3>
        <h5>Språk:</h5>
        <h3>{{ movie.language }}</h3>
        <h5>Premiär:</h5>
        <h3>{{ movie.year }}</h3>
      </div>
    </div>
    <div class="booking-section-title">
      <h1>Välj spelning</h1>
    </div>
    <div class="dates-list">
      <div v-for="view in sortViewings()" :key="view.id" class="viewing">
        <router-link :to="{ name: 'Bokning', params: { id: view.id } }" class="router-link">
          <h3>{{ view.screen }} {{ view.time }}</h3>
          <h5>{{ view.date }}</h5>
        </router-link>
      </div>
    </div>
    <div class="video-container" v-if="showTrailer">
      <div class="close-trailer-view"> <i class="far fa-times-circle" @click="viewTrailer()"></i> </div>
      <iframe :src="'https://www.youtube.com/embed/' + movie.youtubeTrailers" class="trailer"/>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      times: [],
      today: "",
      showTrailer: false
    };
  },
  computed: {
    id() {
      //get id from url parameter
      return this.$route.params.id;
    },
    movie() {
      return this.$store.state.movie.filter((p) => p.id == this.id)[0];
    },
    viewings() {
      // Returns all viewings for this movie for dates in present and future
      return this.$store.state.allViewings.filter(
        (viewing) => viewing.movie === this.movie.title
      );
    },
  },
  methods: {
    sortViewings() {
      // Sorts viewings by date
      this.viewings.sort((a, b) =>
        a.date > b.date ? 1 : b.date > a.date ? -1 : 0
      );
      // Filters out dates from the past
      let tempViewings = this.viewings.filter(
        (viewing) => viewing.date >= this.today
      );

      return tempViewings;
    },
    setTodaysDate() {
      // Setting the date for today
      let tday = new Date();
      this.today = tday.toJSON().slice(0, 10).replace(/-/g, "/");

    },
    resetBookingInfo() {
      //Sets all current booking info to null, to start a new booking
      this.$store.commit('setBookingCustomer', null)
      this.$store.commit('setBookingViewing', null)
      this.$store.commit('setBookingPrice', 0)
      this.$store.commit('setNrOfSeats', 0)
    },
    viewTrailer() {
      this.showTrailer = !this.showTrailer
    }
  },
    mounted() {
    this.setTodaysDate();
    this.resetBookingInfo()
  }
};
</script>

<style scoped>

hr {
  position: relative;
  border-color: rgba(51, 51, 51, 0.363);
  top: 25px;
}

.movie-detail {
  padding-top: 25px;
  border-top: 1px solid #333;
}

.video-container {
  z-index: 5;
  width: 50%;
  height: 500px;
  /* margin: 0 auto; */
  position: absolute;
  top: 554px;
  left: 475px;
  display: block;
}

.close-trailer-view {
  width: 100%;
  height: 50px;
}

.fa-times-circle {
  font-size: 30px;
  position: relative;
  left: 915px;
  top: 10px;
  cursor: pointer;
}

.fa-times-circle:hover {
  opacity: 0.5;
}

.trailer {
  width: 100%;
  height: 100%;
  border: 1px solid #333;
  box-shadow: 0 0 10px 2px black;
}

.container {
  background: black;
  color: white;
  margin: 0;
}

.scene-image {
  width: 100%;
  height: 700px;
  border: 1px solid black;
}

.scene {
  width: 100vw;
  height: 100%;
  position: relative;
  bottom: 35px;
}

.movie {
  width: 50%;
  height: 500px;
  margin: 0 auto;
  position: relative;
  bottom: 200px;
  display: flex;
}

.movie-poster {
  border-radius: 8px;
  box-shadow: 0 0 30px 10px black;
}

.movie-information {
  margin-left: 10px;
  position: relative;
  top: 200px;
}

.trailer-button {
  position: relative;
  bottom: 20px;
  left: 150px;
  font-family: "Poppins", sans-serif;
  margin: auto 0;
  padding: 3px 30px;
  font-size: 20px;
  background: black;
  color: white;
  outline: none;
  border: 1px solid rgba(51, 51, 51, 0.479);
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 10px 2px black; 
  cursor: pointer;
  /* letter-spacing: 2px;
  text-transform: uppercase; */
} 

.trailer-button:hover {
  opacity: 0.5;
}

.fa-play-circle {
  font-size: 17px;
  margin: auto 0;
  position: relative; 
  left: 15px;
}

.movie-detail {
  width: 50%;
  height: 350px;
  margin: 0 auto;
  position: relative;
  bottom: 150px;
}

h5 {
  opacity: 0.6;
}

.information {
  margin-top: 40px;
}

.booking-section-title {
  width: 50%;
  position: relative;
  left: 25%;
  bottom: 35px;
  border-top: 1px solid #eee;
  padding-top: 50px;
}

.dates-list {
  position: relative;
  bottom: 25px;
  width: 50%;
  /* height: 400px; */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* border: 1px solid #333;
  border-radius: 5px; */
}

.viewing {
  cursor: pointer;
  height: 5em;
  border: 1px solid rgb(26, 25, 25);
  border-radius: 5px;
  margin: 2px;
  float: left;
  padding: 4px 0 0 8px;
}

.router-link {
  text-decoration: none;
  color: white;
}

.viewing:hover {
  /* background: rgba(255, 255, 255, 0.082); */
  /* opacity: 0.1; */
  border: 1px solid #333;
}

/* .viewing:active {
  background: rgba(238, 238, 238, 0.062);
} */

.boka {
  width: 100px;
  position: relative;
  left: 1300px;
  bottom: 180px;
  border: 1px solid #333;
  border-radius: 15px;
  padding: 2px 10px 2px 10px;
  text-align: center;
}

.boka:hover {
  opacity: 0.5;
  cursor: pointer;
}

.video {
  border: 1px solid purple;
  width: 50%;
  height:500px;
  margin: 20px auto;
}
/* ::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(37, 37, 37);
  border-radius: 8px;
}

::-webkit-scrollbar-thumb {
  background: #333; 
  border-radius: 8px;
  border: 1px solid #0f0f0f;
} */
</style>