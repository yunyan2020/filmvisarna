<template>
  <div class="detail-page">
    <div class="columns">
      <div class="column is-three-quarters">
        <h1 class="title">{{ movie.title }}</h1>
        <h5 class="subtitle">
          <p class="subtitle-tag">
            {{ movie.runtime }}|{{ movie.genre }}|{{ movie.year }}
          </p>
        </h5>
        <div class="intro">
          <div class="list">
            <div class="item">
              <div class="item-detail">Direktör:</div>
              <div class="name">
                <span>{{ movie.director }}</span>
              </div>
            </div>
            <div class="item">
              <div class="item-detail">skådespelare：</div>
              <div class="name">
                <span
                  v-for="actor in movie.actors"
                  v-bind:key="actor.id"
                  class="movie"
                  >{{ actor }}、</span
                >...
              </div>
            </div>
          </div>
          <div class="intro_text">{{ movie.plot }}</div>
          <img :src="movie.poster" :alt="movie.titile + 'pic'" />
          <div class="language-wrapp">
            <p>Tal :{{ movie.language }}</p>
            <p>Text:{{ movie.subtitles }}</p>
          </div>
        </div>
      </div>
    </div>
    <button>Boka</button>
    <div v-for="date in viewingDates" :key="date">
    <p>{{ date }}</p>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      times: [],
    }
  },
  computed: {
    id() {
      //get id from url parameter
      return this.$route.params.id;
    },
    movie() {
      return this.$store.state.movie.filter((p) => p.id == this.id)[0];
    },
    viewings() {
      return this.$store.state.allViewings.filter((viewing) => viewing.movie === this.movie.title)
    },
    viewingDates() {
      // Sorts the movie viewing dates from earliest to latest
      let tempDates = this.viewings.map( viewing => viewing.date.slice(5,10).replace(/\//g, "")).sort((a,b) => a-b)
      return tempDates
    }
  }
}
</script>

<style scoped>
.detail-page {
  margin: 10px;
  padding: 1em;
  max-width: 50em;
  margin-left: auto;
  margin-right: auto;
  top: 3em;
  border: 1px solid rgba(0, 0, 0, 0.521);
}
.list {
  padding-top: 15px;
}
.item {
  margin-bottom: 5px;
  display: flex;
}
.item-detail {
  padding-top: 0;
  font-size: 15px;
  font-weight: normal;
}
.intro_text {
  max-width: 800px;
  padding-top: 15px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
}
.railer-container {
  background: #333;
  position: relative;
  bottom: 32px;
  /* padding-left: 5px; */
  padding: 0 5px 0 5px;
  height: 20px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  /* text-align: center; */
}

img {
  max-width: 400px;
  max-height: 400px;
}
</style>