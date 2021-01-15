<template>
  <h1>Movie Details Page</h1>
  <h3>Param:{{ id }}</h3>
  <p>Title:{{ movie.title }}</p>
  <p>Countries:{{ movie.countries }}</p>
  <p>productionYear:{{ movie.year }}</p>
  <p>genre:{{ movie.genre }}</p>
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
</style>