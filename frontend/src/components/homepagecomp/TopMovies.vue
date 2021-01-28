<template>
  <div class="container">
    <div class="component-title">
      <h1>Topp</h1>
      <router-link class="more" :to="'/films'">
      <p>mer...</p>
      </router-link>
    </div>
    <div class="topmovies-list">
      <div v-for="movie in movies" :key="movie.id" class="movie">
        <router-link :to="'/movieshow/details/' + movie.id">
        <img :src="movie.poster" alt="">
        </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    movies() {
      return this.$store.state.movie.filter((movie) => movie.score > 7);
    },
  },
};
</script>

<style scoped>
h1,
p {
  color: rgb(216, 137, 63);
}

.container {
  margin: 10px;
  padding: 1em;
  border: 1px solid rgba(0, 0, 0, 0.521);
}

.component-title {
  display: flex;
  justify-content: space-between;
}

.topmovies-list {
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

.more {
  text-decoration: none;
}
</style>