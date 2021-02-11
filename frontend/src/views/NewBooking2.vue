<template>
  <div class="container">
    <div class="booking-information" v-if="viewing && screen">
      <p class="label film">Film:</p>
      <h1>{{ viewing.movie }}</h1>
      <p class="label">Datum & Tid:</p>
      <h3>{{ viewing.date }} - {{ viewing.time }}</h3>
      <p class="label topmarg salong">Salong:</p>
      <h4>{{ viewing.screen }}</h4>
      <p class="label topmarg">Pris:</p>
      <h5>{{ price }}kr</h5>

    </div>
    <hr>
    <div class="selection">
      <div class="scene">
        <h6>skärm</h6>
      </div>
      <div class="seats" v-if="viewing && screen">
        <div v-for="(row, rowNum) in screen.seatsPerRow" :key="rowNum" class="row">
          <div v-for="(seat, i) in row" :key="i" :class="{ marked: checkSeat(rowNum, i)}" class="seat" @click="mark(rowNum, i)"></div>
        </div>
      </div>
    </div>
    <div class="submit-exit" v-if="viewing && screen">
      <button class="vidare" v-on:click="addBookingInfo(), row(), seating(), closeComponent()">Vidare</button>
      <div v-if="mustLogin" class="error">{{ mustLogin }}</div>
      <router-link :to="'/'" class="router-link">
        <button class="avsluta">Avsluta</button>
      </router-link>
    </div>
    <div class="whitespace"></div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      mustLogin: "",
      marked: [],
      seatCount: 0,
      seatsDetails: { row: [], seats: [] }
    }
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    customer() {
      return this.$store.state.currentUser
    },
    viewing() {
      return this.$store.state.allViewings.filter((v) => v.id === this.id)[0];
    },
    price() {
      return this.$store.state.booking.price
    },
    nrOfSeats() {
      return this.$store.state.booking.nrOfSeats
    },
    screen() {
      return this.$store.state.screens.filter((s) => s.name === this.viewing.screen)[0]
    },
    isLoggedIn() {
      return this.$store.state.currentUser != null
    }
  },
  methods: {
    addBookingInfo() {
      if(this.isLoggedIn) {
      this.mustLogin = ""
      this.$store.commit('setBookingCustomer', this.customer)
      }
      else {
        this.mustLogin = "Du måste logga in för att fortsätta"
      }
    },
    mark(row, i) {  
      let index = this.marked.findIndex((seat) => {
        return seat.row === row && seat.i === i;
      });

      if (index === -1) {
        if(this.seatCount >= this.nrOfSeats) {
          return
        } else {
          this.marked.push({ row, i });
          this.seatCount++
          this.seatsDetails.row.push(row + 1)
          this.seatsDetails.seats.push(i + 1)
        }
        
      } else {
        this.marked.splice(index, 1);
        this.seatsDetails.row.splice(index, 1)
        this.seatsDetails.seats.splice(index, 1)
        this.seatCount--
      }
    },
    checkSeat(row, i) {
      return this.marked.some((markedSeat) => {
        return markedSeat.row === row && markedSeat.i === i
      })
    },
    row() {
      this.$store.commit('setRow', this.seatsDetails.row)
    },
    seating() {
      this.$store.commit('setSeat', this.seatsDetails.seats)
    },
    closeComponent() {
      if(!this.mustLogin){
      this.$emit("close2");
      }
    }
  }
}
</script>

<style scoped>

.whitespace {
  width: 100%;
  height: 150px;
  background: black;
}

hr {
  opacity: 0.2;
  margin: 10px 0 30px 0;
}

.salong {
  position: relative;
  top: 2px;
}

.topmarg {
  margin-top: 2px;
}

.film {
  position: relative;
  top: 8px;
}

.label {
  font-size: 12px;
  font-weight: 600;
  opacity: 0.5;
}

.marked {
  background: #f7aa0393;
}

.container {
  width: 75%;
  height: 90vh;
  margin: 50px auto;
}

h1 p {
  color: white;
}

.booking-information {
  margin: 5px 0 0 10px;
}

.selection {
  margin-bottom: 40px;
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
  border: 1px solid rgba(51, 51, 51, 0.2);
  width: 60%;
  padding-top: 50px;
  padding-bottom: 30px;
  border-radius: 10px;
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
  width:100%;
}

.submit-exit .router-link {
  margin: 0 auto;
}

.submit-exit > button {
  font-family: "Poppins", sans-serif;
  display: block;
  margin: 0 auto;
  color: white;
  background: black;
  outline: none;
  cursor: pointer;
  border-radius: 15px;
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
  font-size: 25px;
  font-weight: 900;
  padding: 2px;
}

.submit-exit .router-link {
  margin: 0 auto;
}

.router-link button {
  margin: 0 auto;
}

.router-link .avsluta {
  width: 100px;
  font-size: 13px;
  margin-bottom: 15px;
  border-radius: 15px;
  font-weight: 600;
  cursor: pointer;
  background: black;
  color: white;
  border: 1px solid rgba(238, 238, 238, 0.1);
  margin: 0 auto;
  padding: 2px;
}

.router-link .avsluta:hover {
  opacity: 0.5;
}

.error {
  color: crimson;
  margin-bottom: 0.5em;
  
}


</style>