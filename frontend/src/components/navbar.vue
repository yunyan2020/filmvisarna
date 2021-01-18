<template>
  <wrapper>
    <div class="logoBox">
      <img class="logo" src="../assets/logo2.png" />
    </div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/films">Filmer</router-link>
      <button @click="toggleLogin">Login</button>
      <div v-if="showLogin" class="login">
        <Login @close="toggleLogin"> </Login>
      </div>
      <div v-if="showMember">Member pages dropdown..</div>
    </nav>
  </wrapper>
</template>

<script>
import Login from "./Login.vue";

export default {
  components: { Login },
  data() {
    return {
      showLogin: false,
      showMember: false,
    };
  },
  methods: {
    toggleLogin() {
      this.showLogin = !this.showLogin;
    },
  },
};
</script>

<style scoped>
a {
  margin-top: 50px;
  text-decoration: none;
  font-weight: bald;
  padding: 20px;
  border: 1px;
  font-size: 20px;
  color: rgb(124, 124, 114);
}

a:hover {
  color: rgba(121, 122, 131, 0.281);
}

.login {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
}

nav {
  padding: 35px;
  height: 30px;
  text-align: center;
  border-bottom: 2px solid rgb(99, 96, 96);
  box-shadow: 1px 3px 3px grey;
  background-color: rgb(54, 41, 41);
}
.logoBox {
  float: left;
  position: absolute;
}
.logo {
  width: 50%;
  height: auto;
  padding-bottom: 20px;
}
</style>