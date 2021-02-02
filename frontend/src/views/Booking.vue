<template>
<div>
  <NewBooking1 @close1="(showPage1 = false), (showPage2 = true)" v-if="showPage1"/>
  <NewBooking2 v-if="showPage2"/>
</div>
</template>

<script>
import NewBooking1 from './NewBooking1.vue'
import NewBooking2 from './NewBooking2.vue'


export default {
  components: { NewBooking1, NewBooking2 },
  data() {
    return {
      showPage1: true,
      showPage2: false
    }
  }
}
</script>

<style>

</style>