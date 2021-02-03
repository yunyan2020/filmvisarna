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
      <p class="helloUser" v-if="isLoggedIn">Hej, {{ getCurrentUserName }}</p>
      <button v-on:click="!isLoggedIn ? toggleLoginPage() : toggleMemberPage()">
        <i class="fas fa-user-alt"></i>
      </button>
      <div v-if="showLogin && !isLoggedIn" class="login">
        <Login @close="toggleLoginPage"> </Login>
      </div>
      <div v-if="showMemberPage && isLoggedIn" class="memberPage">
        <MemberPage @close="toggleMemberPage"></MemberPage>
      </div>
    </nav>
  </div>
</template>

<script>
import Login from "./Login.vue";
import MemberPage from "./MemberPage.vue";
export default {
  components: { Login, MemberPage },
  data() {
    return {
      showLogin: false,
      showMemberPage: false,
    };
  },
  computed: {
    getCurrentUserName() {
      return this.isLoggedIn ? this.$store.state.currentUser.name : "";
    },
    isLoggedIn() {
      return this.$store.state.currentUser != null;
    },
  },
  methods: {
    toggleLoginPage() {
      this.showLogin = !this.showLogin;
      console.log("Show login: ", this.showLogin);
    },
    toggleMemberPage() {
      this.showMemberPage = !this.showMemberPage;
    },
  },
};
</script>

<style scoped>
a,
p,
button {
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

nav {
  padding: 35px;
  height: 30px;
  text-align: center;
  border-bottom: 2px solid rgb(99, 96, 96);
  box-shadow: 1px 3px 3px grey;
  background-color: rgb(54, 41, 41);
  padding-left: 170px;
}

.logoBox {
  float: left;
  text-align: center;
  /*position: fixed;*/
}
.logo {
  width: 50%;
  height: auto;
  padding-bottom: 20px;
}

.helloUser {
  float: right;
  position: absolute;
  right: 4em;
}

button {
  border: none;
  background: none;
  cursor: pointer;
  float: right;
  right: 2em;
  position: absolute;
}

button:focus {
  outline: none;
  color: rgba(121, 122, 131, 0.281);
}

button:hover {
  color: rgba(121, 122, 131, 0.281);
}

.fa-user-alt {
  font-size: 30px;
}

.login,
.memberPage {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10 !important;
}
</style>