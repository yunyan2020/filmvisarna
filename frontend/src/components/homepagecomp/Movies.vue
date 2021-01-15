<template>
  <!-- <div class="movies">
    <div v-for="movie in movies" :key="movie" class="movie">
      <h1>{{ movie.Title }}</h1>
      <div class="plot">
        <h3>Plot:</h3>
        <p>{{ movie.Plot }}</p>
        <img :src="movie.Poster" alt="">
      </div>
    </div>
  </div> -->

  <!-- <div class="movies">
    <div class="section-title">
      <h1 class="bold">Spelas just nu</h1>
    </div>
    <div v-for="movie in movies" :key="movie" class="movie">
      <img :src="movie.Poster" alt="" class="poster">
      <div class="details">
        <h6 class="title">
          {{ movie.Title }} | {{ movie.Duration }} | {{ movie.Rated }}
        </h6>
      </div>
    </div>
  </div> -->

  <div class="container">
    <div class="component-title">
      <h1>Just nu</h1>
      <p>mer...</p>
    </div>
    <div class="movie-list">
      <div v-for="movie in movies" :key="movie" class="movie">
        <img :src="movie.Poster" alt="">
        <div class="movie-details">
          <h6 class="title">
            {{ movie.Title }} | {{ movie.Duration }} | {{ movie.Rated }}
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moviesjson from '../../../movies.json'

export default {
  data() {
    return {
      movies: moviesjson 
      
    }
  }
  /* ,
  methods: {
    getMovies() {
        fetch('http://www.omdbapi.com/?t=i+am+legend') 
        fetch('./movies.json')
        .then(response => response.json())
        .then(data => { this.movies = data })
    }
  },
  mounted: function () {
    this.getMovies()
  } */
}
</script>

<style scoped>
  /* .movies {
    margin: 10px;
    display: flex;
    gap: 10px;
    justify-content: center;
  }

  .movie {
    width: 15%;
    height: 400px;
    border-radius: 5px;
    background: #eee;
  }

  .movie > h1 {
    padding-left: 10px;
    float: left;
  }

  .plot {
    background: rgba(51, 51, 51, 0.377);
    padding: 10px;
    display: inline-block;
  }

  .plot > h3 {
    float: left;
  }

  .plot > p {
    margin-top: 0;
    display: inline-block;
  }

  img {
    display: block;
    max-width: 200px;
    object-fit: cover;
  } */

  /* second  */
  /* .movies {
    height: 510px;
    display: flex;
    padding: 16px;
  }

  .movie {
    background: #333;
    border-radius: 8px;
    margin: 1rem;
    box-shadow:
       inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
  }

  .movie:hover {
    opacity: 0.9;
  }

  img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  h6 {
    position: relative;
    bottom: 20px;
    left: 5px;
  }

  .section-title {
    background: grey;
    color: black;
    height: 20px;
    width: 400px;
  } */

  /* third */
  .container {
    margin: 10px;
    padding: 1em;
    border: 1px solid rgba(0, 0, 0, 0.521);
  }

  .movie-list {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  .movie {
    border-radius: 8px;
  }

  .movie:hover {
    opacity: .9;
  }

  img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    max-height: 400px;
  }

  .movie-details {
    background: #333;
    position: relative;
    bottom: 32px;
    /* padding-left: 5px; */
    padding: 0 5px 0 5px;
    height: 20px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    /* text-align: center; */
  }

  .component-title {
    display: flex;
    justify-content: space-between;
    color: black;
    position: relative;
    top: 25px;
    padding: 10px;
  } 

  .component-title p {
    position: relative;
    top: 35px;
    right: 10px;
  }

  .component-title p:hover {
    opacity: .5;
  }
</style>