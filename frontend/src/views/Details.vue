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
      <button class="trailer-button" @click="viewTrailer()">Trailer <i class="far fa-play-circle"></i></button>
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
    <div class="dates-list">
      <div v-for="view in sortViewings()" :key="view.id">
        <router-link :to="{ name: 'Bokning', params: { id: view.id } }" class="viewing">
          <h5>{{ view.date }} | {{ view.time }}</h5>
          <p>{{ view.screen }}</p>
        </router-link>
      </div>
    </div>
    <div class="video-container" v-if="showTrailer">
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
    console.log(this.$store.state.booking)
  }
};
</script>

<style scoped>
.video-container {
  z-index: 5;
  width: 50%;
  height: 500px;
  position: absolute;
  top: 800px;
  margin: 0 auto;
}

.trailer {
  width: 100%;
  height: 100%;
}
/* .movie-head {
  margin: 5px;
  padding: 1em;
  max-width: 50em;
  margin-left: auto;
  margin-right: auto;
  top: 1em;
}
.wrap {
  position: relative;
  width: 70%;
  height: 700px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  border: 1px solid rgba(114, 112, 112, 0.521);
}
.ticket-page {
  float: left;
  position: absolute;
  margin: 10px;
  padding: 1em;
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
  top: 1em;
  border: 1px solid rgba(114, 112, 112, 0.521);
}

.movie-detail {  
  float: left;  
  height:90%;
  position: absolute;
  background: #333;
  overflow: hidden;
  left: 50%;
  margin: 5px;
  padding:10px;
  max-width: 50%;  
  top: 1px;
  border-radius: 5px;
}

.item-detail { 
  margin-bottom: 1px;
  padding-top: 0;
  font-size: 15px;
  text-align: left;
  color: rgb(243, 220, 11);
  font-weight: normal;
}
.item-name {
  display: inline;
  font-size: 13px;
  color: white;
}

.intro{
  border:1px solid rgba(80, 76, 76, 0.521);
  margin-top: 60px;
  position:relativ;
}

.intro_text {
  max-width: 800px;
  padding-top: 15px;
  overflow: hidden;
  display: -webkit-box;
  font-size: 13px;
  color: white;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
}

.intro .a {
 cursor: hand;
  color: #000000;
  font-size: 34px;
  transition:0.5s; 
}
 a:hover{
    color:blue;
    text-decoration: none;
}

.intro .mailTo{
  margin-top:1px;
  font-size: 30px;
  color:white;
  font-weight:bold;
}

.p-0{
  float:left;
  position:absolute;
  text-align: left;
  color:white;
  margin: 2px;
  padding: 2px;
}

.p-1{
  position:absolute;
  color:thistle;
  left:40%;
  width: 100%;
  text-align: left;
  margin: 2px;
  padding: 2px;
}

.p-2{  
  float:right;  
  color:white;
  left:30%;
  text-align: left;
  margin: 2px;
  padding: 2px;
  margin-left: -300px;
  right:300px
}

img {
  max-width: 400px;
  max-height: 400px;
} */
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

.trailer-button {
  position: relative;
  bottom: 20px;
  left: 150px;
  font-family: "Poppins", sans-serif;
  margin: auto 0;
  padding: 3px 30px;
  font-size: 20px;
  background: #0f0f0f;
  color: white;
  outline: none;
  border: 1px solid #333;
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

.dates-list {
  width: 100%;
  height: 400px;
  border: 1px solid orange;
}

.viewing {
  cursor: pointer;
  height: 5em;
  width: 10em;
  border: solid orange;
  margin: 2px;
  float: left;
}

.viewing:hover {
  background: rgba(255, 255, 255, 0.308);
}
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
</style>