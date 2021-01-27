<template>
  <div class="container">
    <div class="booking-information">
      <h1>{{ viewing.movie }}</h1>
      <p>{{ viewing.date }} {{ viewing.time }} {{ price }}SEK</p>
    </div>
    <div class="selection">
      <div class="scene">
        <h6>skärm</h6>
      </div>
      <div class="seats">
        <div v-for="row in salong[0].seatsPerRow" :key="row" class="row">
          <div v-for="seat in row" :key="seat" class="seat"></div>
        </div>
      </div>
    </div>
    <div class="submit-exit">
      <button class="vidare">Vidare</button>
      <button class="avsluta">Avsluta</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      salong: [{ seatsPerRow: [8, 9, 10, 10, 10, 10, 12, 12] }],
    };
  },
  computed: {
    viewing() {
    return this.$store.state.allViewings.filter((v) => v.id === this.id)[0]
    },
    price() {
      return this.$store.state.booking.price;
    },
  },
};
</script>

<style scoped>
.container {
  width: 75%;
  height: 90vh;
  border: 1px solid white;
  margin: 50px auto;
}

h1 p {
  color: white;
}

.booking-information {
  height: 15%;
  border: 1px solid yellow;
}

.selection {
  height: 75%;
  border: 1px solid red;
}

.scene {
  text-align: center;
  margin: 20px auto 10px auto;
  border: 1px solid white;
  background: #eee;
  color: black;
  width: 35%;
  height: 50px;
  box-shadow: 0px 4px 30px 2px rgba(255, 255, 255, 0.397);
}

.seats {
  margin: 50px auto 10px auto;
  border: 1px solid purple;
  width: 60%;
  height: 80%;
  padding-top: 50px;
}

.row {
  display: flex;
  justify-content: center;
  padding: 2px 0 5px 0;
}

.seat {
  width: 2px;
  height: 7px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 1px solid #7e7474;
  margin: 5px;
  padding: 10px;
  cursor: pointer;
}

.seat:hover {
  opacity: 0.5;
}

.submit-exit {
  position: relative;
  bottom: 25px;
}

.submit-exit > button {
  font-family: "Poppins", sans-serif;
  display: block;
  margin: 0 auto;
  color: #eee;
  background: #0f0f0f;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid rgba(238, 238, 238, 0.1);
  padding: 4px 8px 4px 8px;
}

.submit-exit > button:hover {
  opacity: 0.5;
}

.submit-exit > .vidare {
  width: 200px;
  height: 40px;
  margin-bottom: 15px;
  font-size: 20px;
}
</style>