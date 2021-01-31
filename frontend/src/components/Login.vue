<template>
  <div class="backdrop" @click.self="closeBox">
    <div class="container">
      <form @submit.prevent="handleSubmit">
        <label>
          E-MAIL:
          <input v-model="email" type="email" required maxlength="100"/>
        </label>
        <label>
          LÖSENORD:
          <input v-model="password" type="password" required />
          <div v-if="tempError" class="error">{{ tempError }}</div>
        </label>
        <div class="buttonContainer">
          <button class="login">LOGGA IN</button>
          <p>...eller...</p>
        </div>
      </form>
      <button @click="toggleSignUp">BLI MEDLEM</button>
    </div>
    <SignUp v-if="showSignUp" />
  </div>
</template>

<script>
import SignUp from "./SignUp.vue";

export default {
  components: { SignUp },
  data() {
    return {
      email: "",
      password: "",
      showSignUp: false,
      tempError: ""
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.currentUser != null
    },
  },
  methods: {
    closeBox() {
      this.$emit("close");
      this.showSignUp = false;
    },
    toggleSignUp() {
      this.showSignUp = !this.showSignUp;
    },
    async handleSubmit() {
      const credentials = {
        email : this.email,
        password: this.password
      }
      await this.$store.dispatch('login', credentials)
      if(!this.isLoggedIn) {
        this.tempError = "Fel uppgifter"
      }
    }
  },
};
</script>

<style scoped>
.backdrop {
  background: rgba(0, 0, 0, 0.342);
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "overlap";
}

.container {
  background: rgb(12, 12, 12);
  color: orange;
  max-width: 35em;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  border-radius: 10px;
  margin: auto;
  padding: 2em;
  grid-area: overlap;
}

input {
  border: none;
  color: white;
  background:  rgb(12, 12, 12);
  border-bottom: solid orange 1px;
  margin: 2em;
  margin-bottom: 0.5em;
  width: 80%;
}

p {
  margin: 2em;
}

button {
  padding: 0.8em;
  color: white;
  font-weight: 700;
  background: rgba(255, 166, 0, 0.644);
  cursor: pointer;
  border-radius: 5px;
  border: none;
  user-select: none;
  letter-spacing: 1px;
}

button:hover{
  background: rgb(255, 166, 0);
}

.login {
  margin-top: 2em;
}

.error {
  color: crimson;
  margin-bottom: 0.5em;
}
</style>