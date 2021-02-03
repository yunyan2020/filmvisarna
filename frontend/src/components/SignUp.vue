<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <label>
        E-MAIL:
        <input v-model="email" type="email" maxlength="100" required />
        <div v-if="tempError" class="error">{{ tempError }}</div>
      </label>
      <label>
        NAMN:
        <input v-model="name" type="text" required maxlength="25"/>
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
    },
  },
  methods: {
    async handleSubmit() {
      if (this.passwordChecks()) {
        const credentials = {
          email: this.email,
          password: this.password,
          name: this.name,
        };
        await this.$store.dispatch("register", credentials);
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

.error {
  color: crimson;
  margin-bottom: 0.5em;
}
</style>