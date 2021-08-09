export default {
  state: {
    user: null,
    isLoggedIn: false
  },
  getters: {
    user: (state) => state.user,
    isLoggedIn: (state) => state.isLoggedIn
  },
  mutations: {
    setUpAccount: (state, user) => {
      state.user = user
      state.isLoggedIn = !!user
    },
    setLoggedIn: (state, isLoggedIn) => {
      state.isLoggedIn = isLoggedIn
    }
  },
  actions: {
    setUpAccount ({ commit }, user) {
      commit('setUpAccount', user)
    },
    setLoggedIn ({ commit }, isLoggedIn) {
      commit('setLoggedIn', isLoggedIn)
    }
  }
}
