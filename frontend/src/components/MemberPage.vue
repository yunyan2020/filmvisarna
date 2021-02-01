<template>
  <div class="backdrop" @click.self="closeBox">         
      <div class="buttonContainer">            
        <button @click="toggleMyBookings">Mina beställningar</button>
        <hr>
        <button @click="toggleProfile">Mina uppgifter</button>
        <hr>
        <button @click="logout">Logga ut</button>        
      </div>  
    <MyBookings  v-if="isLoggedIn && hasBookings && showMyBookings"/>
    <MyProfile   v-if="isLoggedIn && showMyProfile"/>
  </div>
</template>

<script>
import MyBookings from "./MyBookings.vue";
import MyProfile from "./MyProfile.vue";

export default {
  components: { MyBookings,MyProfile },
  data() {
    return {
      showMemberPage:false,
      isLoggedIn: false,
      showMyBookings:false,
      hasBookings:false,
      showMyProfile:false
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.currentUser != null
    },
    hasBookings() {
      return this.$store.state.currentUser != null
    },
  },
  methods: {
    closeBox() {
      this.$emit("close");
      this.showMemberPage = false;
    },
    toggleMyBookings() {
      if (isLoggedIn){
        this.showMemberPage = true;
      }
      this.showMyBookings = !this.showMyBookings;
      console.log('bookings status', showMemberPage,isLoggedIn,hasBookings)
    },
    toggleProfile() {
      this.showMyProfile = !this.showMyProfile;
    },
    logout() {
      fetch('/api/logout')
      this.$store.commit('setCurrentUser', null)
      //console.log(this.getCurrentUserName)
    },    
  },
};
</script>

<style scoped>
.backdrop {
  background: rgba(0, 0, 0, 0.342);
  width: 100%;
  height: 100%;
}

</style>