<template>
  <div class="container">
    <div class="component-title">
      <h1>Just nu</h1>
      <router-link class="more" :to="'/films'">
        <p>mer...</p>
      </router-link>
    </div>
    <div class="movie-list">
      <div v-for="movie in movies" :key="movie.id" class="movie">
        <router-link :to="'/movieshow/details/' + movie.id">
          <img :src="movie.poster" alt="" />
        </router-link>
        <div class="movie-details">
          <h6>{{ movie.title }} | {{ movie.runtime }} | {{ movie.rated }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    movies() {
      return this.$store.state.movie;
    },
  },
};
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
  opacity: 0.9;
}

img {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  max-height: 400px;
}

.movie-details {
  background: #333;
  color: white;
  position: relative;
  bottom: 10px;
  padding: 5px 5px 0 8px;
  height: 20px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.component-title {
  display: flex;
  justify-content: space-between;
  color: white;
  position: relative;
  top: 15px;
  padding: 10px;
}

.component-title p {
  position: relative;
  top: 25px;
  right: 10px;
  color: white;
}

.more {
  text-decoration: none;
  color: white;
}

.component-title p:hover {
  opacity: 0.5;
}
</style>