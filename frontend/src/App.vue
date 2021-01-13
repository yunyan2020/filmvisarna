<template>
  <div class="rootElement">
    <button @click="toggleLogin">Login</button>
    <div v-if="showLogin" class="login">
      <Login @close="toggleLogin"> </Login>
    </div>

    <div v-if="showMember">Member pages dropdown..</div>
  </div>
</template>

<script>
import Login from "./components/Login.vue";

export default {
  name: "App",
  data() {
    return {
      showLogin: false,
      showMember: false,
    };
  },
  components: { Login },
  methods: {
    toggleLogin() {
      this.showLogin = !this.showLogin;
      console.log(showLogin);
    },
  },
};
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


