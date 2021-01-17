
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
  },
};
</script>

<style scoped>
.rootElement {
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>


  <Homepage />
</template>

<script>

import Homepage from './views/Homepage.vue'

export default {
  name: 'App',
  components: { Homepage }
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #ddd;
}

#app {
  /* width: 100vw;
  height: 100vh; */
  /* overflow-x: hidden;
  overflow-y: auto; */
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* font-family: 'PT Sans', sans-serif; */
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #eee;
  /* margin-top: 60px; */
}


</style>
