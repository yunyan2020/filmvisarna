<template>
  <div class="container">
    <div class="title">
      <h1>Antal platser</h1>
    </div>
    <!-- <div class="selection">
      <div class="vuxen">
        <div class="agegroup">
          <h2>Vuxen</h2>
          <h6>125kr/st</h6>
        </div>
        <div class="buttons">
          <button><h1>-</h1></button>
          <h1 class="counter">{{ counter }}</h1>
          <button><h1>+</h1></button>
        </div>
      </div>
      <div class="barn">
        <div class="agegroup">
          <h2>Barn</h2>
          <h6>75kr/st</h6>
        </div>
        <div class="buttons">
          <button><h1>-</h1></button>
          <h1 class="counter">{{ counter }}</h1>
          <button><h1>+</h1></button>
        </div>
      </div>
      <div class="pensionär">
        <div class="agegroup">
          <h2>Pensionär</h2>
          <h6>100kr/st</h6>
        </div>
        <div class="buttons">
          <button><h1>-</h1></button>
          <h1 class="counter">{{ counter }}</h1>
          <button><h1>+</h1></button>
        </div>
      </div>
    </div> -->
    <div class="selection" v-for="ageGroup of agePrice" :key="ageGroup">
      <div class="age">
        <h2>{{ ageGroup.label }}</h2>
        <h6>{{ ageGroup.price }}kr/st</h6>
      </div>
      <div class="buttons">
        <button @click="remove(ageGroup.price, ageGroup)">-</button>
        <h1>{{ ageGroup.counter }}</h1>
        <button @click="add(ageGroup.price, ageGroup)">+</button>
      </div>
    </div>
    <div class="totalt-pris">
      <h6>totalt:</h6>
      <div class="price-pill"><h4>{{ sum }}kr/st</h4></div>
    </div>
    <div class="submit-exit">
      <router-link :to="'/bokning2'" class="router-link">
        <button class="vidare"><h1>Vidare</h1></button>
      </router-link>
      <button class="avsluta"><h3>Avsluta</h3></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      sum: 0,
      /* agePrice: [
        { agegroup: "Vuxen", price: 125},
        { ageGroup: "Barn", price: 75},
        { ageGroup: "Pensionär", price: 100}
      ], */
      agePrice: {
        Adult: { label: "Vuxen", price: 125, counter: 0 },
        Child: { label: "Barn", price: 75, counter: 0 },
        Senior: { label: "Pensionär", price: 100, counter: 0 }
      }
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