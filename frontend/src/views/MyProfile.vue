<template>
  <div class="Myprofile">
    <div class="header">
      <h3>Mina uppgifter</h3>
      <div v-if="currentUser">
        <div class="myProfile-detail">
          <h4>E-post: {{ currentUser.email }}</h4>
          <h4>Namnet: {{ currentUser.name }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    closeBox() {
      this.$emit("close")
    },
    currentUser() {
      return this.$store.state.currentUser;
    },
  },
};
</script>

<style>
.Myprofile{
  position: absolute;
  text-align: center;
  width: 500px;
  height: 200px;
  display: flex;
  padding: 2em;
  left: 50%;
  top: 20%;
  margin-top: 1em;
  margin-right:0.1em;
  padding: 1em;
  letter-spacing: 2px;

}
.myProfile-detail {
  text-align: left;
}
</style>