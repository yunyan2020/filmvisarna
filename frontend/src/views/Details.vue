<template>
  <h1>Movie Details Page</h1>
  <h3>Param:{{ id }}</h3>
  <div class="detail-page">
    <img :src="movie.poster" :alt="movie.titile + 'pic'" />
    <div class="movie-details">
      <p>Title:{{ movie.title }}</p>
      <p>Countries:{{ movie.countries }}</p>
      <p>productionYear:{{ movie.year }}</p>
      <p>genre:{{ movie.genre }}</p>
      <p>Plot:{{ movie.plot }}</p>
      <p>direktör:{{ movie.director }}</p>
      <p>Len:{{ movie.runtime }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      //get id from url parameter
      return this.$route.params.id;
    },
  },
  movie() {
    return this.$store.state.movie.filter((p) => p.id == this.id)[0];
  },
};
</script>

<style scoped>
.detail-page {
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
}

img {
  max-width: 400px;
  max-height: 400px;
}
</style>