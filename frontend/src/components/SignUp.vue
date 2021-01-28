<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>
        E-MAIL:
        <input v-model="email" type="email" required />
        <div v-if="tempError" class="error">{{ tempError }}</div>
      </label>
      <label>
        NAMN:
        <input v-model="name" type="text" required />
      </label>
      <label>
        LÖSENORD:
        <input v-model="password" type="password" required />
        <div v-if="passwordLength" class="error">{{ passwordLength }}</div>
      </label>
      <label>
        BEKRÄFTA LÖSENORD:
        <input v-model="validatePassword" type="password" required />
        <div v-if="passwordValidation" class="error">
          {{ passwordValidation }}
        </div>
        <p v-if="userSaved" class="saved">{{ userSaved }}</p>
      </label>
      <button v-if="!userSaved">SPARA</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      name: "",
      password: "",
      validatePassword: "",
      passwordLength: "",
      passwordValidation: "",
      tempError: "",
      userSaved: "",
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.currentUser != null
    }
  },
  methods: {
    handleSubmit() {
      if (this.passwordChecks()) {
        const credentials = {
          email: this.email,
          password: this.password,
          name: this.name,
        };
        this.$store.dispatch("register", credentials);
        if(!this.$store.state.currentUser) {
        this.tempError = "Email adressen finns redan registrerad"
        }
      }
    },
    passwordChecks() {
      this.passwordLength =
        this.password.length < 6
          ? "Ditt lösenord måste innehålla minst 6 tecken"
          : "";
      this.passwordValidation =
        this.password === this.validatePassword
          ? ""
          : "Dina lösenord matchar inte";

      // If password length is over 6 and it matches password validation, passwordChecks() returns true, else false
      return !this.passwordLength && !this.passwordValidation ? true : false;
    },
  },
};
</script>

<style scoped>
form {
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
  left: 30em;
  float: left;
}

input {
  border: none;
  border-bottom: solid rgba(128, 128, 128, 0.24) 1px;
  margin: 2em;
  margin-bottom: 0.5em;
  width: 80%;
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

.saved {
  color: rgb(125, 207, 173);
  margin-top: 1em;
  font-size: 20px;
}
</style>