<template>
    <div>
      <div id="nav">
        <router-link to="/login">Login</router-link> |
        <router-link to="/register">Register</router-link>
      </div>
      <form v-if="!emailSent" @submit.prevent="sendResetPasswordMail">
        <div class="email">
          <input autofocus type="text" placeholder="email" v-model="email" autocomplete="on" />
          <p class="error" v-if="error">{{error}}</p>
        </div>
        <button>Reset Password</button>
      </form>
      <div v-else>
        <p>A reset password link has been sent to {{this.email}}</p>
        <button><a href="/login">Log In</a></button>
      </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      email: '',
      emailSent: false,
      error: ''
    }
  },
  watch: {
    email: function () {
      this.error = ''
    }
  },
  methods: {
    ...mapGetters([
      'isLoggedIn'
    ]),
    sendResetPasswordMail () {
      if (!this.email) return
      firebase.default.auth().sendPasswordResetEmail(this.email)
        .then(() => {
          this.emailSent = true
          this.error = ''
        })
        .catch(error => {
          this.error = error.message
        })
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  color: white;
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
  height: 75px;
  font-size: 100%;
  border: 1px;
  border-radius: 30px;
}
.error {
  color: orange;
}
</style>
