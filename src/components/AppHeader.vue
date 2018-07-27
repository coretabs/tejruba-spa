<template>
  <nav class="navbar has-shadow is-warning">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/" exact>tejruba</router-link>
    </div>
  <div class="navbar-menu">
      <div class="navbar-start">
      </div>
      <div class="navbar-end">
        <router-link class="navbar-item" to="/login">Login</router-link>
        <router-link class="navbar-item" to="/signup">SignUp</router-link>
        <router-link class="navbar-item" to="/experiences/create">add</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #8ba6ff;
}
</style>
