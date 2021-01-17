
<template>
  <div class="rootElement">
    <div v-if="showMember">Member pages dropdown..</div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue";

export default {
  name: "App",
  data() {
    return {
      showMember: false,
    };
  },
  components: { Navbar },
        created() {
    this.$store.dispatch("fetchMovie");
  },
}
</script>

<style scoped>
.rootElement,
.login {
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>


