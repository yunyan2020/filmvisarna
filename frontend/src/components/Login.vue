<template>
  <div class="backdrop" @click.self="closeBox">
    <form @submit.prevent>
      <div class="container">
        <label>
          E-MAIL:
          <input v-model="email" type="text" required />
        </label>
        <label>
          LÖSENORD:
          <input v-model="password" type="password" required />
        </label>
        <div class="buttonContainer">
        <button>LOGGA IN</button>
        <p>...eller...</p>
        <button @click="toggleSignUp">BLI MEDLEM</button>
        </div>
      </div>
    </form>
    <SignUp v-if="showSignUp"/>
  </div>
</template>

<script>
import SignUp from './SignUp.vue'

export default {
  components: { SignUp },
  data() {
    return {
      email: '',
      password: '',
      showSignUp: false
    };
  },
  methods: {
    closeBox() {
      this.$emit("close")
      this.showSignUp = false
    },
    toggleSignUp() {
      this.showSignUp = !this.showSignUp
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

form {
  background: white;
  color: rgba(128, 128, 128, 0.719);
  max-width: 35em;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  border: solid gray 2px;
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
  border-bottom: solid rgba(128, 128, 128, 0.24) 2px;
  margin: 2em;
  width: 80%;
}

p {
  margin: 2em;
}

button {
  color: rgba(128, 128, 128, 0.719); 
  cursor: pointer;
  border-radius: 5px;
  border: solid rgba(128, 128, 128, 0.24) 1px;
  user-select: none;
}
</style>