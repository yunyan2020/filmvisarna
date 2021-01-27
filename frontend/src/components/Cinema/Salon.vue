<template>
  <div class="dropdown">
    <label for="selectSalon">Välja Salongen</label>
    <select v-model="selected" name="salons" @change="onChange($event)">
      <option
        v-for="option in options"
        v-bind:value="option.value"
        :key="option"
        name="salons"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
  <div class="scene">
    <div class="display">scene</div>
  </div>
  <div class="seats">
    <div v-if="bigSalon">
      <u>Stora Salongen</u>
      <div v-for="row in x[0].seatsPerRow" :key="row" class="row">
        <div v-for="seat in row" :key="seat" class="seat"></div>
      </div>
      <p>{{ x[0].name }} har {{ x[0].seats }} plats</p>
    </div>
    <div v-else>
      <u>Lilla Salongen</u>
      <div v-for="row in y[0].seatsPerRow" :key="row" class="row">
        <div v-for="seat in row" :key="seat" class="seat"></div>
      </div>
    </div>
    <p>{{ y[0].name }} har {{ y[0].seats }} plats</p>
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
      ],
      y: [
        {
          name: "Lilla Salongen",
          seats: 56,
          seatsPerRow: [6, 8, 9, 10, 10, 12],
        },
      ],
      selected: "big",
      options: [
        { text: "Stora", value: "big" },
        { text: "Lilla", value: "small" },
      ],
    };
  },
  methods: {
    onChange(event) {
      if (event.target.value == "big") {
        let bigSalon = true;
        console.log('bigSalon',bigSalon);
      }
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
.dropdown {
  color: chocolate;
  margin: 2px;
}
.scene {
  display: flex;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.row {
  display: flex;
  justify-content: center;
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
  background-color: whitesmoke;
  color: black;
  bottom: 5px;
  margin: 2em;
  width: 50%;
  border-top-width: 50%;
  border-bottom-width: 30%;
  height: 60px;
  display: flex;
  justify-content: center;
  box-shadow: 0 5px 5px #333;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;
  /* clip-path: polygon(0 0, 100% 0%, 91% 100%, 10% 100%); */
}
</style>