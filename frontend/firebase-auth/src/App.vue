<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  methods: {
    ...mapGetters([
      'isLoggedIn'
    ])
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(0, 1, 44);
  height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
