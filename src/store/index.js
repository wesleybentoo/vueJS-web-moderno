import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: []
  },
  mutations: {
    store(state, object) {
      state.movies.push(object)
    },

    remove(state, index) {
      state.movies.splice(index, 1)
    }
  },
  getters: {
    getMovies(state) {
      return state.movies
    }
  },
  actions: {
    setStoreMovie({commit}, payload) {
      commit('store', payload)
    },

    setRemoveMovie({commit}, index) {
      commit('remove', index)
    }
  },
  modules: {
  }
})
