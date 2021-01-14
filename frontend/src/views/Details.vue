<template>
  <h1>Movie Details Page </h1>
  <h3>Param:{{ id }} </h3>

</template>

<script>
export default {
  computed:{
    id() {
      //get id from url parameter
      return this.$route.params.id
    }
  }

}
</script>

<style scoped>

</style>