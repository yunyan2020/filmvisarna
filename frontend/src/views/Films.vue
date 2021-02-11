<template>
  <div class="container">
    <h1 class="page-title">Aktuella filmer</h1>
    <div class="movies">
      <div class="movie" v-for="m of movie" :key="m.id">   
          <router-link :to="'/movieshow/details/' + m.id">               
            <div class="poster">
              <img :src="m.poster" alt="" />
            </div>           
          </router-link>              
          <div class="vertical-line" />
          <div class="movie-details">
            <h1 class="movie-title">{{ m.title }}</h1>
            <h4>{{ m.genre }}</h4>
            <h5 class="break">
              <i class="fas fa-video"></i> {{ m.runtime }} | {{ m.year }} |
              {{ m.rated }}
            </h5>
            <h6 class="fade">Skådespelare:</h6>
            <p>{{ m.actors.join(", ") }}</p>
            <h6 class="fade">Språk | Översättning</h6>
            <p>{{ m.language }} | {{ m.subtitles }}</p>
          </div> 
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
.fade {
  opacity: 0.5;
}

.break {
  margin-bottom: 5px;
}

.vertical-line {
  position: relative;
  top: 8px;
  width: 1px;
  height: 95%;
  background: rgba(255, 255, 255, 0.178);
  margin-right: 10px;
}

.container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
}

.page-title {
  margin: 17px;
}

.movies {
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 255px;
  grid-gap: 1em;
}

.movie {
  border: 1px solid #333;
  display: flex;
  border-radius: 8px;
  box-shadow: 0 0 10px 2px black;
}

img:hover {
  opacity: 0.7;
  cursor: pointer;
}

.poster > img {
  width: 200px;
  height: 100%;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  margin-right: 7px;
}

.poster {
  height: 100%;
}

.movie-details {
  margin: 5px auto 0 0;
}

.links {
  margin:0;
  position: relative;
  top: 25px;
}

.trailer-txt-btn {
  font-size: 12px;
}

.fab {
  font-size: 12px;
  margin-right: 20px;
  cursor: pointer;
}
.fas {
  margin-right: 5px;
}
</style>