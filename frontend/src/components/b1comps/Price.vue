<template>
  <div class="price-container">
    <h6>total:</h6>
    <div class="price-pill" >
      {{ sum }}
    </div>
  </div>
</template>

<script>

export default {
  props: ['sum'],
  methods: {
    
  }
}
</script>

<style scoped>
  .price-container {
    position: relative;
    background: rgba(0, 0, 0, 0.11);
    width: 100%;
    
  }

  .price-pill {
    background: #eee;
    border-radius: 25px;
    width: 5%;
    padding: 6px 12px;
    font-size: 12px;
  }
</style>