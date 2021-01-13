<template>
  <div>
    <form @submit.prevent>
      <label>
        E-MAIL:
        <input v-model="email" type="text" required />
      </label>
      <label>
        NAMN:
        <input v-model="name" type="text" required />
      </label>
      <label>
        LÖSENORD:
        <input v-model="password" type="password" required />
      </label>
      <label>
        BEKRÄFTA LÖSENORD:
        <input v-model="checkPassword" type="text" required />
      </label>
      <button>SPARA</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      name: '',
      password: '',
      checkPassword: ''
    }
  }
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
  border: solid gray 2px;
  border-radius: 10px;
  margin: auto;
  padding: 2em;
  position: relative;
  top: 20em;
  left: 5em;
  float: left;
}

input {
  border: none;
  border-bottom: solid rgba(128, 128, 128, 0.24) 2px;
  margin: 2em;
  width: 80%;
}

button {
  color: rgba(128, 128, 128, 0.719); 
  cursor: pointer;
  border-radius: 5px;
  border: solid rgba(128, 128, 128, 0.24) 1px;
  user-select: none;
}
</style>