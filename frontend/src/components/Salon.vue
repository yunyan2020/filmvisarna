<template>
  <div>
    <div class="dropdown">
      <label for="selectSalon">Välj Salong </label>
      <select
        v-model="selected"
        name="salons"
        @change="onChange($event)"
        class="select-css"
      >
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
    <div class="salonTitel" v-if="isBigSalon">
      <h1><u>Stora Salongen</u></h1>
    </div>
    <div class="salonTitel" v-else>
      <h1><u>Lilla Salongen</u></h1>
    </div>
    <div class="scene">
      <div class="display"></div>
    </div>

    <div v-if="isBigSalon">
      <div v-for="row in x[0].seatsPerRow" :key="row" class="row">
        <div v-for="seat in row" :key="seat" class="seat"></div>
      </div>
      <p>{{ x[0].name }} har {{ x[0].seats }} platser</p>
    </div>
    <div v-else>
      <div v-for="row in y[0].seatsPerRow" :key="row" class="row">
        <div v-for="seat in row" :key="seat" class="seat"></div>
      </div>
      <p>{{ y[0].name }} har {{ y[0].seats }} platser</p>
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
      isBigSalon: true,
    };
  },
  methods: {
    onChange(event) {
      if (event.target.value == "big") {
        this.isBigSalon = true;
      } else this.isBigSalon = false;
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
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
  padding: 3px;
}

.seat {
  height: 30px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: rgb(187, 187, 187);
  border: 1px solid black;
  margin: 4px;
  padding: 10px;
}

.dropdown {
  padding-top: 5px;
  padding-bottom: 5px;
  color: rgb(221, 221, 221);
  margin: 8px;
  font-size: 20px;
  font-weight: 600;
  text-align: right;
}
.select-css {
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: white;
  padding: 0.6em 1.4em 0.5em 0.8em;
  line-height: 1.3;
  width: 12%;
  max-width: 100%; /* useful when width is set to anything other than 100% */
  box-sizing: border-box;
  margin-right: 5px;
  border: 2px solid rgb(93, 93, 93);
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 3px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: rgb(54, 41, 41);
  background-position: right 0.7em top 50%, 0 0;
  /* icon size, then gradient */
  background-size: 0.65em auto, 100%;
}

.salonTitel {
  color: rgb(124, 124, 114);
  margin: auto;
  padding: 0;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

p {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
  color: rgb(124, 124, 114);
  text-align: center;
}

.display {
  position: relative;
  background-color: rgb(192, 192, 192);
  color: black;
  bottom: 5px;
  margin: 2em;
  width: 50%;
  border-top-width: 50%;
  border-bottom-width: 30%;
  height: 40px;
  display: flex;
  justify-content: center;
  box-shadow: 0 10px 10px rgba(187, 187, 187, 0.452);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;
}
</style>