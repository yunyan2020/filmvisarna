<template>
  <div class="container">
    <div class="navlink-booking">
      <h4>Boka</h4>
    </div>
    <div class="navlink-movies">
      <h4>Filmer</h4>
    </div>
    <div class="navlink-home">
      <h3>Biograf</h3>
    </div>
    <div class="navlink-contact">
      <h4>Kontakt</h4>
    </div>
    <div class="navlink-usricon">
      <i class="far fa-user-circle"></i>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

  h3, h4 {
    color: #333;
  }

  h3:hover, h4:hover {
    opacity: .5;
    cursor: pointer;
  }

  .container {
    display: flex;
    justify-content: space-evenly;
  }

  .usricon {
    width:30px;
    height: 30xp;
  }

  .fa-user-circle {
    margin-top: 15px;
    color: #333;
    font-size: 40px;
  }

  .fa-user-circle:hover {
    opacity: .5;
    cursor: pointer;

  }

</style>