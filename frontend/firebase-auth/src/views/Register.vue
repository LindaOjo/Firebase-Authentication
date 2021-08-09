<template>
  <div>
     <div v-if="!isLoggedIn()" id="nav">
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </div>
    <div class="error" v-if="error">{{error.message}}</div>
    <form @submit.prevent="pressed">
      <div class="first">
        <input type="text" v-model="firstName" placeholder="First Name" />
      </div>
      <div class="last">
        <input type="password" v-model="lastName" placeholder="Last Name" />
      </div>
      <div class="email">
        <input type="email" v-model="email" placeholder="email" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password" />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import * as firebase from 'firebase/app'
require('firebase/auth')

export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      error: '',
      user: null
    }
  },
  methods: {
    ...mapGetters([
      'isLoggedIn'
    ]),
    ...mapActions([
      'setUpAccount'
    ]),
    pressed () {
      firebase.default.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((userCrendentials) => {
          this.setUpAccount(userCrendentials)
          this.$router.replace({ name: 'Secret' })
        })
        .catch((error) => {
          this.error = error.message
          console.log(this.error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
  color: red;
  font-size: 18px;
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
</style>
