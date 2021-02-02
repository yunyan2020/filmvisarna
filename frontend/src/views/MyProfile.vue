<template>
  <h3>Mina uppgifter</h3>
  <div class="container">
    <h4>Din E-post: {{currentUser.email}}</h4>
    <h4>Ditt Namn:  {{currentUser.name}}</h4>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    },
  },
}
</script>

<style>
.container {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  height: 200px; 
  display: flex;
  margin: 10px;
  padding: 1em;
  left:50%;
  top:20%;
  border: 1px solid rgba(114, 112, 112, 0.521);
}

</style>