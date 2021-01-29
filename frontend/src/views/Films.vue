<template>
  <div class="rootElement">
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
.container {
  text-align: center;
  display: flex;
  justify-content: space-between;
  width: 95vw;
  height: 95vh;
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
  width: 200px;
  margin: 2em 2em 1em 2em;
}
</style>