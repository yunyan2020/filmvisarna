<template>
  <div class="container">
    <div class="container-title">
      <h1>Kalender</h1>
    </div>
    <div class="dates">
      <div class="today">
        <h3>{{ today }}</h3>
        <div v-for="movie in movies" :key="movie.title">
          <p>{{ movie.title }}</p>
        </div>
        <div class="tomorow">
          <h3>{{ tomorrow }}</h3>
        </div>
        <div class="aftertomorow">
          <h3>{{ afterTomorrow }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      today: "",
      tomorrow: "",
      afterTomorrow: "",
      todaysMovie: {},
      tomorrowsMovie: {},
      afterTomorrowsMovie: {},
    };
  },
  computed: {
    movies() {
      return this.$store.state.movie;
    },
  },
  methods: {
    setDates() {
      // Setting the dates for today and two days ahead
      let tday = new Date();
      let tmorrow = new Date();
      tmorrow.setDate(tday.getDate() + 1);
      let afterTmorrow = new Date();
      afterTmorrow.setDate(tmorrow.getDate() + 1);

      this.today = tday.toJSON().slice(0, 10).replace(/-/g, "/");
      this.tomorrow = tmorrow.toJSON().slice(0, 10).replace(/-/g, "/");
      this.afterTomorrow = afterTmorrow
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
    },
  },
  mounted() {
    this.setDates();
    console.log("Mounted...");
  },
};
</script>

<style scoped>
.movies:hover {
  opacity: 0.5;
}

h5 {
  display: inline-block;
  padding-left: 5px;
}

.movies > h3 {
  display: inline-block;
  padding: 0 5px 0 5px;
}

h1,
h3,
h5 {
  color: black;
}

.container {
  margin: 10px;
  padding: 1em;
  border: 1px solid black;
}

.dates {
  display: flex;
  justify-content: space-around;
}

.container-title {
  display: inline-block;
}
</style>