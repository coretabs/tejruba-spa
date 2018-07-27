<template>
  <div id="app">
    <app-header/>
      <section class="main-section section">
          <div class="container content">
        <router-view/>
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
export default {
  name: 'App',
  components: {
    'app-header': AppHeader
  }
}
</script>

<style lang='sass'>
@import '~bulma'
//#app { font-family: 'Avenir', Helvetica, Arial, sans-serif;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;text-align: center;color: #2c3e50;margin-top: 60px;}
</style>
