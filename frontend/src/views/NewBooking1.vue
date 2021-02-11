<template>
  <div class="container">
    <div class="title" v-if="viewing && screen">
      <p class="description-p film-p">Film:</p>
      <h1 class="movie-title">{{ viewing.movie }}</h1>
      <p class="description-p date-p">Datum & Tid</p>
      <h4>{{ viewing.date }} | {{ viewing.time }}</h4>
      <p class="description-p">Salong:</p>
      <h3>{{screen.name}}</h3>
      <hr>
      <h2 class="antal-platser">Antal platser</h2>
    </div>
    <div class="selection" v-for="ageGroup of agePrice" :key="ageGroup">
      <div class="age">
        <h2>{{ ageGroup.label }}</h2>
        <h6>{{ ageGroup.price }}kr/st</h6>
      </div>
      <div class="buttons">
        <button @click="remove(ageGroup.price, ageGroup)">-</button>
        <h1 class="counter">{{ ageGroup.counter }}</h1>
        <button v-if="viewing && screen" :disabled="!anySeatsLeft()" @click="add(ageGroup.price, ageGroup)">+</button>
      </div>
    </div>
    <div  class="error" v-if="!anySeatsLeft() && viewing && screen">Inga platser kvar</div>
    <div class="totalt-pris">
      <h6 class="sum">totalt:</h6>
      <div class="price-pill">
        <h4>{{ sum }}kr/st</h4>
      </div>
    </div>
    <div class="submit-exit">
      <div v-if="counter">
        <button
          v-if="counter"
          class="vidare"
          v-on:click="addBookingInfo(), bookingDetails(), closeComponent()"
        >
          Vidare
        </button>
      </div>
      <router-link :to="'/'" class="router-avsluta">
        <button class="avsluta">Avsluta</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      sum: 0,
      agePrice: {
        Adult: { label: "Vuxen", price: 125, counter: 0 },
        Child: { label: "Barn", price: 75, counter: 0 },
        Senior: { label: "Pensionär", price: 100, counter: 0 },
      },
      errorMessage: "",
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    viewing() {
      return this.$store.state.allViewings.filter((v) => v.id === this.id)[0];
    },
    screen() {
      return this.$store.state.screens.filter((s) => s.name === this.viewing.screen)[0]
    },
  },
  methods: {
    add(price, ageGroup) {
      this.sum += price;
      ageGroup.counter += 1;
      this.counter += 1;

    },
    remove(price, ageGroup) {
      if (ageGroup.counter == 0) {
        return;
      }
      this.sum -= price;
      ageGroup.counter -= 1;
      this.counter--;

    },
    addBookingInfo() {
      this.$store.commit("setBookingPrice", this.sum);
      this.$store.commit("setNrOfSeats", this.counter);
      this.$store.commit("setBookingViewing", this.viewing);
    },
    bookingDetails() {
      this.$store.commit("setBookingDetails", this.agePrice);
    },
    closeComponent() {
      this.$emit("close1");
    },
    anySeatsLeft() {
      // Returns true if there are seats left, false if not
      if (this.viewing && this.screen){
      return this.viewing.seatsTaken + this.counter < this.screen.seats ? true : false}
    }
  },
};
</script>

<style scoped>

hr {
  opacity: 0.4;
}

.router-avsluta {
  text-decoration: none;
}

.date-p {
  position: relative;
  bottom: 2px;
}

.film-p {
  position: relative;
  top: 10px;
}

.antal-platser {
  margin: 30px 0 10px 0;
}

.container {
  width: 45%;
  margin: 0 auto;
  margin: auto;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  margin-top: 8em;
}
.title {
  border-bottom: 1px solid rgba(51, 51, 51, 0.3);
}
.selection {
  border-bottom: 1px solid #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  height: 100px;
}

.vuxen,
.barn,
.pensionär {
  border: 1px solid green;
}


.buttons {
  display: flex;
  margin: auto 0;
  align-items: center;
  user-select: none;
}

.buttons > button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  outline: none;
  border: 1px solid #333;
  text-align: center;
  font-size: 30px;
  font-weight: 900;
  margin: 0 20px 0 20px;
  background: black;
  color: white;
}

.buttons > button:hover {
  background: #3d3d3d;
  cursor: pointer;
}

.vuxen,
.barn,
.pensionär {
  display: flex;
  justify-content: space-between;
  height: 100px;
}

.agegroup {
  margin: auto 0;
}

.counter {
  margin: auto 0;
}

.sum {
  position: relative;
  top: 5px;
  left: 3px;
  margin-bottom: 3px;
}

.price-pill {
  display: inline-block;
  padding: 2px 4px 2px 4px;
  border: 1px solid rgba(238, 238, 238, 0.288);
  border-radius: 15px;
  text-align: center;
  margin: 5px 0 5px 0;
}

.submit-exit button {
  font-family: "Poppins", sans-serif;
  display: block;
  margin: 0 auto;
  background: black;
  color: white;
  outline: none;
  border-radius: 15px;
  border: 1px solid rgba(238, 238, 238, 0.1);
  margin-top: 20px;
}

.submit-exit .vidare {
  width: 200px;
  height: 40px;
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: 900;
  margin-top: 20px;
}

.submit-exit .avsluta {
  width: 100px;
  font-size: 13px;
  margin-bottom: 15px;
  font-weight: 600;
  outline: none;
}

.router-link > button {
  font-family: "Poppins", sans-serif;
  display: block;
  margin: 0 auto;
  color: #eee;
  background: #0f0f0f;
  outline: none;
  border-radius: 8px;
  border: 1px solid rgba(238, 238, 238, 0.1);
  margin-top: 20px;
}

.submit-exit button:hover {
  opacity: 0.5;
  cursor: pointer;
}

.error {
  color: crimson;
  margin-bottom: 0.5em;
  font-size: 15px;
}

.description-p {
  font-size: 12px;
  font-weight: 600;
  opacity: 0.5;
}

.movie-title {
  position: relative;
  top: 4px;
}
</style>