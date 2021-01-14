<template>
  <div class="rootElement">
    <h1>Home page ></h1>
    <div v-for="item of movie" :key="item.id">
      <router-link :to="'/details/' + item.id">
        <p>{{ item.title }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {};
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