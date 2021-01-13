<template>
  <div>
    <form>
       <label>
          E-MAIL:
          <input v-model="email" type="text" required />
        </label>
        <label>
          PASSWORD:
          <input v-model="password" type="password" required />
        </label>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

form {
  background: white;
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
  cursor: pointer;
  margin: 2em;
}
</style>