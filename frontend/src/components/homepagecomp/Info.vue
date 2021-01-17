
<template>
  <div class="container">
    <div class="openhrs-details"> 
      <h2>Öppettider</h2>
      <h5>Måndag: 15:00 - 23:30</h5>
      <h5>Tisdag: 15:00 - 23:30</h5>
      <h5>Onsdag: 15:00 - 23:30</h5>
      <h5>Torsdag: 15:00 - 23:30</h5>
      <h5>Fredag: 15:00 - 02:00</h5>
      <h5>Lördag: 15:00 - 02:00</h5>
      <h5>Söndag: 15:00 - 02:00</h5>
    </div>
    <div class="salon-details">
      <h2>Biograf</h2>
      <div class="adress">
        <h3>Adress:</h3>
        <h5>Malmövägen 26H, Malmö 23341</h5>
      </div>
      <h3>Salonger</h3>
      <div class="stora-salongen">
        <h4><span class="salon-pill">Stora Salongen</span></h4>
      </div>
      <div class="lilla-salongen">
        <h4><span class="salon-pill">Lilla Salongen</span></h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  
  h2, h3, h4, h5, h6 {
    color: black;
  }

  .container {
    display: flex;
    justify-content: space-evenly;
    margin: 1em;
    padding: 1em;
    border: 1px solid #333;

  }

  .openhrs-details {
    border: 1px solid #333;
    border-radius: 8px;
    width: 25%;
    padding: 10px;
  }

  .salon-details {
    border: 1px solid #333;
    border-radius: 8px;
    padding: 10px;
    width: 25%;
  }

  .salon-pill {
    border: 1px solid #333;
    border-radius: 20px;
    padding: 4px 8px;
  }

  

</style>