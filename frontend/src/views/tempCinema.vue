<template>
  <div class="background">
    <div class="firstDiv">
      <h1>Biograf</h1>
    </div>
    <div class="secondDiv">
      <Salon/>
    </div>
    <div class="thirdDiv">
      <h1>Third Div</h1>
    </div>
  </div>
</template>

<script>
//import Seats from "../components/b2comps/Seats.vue";
import Salon from "../components/Cinema/Salon.vue";
export default {
  components:{Salon}
};
</script>

<style scoped>
.background {
  background-color: rgb(173, 173, 173);
  border: 1px solid black;
  height: 100vh;
  margin: 10px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  position: relative;
}

.firstDiv {
  margin: 50px;
}
.secondDiv,
.thirdDiv {
  background-color: rgb(173, 173, 173);
  border: 1px solid black;
  margin: 19px;
  width: 900px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  float: left;
}

h1 {
  color: rgb(228, 228, 228);
  margin: 10px;
  font-family: sans-serif;
}
</style>