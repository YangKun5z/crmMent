import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      userInfo: {
        realname: window.localStorage.getItem('userInfo') == null ? '' : JSON.parse(window.localStorage.getItem('userInfo')).realname,
        userId:window.localStorage.getItem('userInfo') == null ? '' : JSON.parse(window.localStorage.getItem('userInfo')).userId,
      }
    },
    mutations: {
      login (state, userInfo) {
        console.log(state,userInfo)
        state.userInfo = userInfo
        window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
      }
    }
  })
