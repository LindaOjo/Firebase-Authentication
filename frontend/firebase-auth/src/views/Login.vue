<template>
  <div>
    <div v-if="!isLoggedIn()" id="nav">
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </div>
    <form @submit.prevent="login">
      <div class="login">
        <input type="text" placeholder="email" v-model="email" autocomplete="on" />
      </div>
      <div class="password">
        <input type="password" placeholder="password" v-model="password" />
      </div>
      <button>Login</button>
    </form>
    <p class="error" v-if="error">{{error}}</p>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    ...mapGetters([
      'isLoggedIn'
    ]),
    ...mapActions([
      'setLoggedIn',
      'setUpAccount'
    ]),
    login () {
      firebase.default.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((response) => {
          this.setLoggedIn(true)
          this.$router.replace({ name: 'Secret' })
        })
        .catch(error => {
          console.log(error.message)
          this.error = error.message
        })
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  color: inherit;
}
input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}
button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}
.error {
  color: red;
}
</style>
