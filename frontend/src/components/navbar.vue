<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/details">About us</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  margin-top: 50px;
  text-decoration: none;
  font-weight: bald;
  padding: 20px;
  border: 1px;
  font-size: 20px;
}

a:hover {
  color: rgba(27, 45, 201, 0.281);
}

nav {
  margin-top: 5px;
  height: 30px;
  text-align: center;

  border-bottom: 2px solid rgb(99, 96, 96);
  box-shadow: 1px 3px 3px grey;
}
</style>