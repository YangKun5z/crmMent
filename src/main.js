import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
var axios = require('axios')
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)



router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.userInfo.realname) {
      next()
    } else {
      next({
        path: 'login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
}
)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  // 注意这里
  store,
  components: { App },
  template: '<App/>'
})

Vue.prototype.POST = function (url, data, callback, showLoading, config) {
  if (showLoading) {
      vm.showLoading();
  }
  POST(url, data, function (response) {
      vm.responseHandler(response, callback, showLoading);
  }, config);
};
