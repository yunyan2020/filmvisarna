<template>
  <div class="container">
    <h1>Antal platser</h1>
    <Selector v-for="item in ageGroupPrice" :key="item.value" :ageGroup="item.ageGroup" :price="item.price" @add="add($event)" @remove="remove($event)"/>
    <Price :sum="sum"/>
    <Confirm />
  </div>
</template>

<script>
import App from '../App.vue'
import Selector from '../components/b1comps/Selector'
import Price from '../components/b1comps/Price'
import Confirm from '../components/b1comps/Confirm'

export default {
  components: { Selector, Price, Confirm },
  data() {
    return {
      ageGroupPrice: [ 
        { ageGroup: "Adult", price: 125 },
        { ageGroup: "Child", price: 75 },
        { ageGroup: "Senior", price: 100 }
      ],
      sum: 0
    }
  },
  methods: {
    add(price) {
      this.sum += price
    },
    remove(price) {
      this.sum -= price
    }
  }
}
</script>

<style scoped>
  .container {
    position: relative;
    border: 1px solid #eee;
    border-radius: 10px;
  
  }
</style>