<template>
  <div class="main">
    <div>
      <div v-if="!isLoggedIn()" id="nav">
        <router-link to="/login">Log In</router-link> |
        <router-link to="/register">Register</router-link>
      </div>
      <form @submit.prevent="login">
        <div class="login">
          <input autofocus type="text" placeholder="email" v-model="email" autocomplete="on" />
        </div>
        <div class="password">
          <input type="password" placeholder="password" v-model="password" />
        </div>
        <p class="error" v-if="error">{{error}}</p>
        <button>Log In</button>
      </form>
      <button @click="fillTestDetails">Use Test Email to Log in</button>
    </div>
    <a href="/reset-password" class="forgot-password">Forgot password ?</a>
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
  watch: {
    email: function () {
      this.error = ''
    },
    password: function () {
      this.error = ''
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
    fillTestDetails () {
      this.email = 'orange@gmail.com'
      this.password = 'orange'
      this.login()
    },
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
main {
  max-height: 100vh;
}
input {
  width: clamp(15rem, 300px, 35rem);
  color: white;
  border: 2px solid white;
  background-color: transparent;
  border-color: transparent transparent white transparent;
  padding: 20px;
  margin: 1rem;
  font-size: 21px;
}
button {
  width: 200px;
  margin: 20px;
  height: 50px;
  font-size: 100%;
  border: 1px;
  border-radius: 30px;
}
.error {
  color: orange;
}
.forgot-password {
  margin-top: 30px;
  display: block;
  color: #42b983;
}
</style>
