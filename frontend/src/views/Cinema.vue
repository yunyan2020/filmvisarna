<template>
  <div class="background">
    <div class="titel"></div>
    <div class="secondDiv">
      <Salon />
    </div>
  </div>
</template>

<script>
import Salon from "../components/Salon.vue";
export default {
  components: { Salon },
};
</script>

<style scoped>
.background {
  height: 100vh;
  margin: 5px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  border-radius: 5px;
  background-image: url("../assets/Cinema-Background.png");
  background-size: cover;
}
.titel {
  width: 28%;
  border-radius: 5px;

  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  color: white;
  font-size: 5em;
}

.secondDiv {
  background-color: rgba(34, 34, 34, 0.829);
  width: 60vw;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>