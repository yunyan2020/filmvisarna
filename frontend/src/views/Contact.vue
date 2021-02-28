<template>
  <div class="content">
    <h1 class="title">Kontakta oss</h1>
    <div class="textContent">
      <p>
        Kundtjänst via email: support@filmvisarna.se eller via
        kontaktformuläret.
      </p>
      <br />
      <P>
      Glöm inte Nya rutiner med anledning av corona:)
      </P>
      <br/>
      <p>
      Vi som har jobbat med projektet är:

      Denis,Yunyan,Hanan,Ermin,Edvin och Tobias
      </p>
      <br/>

      <p>
        Filmvisarna <br />
        Box 829<br />
        211 20 Malmö<br />
        Sverige<br />
        Org.nr: 42051-5555
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  padding-bottom: 20px;
}
.content {
  padding-top: 50px;
  font-size: 5 px;
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
  background-color: #eee;
}
.grid-item-2 {
  background-color: #eee;
}
</style>
