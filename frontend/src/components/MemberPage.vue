<template>
  <div class="backdrop" @click.self="closeBox">
    <div class="container">
      <div class="sub-menu">
          <p class="routerLinks" @click="toggleMyBookings">Mina beställningar</p>
          <p class="routerLinks" @click="toggleProfile">Mina uppgifter</p>
        <div @click="logout()">
          <p>Logga ut</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyBookings from "../views/MyBookings.vue";
import MyProfile from "../views/MyProfile.vue";

export default {
  components: { MyBookings, MyProfile },
  data() {
    return {
      showMyBookings: false,
      showMyProfile: false,
      showMemberPage: false
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.currentUser != null;
    },
    hasBookings() {
      return this.$store.state.myBookings != null;
    },
  },
  methods: {
    closeBox() {
      this.$emit("close");
      this.showMemberPage = false;
    },
    toggleMyBookings() {
      this.$router.push("/MyBookings");
    },
    toggleProfile() {
      this.$router.push("/MyProfile");
    },
    logout() {
      fetch("/api/logout");
      this.$store.commit("setCurrentUser", null);
      this.showMyBookings = false;
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.backdrop {
  background: rgba(0, 0, 0, 0.384);
  width: 100%;
  height: 100%;
}

.container {
  background: rgb(34, 34, 34);
  color: orange;
  max-width: 20em;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  border-radius: 10px;
  margin-top: 8em;
  margin-right: 2em;
  padding: 1em;
  top: 2em;
  right: 2em;
  float: right;
}

p {
  margin: 1em;
  cursor: pointer;
}

p:hover {
  color: rgba(255, 166, 0, 0.664);
}

a,
.routerLinks {
  text-decoration: none;
  color: orange;
  text-decoration-line: none;
}
</style>