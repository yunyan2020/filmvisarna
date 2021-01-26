<template>
  <!-- <div class="rootElement">
    <h1>Aktuella Filmer</h1>
    <div class="container">
      <div class="movie-list" v-for="item of movie" :key="item.id">
        <router-link :to="'/movieshow/details/' + item.id">
          <div class="movie-details">
            <img :src="item.poster" alt="" />
            <h3 class="movie-name">{{ item.title }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div> -->
  <div class="container">
    <h1 class="page-title">Aktuella filmer</h1>
    <div class="movies">
      <div class="movie" v-for="m of movie" :key="m">
        <div class="poster">
          <img :src="m.poster" alt="">
        </div>
        <div class="vertical-line" />
        <div class="movie-details">
          <h1 class="movie-title">{{ m.title }}</h1>
          <h4>{{ m.genre }}</h4>
          <h5 class="break"> <i class="fas fa-video"></i> {{ m.runtime }} | {{ m.year }} | {{ m.rated }}</h5>
          <h6 class="fade">Skådespelare:</h6>
          <p>{{ m.actors.join(', ')}}</p>
          <h6 class="fade">Språk | Översättning</h6>
          <p>{{ m.language }} | {{ m.subtitles }}</p>
          <div class="links">
            <i class="fab fa-imdb"></i>
            <i class="fab fa-youtube"></i>
          </div>
        </div>
        <i class="fas fa-caret-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    movie() {
      return this.$store.state.movie;
    },
  },
};
</script>

<style scoped>
<<<<<<< HEAD
.container {
  text-align: center;
  display: flex;
  justify-content: space-between;
  width: 95vw;
  height: 95vh;
=======
/* .movie-list {
  padding: 10px;
  float: left;
>>>>>>> fe6c585... movie listing vue update
}

select:focus {
  outline: none;
}

h1,
h3 {
  color: orange;
}

a {
  text-decoration: inherit;
}

img {
<<<<<<< HEAD
  width: 200px;
  margin: 2em 2em 1em 2em;
=======
  max-width: 150px;
  max-height: 100px;
}
img {
  max-width: 300px;
} */

.fa-caret-right {
  margin: auto 0;
  width: 30px;
  font-size: 40px;
  color: white;
  pointer-events: auto;
}

.fade {
  opacity: 0.5;
}

.break {
  margin-bottom: 10px;
}

.vertical-line {
  position: relative;
  top: 8px;
  width: 1px;
  height: 240px;
  background: rgba(255, 255, 255, 0.178);
  margin-right: 10px;
}

.container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #0f0f0f;
  /* border: 1px solid white; */
}

.page-title {
  margin: 17px
}

.movies {
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
}

.movie {
  /* border: 1px solid white; */
  border: 1px solid #333;
  display: flex;
  border-radius: 8px;
  pointer-events: none;
  box-shadow: 0 0 10px 2px black;
}

.movie:hover {
  opacity: 0.7;
}

.poster > img {
  width: 200px;
  height: 250px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  margin-right: 7px;
>>>>>>> fe6c585... movie listing vue update
}

.movie-details {
  margin: 5px auto 0 5px;
}

.links {
  position: relative;
  top: 25px;
}

.fab {
  font-size: 35px;
  margin-right: 20px;
  cursor: pointer;
}

.fa-youtube:hover {
  /* color: #ec0101; */
  color: #FF0000;
}

.fa-imdb:hover {
  color: #f0a500;
}

.fas {
  margin-right: 5px;
}

</style>