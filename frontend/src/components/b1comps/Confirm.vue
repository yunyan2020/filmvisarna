<template>
  <div class="select-exit">
    <button class="select">Välj platser</button>
    <button class="exit">Avsluta</button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  .select-exit {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  button {
    display: inline-block;
    border-radius: 20px;
    outline: none;
    text-align: center;
    border: none;
    padding: 10px 20px;
  }

  .select {
    font-size: 30px;
  }
</style>