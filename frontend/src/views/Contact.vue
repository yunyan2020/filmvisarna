<template>
  <div class="grid-container">
    <div class="title"><b>kontakt</b><h1/>
      <p><b>Tel.nr:</b> 0123456789</p>
      <br />
      <p><b>Emial:</b> support@filmvisarna.se</p>
      <br />
      <p><b>Adress:</b> Teknikhögskolan Lund</p>
     <p><b>Öppettider:</b>
     Måndag och tisdag-stängt
     Onsdag till lördag(16-20)
     Söndag(13-20) </p>
     <p><b> Vi har nya rutiner med anledning av corona </b></p>
      <p><b>
      vår Biosida gjorde av:</b> </p>
      <p>
      Denise,Yunyan,Hanan,Ermin,Edvin och Tobias :)
      </p>
    </div>
    <!--<div class="grid-item grid-item-2">
      <p></p>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title{
  padding-block: 30px;
  color: black;
}
.contact{
  padding-top: 50px;
  font-size:10px;
  color: azure;
}
* {
  box-sizing: border-box;
}
.grid-container {
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 15px;
  grid-auto-rows: minmax(100px, auto);
  padding: 10em;
}
.grid-item {
  border: 3px solid rgb(141, 141, 141);
  text-align: left;
  padding: 5px;
  font-family: "Courier New", Courier, monospace;
  font-size: 2em;
}
.grid-item-1 {
  background-color: rgb(19, 18, 18);
}
.grid-item-2 {
  background-color: rgb(7, 7, 7);
}
</style>
