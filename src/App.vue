<template>
  <div id="app">
    <nav-bar />
    <div class="app-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/TheNavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import './assets/stylesheets/variables.scss';

html, body {
  margin: 0;
}

.app-container {
  padding-top: $nav-height;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
