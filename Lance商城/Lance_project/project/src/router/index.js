import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import http from '../plugins/http.js'


//注册全局变量组件
import HFUN from '../components/HFUN.vue'
import Layout_P from '../components/Layout_P.vue'
import Layout_M from '../components/Layout_M.vue'

//引入 Element
import ElementUI, { Form } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


//引入 Vant 
import Vant from 'vant';
import 'vant/lib/index.css';
//Layout 提供了van-row和van-col两个组件来进行行列布局
import { Col, Row } from 'vant';
//使用Col，Row
Vue.use(Col);
Vue.use(Row);


//使用Vant
Vue.use(Vant);
//使用ElementUI
Vue.use(ElementUI);
//注册全局变量组件
Vue.component('HFUN', HFUN);
Vue.component('Layout_P', Layout_P);
Vue.component('Layout_M', Layout_M);

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/login',
    name: 'login',
    component: () => import('../views/user/login.vue')
  },
  {
    path: '/menus/list',
    name: 'menus',
    component: () => import('../views/menus/list.vue')
  },
  {
    path: '/shoppingtrolley/list',
    name: 'shoppingtrolley',
    component: () => import('../views/shoppingtrolley/list.vue')
  },
  {
    path: '/user/list',
    name: 'user',
    component: () => import('../views/user/list.vue')
  },
  {
    path: '/shoppingtrolley/details',
    name: 'details',
    component: () => import('../views/shoppingtrolley/details.vue')
  },
  {
    path: '/user/register',
    name: 'register',
    component: () => import('../views/user/register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//进入页面前首先判断从哪个页面进入到哪个页面
//当然此处也可以对手机端和PC端页面进行判断跳转
/* router.beforeEach((to, from, next)=>{
  if(to.path=='/'){//如果进入的是登录页面，放行
    next();
   }
   else{
    //判断是否登录，请求后台，调用接口
    http.get('/user/info'//,{
      //请求头里面的token值代入
     
    //headers:{
    //authorization:localStorage.getItem('token')
    //  } 
    //}
    ).then(result=>{
      
      if(result.errcode==0){
        next()
      }
      else{
        router.push('/shouye');
      }
    })
   }

})
 */
export default router
