<template>
  <div>
    Logged in
    <div v-if="loggedIn">Yes</div>
    <div v-else>No</div>
    <button class="but" @click="signOut">Sign out</button>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'top-header',
  mounted () {
    firebase.default.auth().onAuthStateChanged(user => {
      this.loggedIn = !!user
    })
  },
  methods: {
    setupFirebase () {
    },
    signOut () {
      if (!this.loggedIn) return
      firebase.default.auth().signOut()
        .then(() => {
          this.$router.replace({ name: 'Login' })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  data () {
    return {
      loggedIn: false
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  color: inherit;
}
</style>
