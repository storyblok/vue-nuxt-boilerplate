import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      cacheVersion: ''
    },
    mutations: {
      setCacheVersion (state, version) {
        state.cacheVersion = version
      }
    },
    actions: {
      loadCacheVersion ({ commit }) {
        return this.$storyapi.get(`cdn/spaces/me`).then((res) => {
          commit('setCacheVersion', res.data.space.version)
        })
      }
    }
  })
}

export default createStore
