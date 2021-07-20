import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      userInfo: window.localStorage.getItem('userInfo') == null ? '' : JSON.parse(window.localStorage.getItem('userInfo'))
    },
    mutations: {
      login (state, userInfo) {
        console.log(state,userInfo)
        state.userInfo = userInfo
        window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
      }
    }
  })
