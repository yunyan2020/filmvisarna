<template>


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
}
</script>

<style scoped>
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