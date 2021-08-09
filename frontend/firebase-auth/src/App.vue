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
*, html, body{
  padding: 0;
  margin: 0;

  button {
    cursor: pointer;
  }

}

input {
 outline: none;
}

a, a:visited, a:hover, a:focus {
    text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #00012c;
  display: block;
  height: 100vh;
  width: 100vw;
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
