<template> 
  <!-- <div class="movie-head">
    <h1 class="title">{{ movie.title }}</h1>   
    <h3 class = "genre">{{ movie.genre }}</h3> 
    <h4 class="subtitle"> 
      <p class="subtitle-tag">        
        {{ movie.runtime }}|{{ movie.year }}
      </p>
    </h4>
  </div>  
  <div class = "wrap">
    <div class="ticket-page"> 
      <p> This position for ticket information This position for ticket information</p> 
    </div>
    <div class="movie-detail">
      <div class="trailer">
        <iframe
          frameborder="0"
          allowFullScreen
          autoplay
          height="350"
          :src="'https://www.youtube.com/embed/'+movie.youtubeTrailers"
          style="width: 100%; min-width: 300px"
        />
      </div>  
      <div class="col movie-info">
        <div class="col p-0">
          <strong>Tal<strong> 
          <p> {{ movie.language }} </p> 
        </div> 
        <div class="col p-1">
          <strong>Text<strong>
          <p> {{ movie.subtitles }}</p> 
        </div>
        <div class="col p-2">
          <strong>Längd<strong>
          <p> {{ movie.runtime }}</p> 
        </div>
      </div>
      <div class="intro">        
        <hr/>
        <div class="item-detail">Direktör:
          <div class="item-name">
            <span>  {{ movie.director }}</span>
        </div>    
        <div class="item-detail">Skådespelare：
          <div class="item-name">
           <span 
              v-for="actor in movie.actors"
              v-bind:key="actor.id"
              class="movie"
              >{{ actor }}、
            </span>...
          </div>      
        </div>  
        <div class="intro_text">{{ movie.plot }}</div>
        <p> Dela</p>         
        <a href = "mailto:?subject=Jag vill tipsa dig om filmen" class='mailTo'>✉
        </a>  
      </div>
    </div> 
  </div>  --> 
  <div class="container">
    <div class="scene-image">
    <img :src="movie.movieScene" alt="" class="scene">
    </div>
    <div class="movie">
      <div class="poster">
        <img :src="movie.poster" alt="" class="movie-poster">
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
        <h5>Regi: </h5>
        <h3> {{ movie.director }}</h3>
        <h5>Skådespelare: </h5>
        <h3>{{ movie.actors.join(' - ') }}</h3>
        <h5>Språk: </h5>
        <h3>{{ movie.language }}</h3>
        <h5>Premiär: </h5>
        <h3>{{ movie.year }}</h3>
      </div>  
    </div>
    <div class="dates-list">
      <div  v-for="view in sortViewings()" :key="view.date">
      {{ view.date }}
      </div>
      <!-- <div class="header">
        <div class="back">
          <i class="fas fa-chevron-left"></i>
        </div>
        <h1>25/1</h1>
        <div class="forward">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div> -->
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      times: [],
      today: ""
    }
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
      return this.$store.state.allViewings.filter((viewing) => viewing.movie === this.movie.title)
    }
  },
  methods: {
    sortViewings() {
      this.viewings.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0))
      return this.viewings
    },
    setTodaysDate() {
      // Setting the dates for today
      let tday = new Date();
      this.today = tday.toJSON().slice(5, 10).replace(/-/g, "");
    },
  },
  mounted() {
    this.setTodaysDate()
  }
}
</script>

<style scoped>
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
</style>