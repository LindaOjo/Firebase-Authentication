<template>
  <div>
    <button @click="signOut">Sign out</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'top-header',
  methods: {
    ...mapGetters([
      'isLoggedIn'
    ]),
    ...mapActions([
      'setLoggedIn'
    ]),
    signOut () {
      firebase.default.auth().signOut()
        .then(() => {
          this.setLoggedIn(false)
          console.log(this.isLoggedIn())
          this.$router.replace({ name: 'Login' })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
}

button {
  width: 250px;
  height: 75px;
  border: 1px;
  border-radius: 30px;
  font-size: 100%;
  margin: 5rem 0;
}
</style>
