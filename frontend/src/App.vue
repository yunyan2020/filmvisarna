
<template>
  <div class="rootElement">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue";

export default {
  name: "App",
  components: { Navbar },
  created() {
    this.$store.dispatch("fetchMovie");
    this.$store.dispatch("fetchViewings");
    this.$store.dispatch("whoAmI");
    this.$store.dispatch("fetchScreens");
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.rootElement {
  height: 100%;
  width: 100%;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  box-sizing: border-box;
  background: black;
}
@media only screen and (max-width: 600px){
.grid{
  grid-template-rows: 56px 1fr 45px;
}
}
</style>
