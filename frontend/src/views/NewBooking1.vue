<template>
  <div class="container">
    <div class="title">
      <h1>{{ viewing.movie }}</h1>
      <p>{{ viewing.date }}  |  {{ viewing.time }}</p>
      <h2>Antal platser</h2>
    </div>
    <div class="selection" v-for="ageGroup of agePrice" :key="ageGroup">
      <div class="age">
        <h2>{{ ageGroup.label }}</h2>
        <h6>{{ ageGroup.price }}kr/st</h6>
      </div>
      <div class="buttons">
        <button @click="remove(ageGroup.price, ageGroup), counter--">-</button>
        <h1>{{ ageGroup.counter }}</h1>
        <button @click="add(ageGroup.price, ageGroup), counter++">+</button>
      </div>
    </div>
    <div class="totalt-pris">
      <h6>totalt:</h6>
      <div class="price-pill"><h4>{{ sum }}kr/st</h4></div>
    </div>
    <div class="submit-exit">
      <router-link :to="{ name: 'Bokning2', params: { id: viewing.id } }" class="router-link">
        <button class="vidare" v-on:click="addBookingInfo()"><h1>Vidare</h1></button>
      </router-link>
      <router-link :to="'/'">
      <button class="avsluta" v-on:click="resetBookingInfo()"><h3>Avsluta</h3></button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      counter: 0,
      sum: 0,
      agePrice: {
        Adult: { label: "Vuxen", price: 125, counter: 0 },
        Child: { label: "Barn", price: 75, counter: 0 },
        Senior: { label: "Pensionär", price: 100, counter: 0 }
      }
    }
  },
  computed: {
    viewing() {
    return this.$store.state.allViewings.filter((v) => v.id === this.id)[0]
    }
  },
  methods: {
    add(price, ageGroup) {
      this.sum += price
      console.log(ageGroup)
      ageGroup.counter += 1
    },
    remove(price, ageGroup) {
      if(ageGroup.counter == 0) {
        return
      }
      this.sum -= price
      ageGroup.counter -= 1;   
    },
    addBookingInfo() {
      this.$store.commit('setBookingPrice', this.sum)
      this.$store.commit('setNrOfSeats', this.counter)
    },
    resetBookingInfo() {
      this.$store.commit('setBookingPrice', 0)
      this.$store.commit('setNrOfSeats', 0)
    }
  }
}
</script>

<style scoped>
  
  .container {
    width: 50%;
    margin: 0 auto;
    border: 1px solid black;
    margin-top: 100px;
  }

  .selection {
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
  }

  .vuxen, .barn, .pensionär {
    border: 1px solid green;
  }

  .totalt-pris {
    border: 1px solid orange;
  }

  .buttons {
    border: 1px solid purple;
    display: flex;
    margin: auto 0;
    align-items: center;
  }

  .buttons > button {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    outline: none;
    border: 1px solid rgba(238, 238, 238, 0.1);
    text-align: center;
    margin: 0 20px 0 20px;
    background: #0f0f0f;
    color: white;
  }

  .buttons > button:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  .vuxen, .barn, .pensionär {
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

  .price-pill {
    display: inline-block;
    padding: 2px 4px 2px 4px;
    border: 1px solid #eee;
    border-radius: 15px;
    text-align: center;
    margin: 5px 0 5px 0;
  }

  .submit-exit > button {
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

  .submit-exit > button:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  .vidare {
    width: 400px;
  }

  .avsluta {
    width: 100px;
  }
  
</style>