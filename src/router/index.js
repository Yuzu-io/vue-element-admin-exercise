import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const Login = () => import('../components/common/login/Login.vue');
const Appindex = () => import('../components/content/home/Appindex.vue');


Vue.use(VueRouter)

const routes = [
  {
    path:'',
    // 重定向
    redirect:'/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/index',
    component: Appindex
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
