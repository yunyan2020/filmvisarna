<template>
  <div class="backdrop" @click.self="closeBox">   
    <div class="container">     
      <div class="sub-menu">  
        <div v-for="(item,i) in dropDowns" :key = "i" class = "menu-item">
          <router-link :to="item.link">{{item.title}}</router-link>
        </div>
      <div>Logga ut</div>  
      </div>
    </div>  
  </div>
</template>

<script>
import MyBookings from "../views/MyBookings.vue";
import MyProfile from "../views/MyProfile.vue";

export default {
  components: { MyBookings,MyProfile },
  data() {
    return {
      showMyBookings:false,
      showMyProfile:false,
      showMemberPage: false,
      dropDowns: [
        { title: "Mina beställningar", link:'MyBookings' },
        { title: "Mina uppgifter", link:'MyProfile' }
      ],
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.currentUser != null
    },
    hasBookings() {
      return this.$store.state.myBookings != null
    },
  },  
  methods: {
    closeBox() {
      this.$emit("close");
      this.showMemberPage = false;
    },
    toggleMyBookings() {     
      this.showMyBookings=!this.showMyBookings;
      console.log('bookings status', isLoggedIn,hasBookings)
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

.container{
  background: white;
  color: rgba(128, 128, 128, 0.719);
  max-width: 35em;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  border-radius: 10px;
  margin: auto;
  padding: 2em;
  line-height:31px;
  text-align: left;
  top: 5em;
  right: 3em;
  float: right;
  position:relative ;
}



</style>