<template>
  <div class="background">
    <div class="firstDiv">
      <h1>Biograf</h1>
    </div>
    <div class="secondDiv">
      <Salon />
    </div>

    <div class="seats"></div>
  </div>
</template>

<script>
//import Seats from "../components/b2comps/Seats.vue";
import Salon from "../components/Cinema/Salon.vue";
export default {
  components: { Salon },
};
</script>

<style scoped>
.background {
  height: 100vh;
  margin: 10px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  position: relative;
  border-radius: 5px;
  background-image: url("../assets/Cinema-Background.png");
  background-size: cover;
}

.firstDiv {
  margin: 50px;
}
.secondDiv {
  background-color: rgba(34, 34, 34, 0.829);
  margin: auto;
  margin-top: 150px;
  width: 50%;
  border-radius: 5px;
}

h1 {
  color: rgb(36, 36, 36);
  margin: 10px;
  font-family: sans-serif;
}
* {
  box-sizing: border-box;
}

.scene {
  display: flex;
  justify-content: center;
}

.row {
  display: flex;
  justify-content: center;
  background: rgb(173, 173, 173);
  padding: 5px;
}

.seat {
  width: 15px;
  height: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #eee;
  border: 1px solid black;
  margin: 5px;
  padding: 10px;
}

.seat:hover {
  background: rgba(51, 51, 51, 0.534);
}

/* .click {
  background: rgba(0, 128, 0, 0.767);
} */

.display {
  border: 1px solid black;
  position: relative;
  bottom: 20px;
  margin: 5em;
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: center;
  box-shadow: 0 5px 5px #333;
  /* clip-path: polygon(0 0, 100% 0%, 91% 100%, 10% 100%); */
}
</style>