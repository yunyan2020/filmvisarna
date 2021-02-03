<template>
  <div class="wrapper">
    <div class="contain">
      <NewBooking1
        @close1="(showPage1 = false), (showPage2 = true)"
        v-if="showPage1"
      />
      <NewBooking2
        @close2="(showPage2 = false), (showPage3 = true)"
        v-if="showPage2"
      />
      <NewBooking3 v-if="showPage3" />
    </div>
  </div>
</template>

<script>
import NewBooking1 from "./NewBooking1.vue";
import NewBooking2 from "./NewBooking2.vue";
import NewBooking3 from "./NewBooking3.vue";

export default {
  components: { NewBooking1, NewBooking2, NewBooking3 },
  data() {
    return {
      showPage1: true,
      showPage2: false,
      showPage3: false,
    };
  },
};
</script>

<style scoped>
.wrapper {
  height: 800px;
  background-color: #141414;
}
.titel {
  color: black;
}
.contain {
  text-align: center;
}
</style>