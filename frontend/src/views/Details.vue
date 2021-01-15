<template>
  <h1>{{movie.titile}}</h1>
  <div class="detail-page">
    <img :src="movie.poster" :alt="movie.titile + 'pic'" />
    <div class="movie-details">
      <h3>Title:{{ movie.title }}</h3>
      <p>genre:{{ movie.genre }}</p>
      <p>Countries:{{ movie.countries[0] }}</p>
      <p>productionYear:{{ movie.year }}</p>
      <p>Längd {{ movie.runtime }}</p>
      <p>Plot:{{ movie.plot }}</p>
      <p>Direktör:{{ movie.director }}</p>   
      <p>Tal:{{ movie.language }}</p>  
      <p>Text:{{ movie.subtitles }}</p>    
    </div>
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
    movie() {
      return this.$store.state.movie.filter((p) => p.id == this.id)[0];
    },
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