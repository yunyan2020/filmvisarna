<template>
  <div class="container">
    <div class="booking-information" v-if="viewing && screen">
      <h1>{{ viewing.movie }}</h1>
      <h3>{{ viewing.date }} - {{ viewing.time }}</h3>
      <h4>{{ viewing.screen }}</h4>
      <p>{{ price }}kr</p>
      <!-- <p>{{ viewing.date }} {{ viewing.time }} {{ price }}SEK</p> -->
    </div>
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
      <router-link :to="'/'">
      <button class="avsluta">Avsluta</button>
      </router-link>
      <!-- <router-link :to="{ name: 'Bokning3', params: { id: viewing.id } }">
        <button class="vidare">Vidare</button>
      </router-link>  
      <div v-if="mustLogin" class="error">{{ mustLogin }}</div>
      <router-link :to="'/'">
        <button class="avsluta" v-on:click="resetBookingInfo()">Avsluta</button>
      </router-link> -->
    </div>
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
    return this.$store.state.booking.viewing
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
      console.log("index: " + i)
      console.log("row length: " + row)
      console.log(this.nrOfSeats);
      
      /* if(this.seatCount >= this.seatAmount) {
        return
      } else {
        this.marked.push({row, i})
        this.seatCount++
      } */
      
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
          console.log(this.seatsDetails)
          console.log("seatCount: " + this.seatCount);
        }
        
      } else {
        this.marked.splice(index, 1);
        this.seatsDetails.row.splice(index, 1)
        this.seatsDetails.seats.splice(index, 1)
        this.seatCount--
      }

      /* this.marked.push({row, i})
      console.log(this.seatAmount); */
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

.marked {
  background: #f7aa0393;
}

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
  opacity: 0.5;
  margin: 5px 0 0 10px;
}

.booking-information > h4{
  padding: 2px 4px;
  border-radius: 8px;
  border: 1px solid whitesmoke;
  display: inline-block;
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

.error {
  color: crimson;
  margin-bottom: 0.5em;
}

</style>