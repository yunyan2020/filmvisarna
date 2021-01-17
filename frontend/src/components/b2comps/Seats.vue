<template>
  <div class="scene">
    <div class="display">scene</div>
  </div>
  <div class="seats">
    <div v-for="row in x[0].seatsPerRow" :key="row" class="row">
      <div v-for="seat in row" :key="seat" class="seat"></div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      x: [
        {
          name: "Stora Salongen",
          seats: 81,
          seatsPerRow: [8, 9, 10, 10, 10, 10, 12, 12],
        },
      ]
    }
  },
};
</script>

<style>
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
  background: #eee;
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
  display:flex;
  justify-content: center;
  box-shadow: 0 5px 5px #333;
  /* clip-path: polygon(0 0, 100% 0%, 91% 100%, 10% 100%); */
}


</style>