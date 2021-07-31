<template>
  <div>
    <div class="error" v-if="error">{{error.message}}</div>
    <form @submit.prevent="pressed">
      Register
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
import * as firebase from 'firebase/app'
require('firebase/auth')

export default {
  data () {
    return {
      email: '',
      password: '',
      error: '',
      user: null
    }
  },
  methods: {
    pressed () {
      firebase.default.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((userCrendentials) => {
          console.log(userCrendentials)
          this.user = userCrendentials
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
