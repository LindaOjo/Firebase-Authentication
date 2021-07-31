import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import firebase from 'firebase/app'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBjX1stg7RcG9Nxan7_Gw1bsRlZO0DG2Yg',
  authDomain: 'fir-authentication-de399.firebaseapp.com',
  projectId: 'fir-authentication-de399',
  storageBucket: 'fir-authentication-de399.appspot.com',
  messagingSenderId: '1079822426552',
  appId: '1:1079822426552:web:396a3f57fcbcd9a8ed6f4d'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
