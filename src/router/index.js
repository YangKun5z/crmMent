import Vue from 'vue'
import Router from 'vue-router'
// 导入刚才编写的组件
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Cars from '@/components/main/cars'
import Rent from '@/components/main/rent'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
  // 下面都是固定的写法
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'AppIndex',
      component: AppIndex,
      redirect:'/cars',
      children:[
        {
          path:'/cars',
          name:'车辆管理',
          component:Cars
        },
        {
          path:'/rent',
          name:'车辆管理',
          component:Rent
        }
      ]
    }
  ]
})

