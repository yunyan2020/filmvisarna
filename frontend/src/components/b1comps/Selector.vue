<template>
  <div class="selector">
    <div>
      <p>{{ ageGroup }}</p>
      <p> {{ price }} </p>
    </div>

    <div class="buttons">
      <button class="add" @click="add">+</button>
      <p>{{ counter }}</p>
      <button class="remove" @click="remove">-</button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      counter: 0
    }
  },
  props: ['ageGroup', 'price'],
  methods: {
    add() {
      console.log(this.price)
      this.counter++;
      this.$emit('add', this.price)
    },
    remove() {
      this.counter--;
      this.$emit('remove', this.price)
    }
  }
}
</script>

<style scoped>
  .selector {
    position: relative;
    /* padding: 10px; */
    background: #ddd;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
  }

  .buttons {
    display: flex;
    padding: 10px;
  }

  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    border: none;
    font-size: 30px;
  }
</style>