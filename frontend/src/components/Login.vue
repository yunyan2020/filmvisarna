<template>
  <div class="backdrop" @click.self="closeBox">
    <form @submit.prevent>
      <div class="container">
        <label>
          E-MAIL:
          <input v-model="email" type="text" required />
        </label>
        <label>
          PASSWORD:
          <input v-model="password" type="password" required />
        </label>
        <button>LOG IN</button>
        <button>SIGN UP</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    closeBox() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.backdrop {
  background: rgba(0, 0, 0, 0.514);
  width: 100%;
  height: 100%;
}

form {
  position: relative;
  top: 0;
  height: 0%;
}

.container {
  background: white;
  max-width: 35em;
  font-size: 10px;
  font-weight: 700;
  border: solid gray 2px;
  margin: auto;
  padding: 2em;
  position: relative;
  top: 20em;
}

input {
  border: none;
  border-bottom: solid gray 2px;
  margin: 2em;
  width: 80%;
}

button {
  cursor: pointer;
}
</style>