import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: true,
    minified: true,
    items: [
      { icon: 'bubble_chart', title: 'Inspire' }
    ]
  },
  getters: {
    minified (state) {
      return state.minified
    },
    drawer (state) {
      return state.drawer
    },
    items (state) {
      return state.items
    }
  },
  mutations: {
    toggleMinified (state) {
      state.minified = !state.minified
    },
    toggleDrawer (state) {
      state.drawer = !state.drawer
    }
  }
})
