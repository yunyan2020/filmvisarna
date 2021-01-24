<template>
  <div>
    <div class="logoBox">
      <img class="logo" src="../assets/logo2.png" />
    </div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/films">Filmer</router-link>
      <router-link to="/biograf">Biograf</router-link>
      <router-link to="/contact">Kontakt</router-link>
      <button @click="toggleLogin">
        <p v-if="isLoggedIn">Hej, {{ getCurrentUserName }}</p>
        <i class="fas fa-user-alt"></i>
        </button>
      <div v-if="showLogin" class="login">
        <Login @close="toggleLogin"> </Login>
      </div>
    </nav>
  </div>
</template>

<script>
import Login from "./Login.vue";

export default {
  components: { Login },
  data() {
    return {
      showLogin: false
    };
  },
  computed: {
    getCurrentUserName() {
      return this.$store.state.currentUser.name
    },
    isLoggedIn() {
      return this.$store.state.currentUser != null
    }
  },
  methods: {
    toggleLogin() {
      this.showLogin = !this.showLogin;
    },
  },
};
</script>

<style scoped>
a, p, button {
  text-decoration: none;
  font-weight: bald;
  padding: 10px;
  padding-left: 25px;
  border: 1px;
  font-size: 20px;
  color: rgb(124, 124, 114);
  float: left;
}

a:hover {
  color: rgba(121, 122, 131, 0.281);
}

.login {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}

nav {
  padding: 35px;
  height: 20px;
  text-align: center;
  border-bottom: 2px solid rgb(99, 96, 96);
  box-shadow: 1px 3px 3px grey;
  background-color: rgb(54, 41, 41);
  padding-left: 170px;
}
.logoBox {
  float: left;
  /*position: fixed;*/
}
.logo {
  width: 50%;
  height: auto;
  padding-bottom: 20px;
}

button {
  border: none;
  background: none;
  cursor: pointer;
  float: right;
}

button:focus{
  outline: none;
  color: rgba(121, 122, 131, 0.281);
 }

 button:hover {
   color: rgba(121, 122, 131, 0.281);
 }

.fa-user-alt {
  font-size: 30px;
}
</style>