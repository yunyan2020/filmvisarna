<template>
  <div class="backdrop" @click.self="closeBox">
    <div class="container">
      <form @submit.prevent="handleSubmit">
        <label>
          E-MAIL:
          <input v-model="email" type="email" required />
          <div v-if="emailValidation" class="error">{{ emailValidation }}</div>
        </label>
        <label>
          LÖSENORD:
          <input v-model="password" type="password" required />
          <div v-if="passwordValidation" class="error"> {{ passwordValidation }} </div>
        </label>
        <div class="buttonContainer">
          <button>LOGGA IN</button>
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
      emailValidation: "",
      passwordValidation: ""
    };
  },
  computed: {
    getCustomer() {
      // Checks database customerdetails for a matching email address to input email
      return this.$store.state.customers.filter((customer) => customer.email === this.email)[0];
    }
  },
  methods: {
    closeBox() {
      this.$emit("close");
      this.showSignUp = false;
    },
    toggleSignUp() {
      this.showSignUp = !this.showSignUp;
    },
    handleSubmit() {
      if(this.emailCheck())
      {
        console.log(this.passwordCheck() ? "All good!!" : "Wrong password")
      }
    },
    emailCheck() {
      // Checks if the e-mail address is registered in database, sets emailValidation to error message if not found
      this.emailValidation = this.getCustomer ? "" : "E-mail addressen finns inte registrerad"
      // Returns true if it exists, false if not
      return this.emailValidation ? false : true
    },
    passwordCheck() {
      // Checks input password against database saved customer password, sets passwordValidation to error message if not found
      this.passwordValidation = this.getCustomer.password === this.password ? "" : "Fel lösenord"
      // Returns true if passwords matched, false if not
      return this.passwordValidation ? false : true
    }
  },
};
</script>

<style scoped>
.backdrop {
  background: rgba(0, 0, 0, 0.342);
  width: 100%;
  height: 100%;
}

.container {
  background: white;
  color: rgba(128, 128, 128, 0.719);
  max-width: 35em;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  border-radius: 10px;
  margin: auto;
  padding: 2em;
  position: relative;
  top: 20em;
  right: 5em;
  float: right;
}

input {
  border: none;
  border-bottom: solid rgba(128, 128, 128, 0.24) 1px;
  margin: 2em;
  margin-bottom: 0.5em;
  width: 80%;
}

p {
  margin: 2em;
}

button {
  padding: 0.5em;
  color: rgba(128, 128, 128, 0.719);
  cursor: pointer;
  border-radius: 5px;
  border: none;
  user-select: none;
  letter-spacing: 1px;
}

.error {
  color: crimson;
  margin-bottom: 0.5em;
}
</style>