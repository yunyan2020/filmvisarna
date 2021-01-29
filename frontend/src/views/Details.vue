<template>
  <div class="container">
    <div class="scene-image">
      <img :src="movie.movieScene" alt="" class="scene" />
    </div>
    <div class="movie">
      <div class="poster">
        <img :src="movie.poster" alt="" class="movie-poster" />
      </div>
      <div class="movie-information">
        <h1>{{ movie.title }}</h1>
        <h4>{{ movie.genre }}</h4>
        <h6>{{ movie.runtime }} | {{ movie.rated }}</h6>
      </div>
    </div>
    <div class="movie-detail">
      <h3>{{ movie.plot }}</h3>
      <div class="information">
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
  </div>
</template>


<script>
export default {
  data() {
    return {
      times: [],
      today: "",
      
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
    }
  },
  mounted() {
    this.setTodaysDate();
    this.resetBookingInfo()
    console.log(this.$store.state.booking)
  },
};
</script>

<style scoped>

.container {
  background: #0f0f0f;
  color: white;
  margin: 0;
}

.scene-image {
  width: 100%;
  height: 700px;
  border: 1px solid black;
}

.scene-image::after {
  background: linear-gradient();
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
  border: 1px solid red;
  margin: 0 auto;
  position: relative;
  bottom: 200px;
  display: flex;
}

.movie-poster {
  border-radius: 8px;
}

.movie-information {
  margin-left: 10px;
  position: relative;
  top: 200px;
}

.movie-detail {
  width: 50%;
  height: 450px;
  border: 1px solid green;
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
  position: relative;
  left: 25%;
  bottom: 35px;
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