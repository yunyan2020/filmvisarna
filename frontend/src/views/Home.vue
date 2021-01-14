<template>
  <h1>Home page ></h1>
  <div v-for="item of movie" :key="item.id">
    <router-link :to="'/details/' + item.id">
      <img v-bind:src="'./img/' + item.images" />
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: 'image.jpg',
    };
  },
  computed: {
    movie() {
      return this.$store.state.movie;
    },
  },
};
</script>

<style scoped>
img {
  max-width: 300px;
}
</style>