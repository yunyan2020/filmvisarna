<template>
  <div class="grid-container">
    <div class="grid-item grid-item-1">
      <p><b>Tel.nr:</b> 0123456789</p>
      <br />
      <p><b>Emial:</b> Snälla.maila@intehit.com</p>
      <br />
      <p><b>Adress:</b> Skogen</p>

      <p></p>
    </div>
    <!--<div class="grid-item grid-item-2">
      <p></p>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.grid-container {
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 15px;
  grid-auto-rows: minmax(100px, auto);
  padding: 10em;
}
.grid-item {
  border: 3px solid rgb(141, 141, 141);
  text-align: left;
  padding: 5px;
  font-family: "Courier New", Courier, monospace;
  font-size: 2em;
}
.grid-item-1 {
  background-color: #eee;
}
.grid-item-2 {
  background-color: #eee;
}
</style>