/**
 * hash路由的原理
 * * 表面：根据hash值的改变来渲染不同的组件
 * * 底层：根据window的hashchange事件来相应不同的组件
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import STORE from 'page/store'
import FUND from 'page/fund'
import SERVICE from 'page/service'
import DESIGNER from 'page/designer'
import NotFound from 'page/NotFound'
import PERSONAL from 'page/personal'
import LOGIN from 'page/login'
import SHOPPINGCART from 'page/shoppingCart'

Vue.use(VueRouter);

let router = new VueRouter({
    //     mode:'history',
    routes: [
        // 首页:当浏览器地址为path路径是时，自动渲染component对应组件
        {
            path: '/', //重定向：当浏览器url地址为/,自动跳转到/store
            redirect: '/store'
        },
        {
            name: 'STORE',
            path: '/store',
            component: STORE
        },
        {
            name: 'FUND',
            path: '/fund',
            component: FUND
        },
        {
            name: 'SERVICE',
            path: '/service',
            component: SERVICE

        },
        {
            name: 'DESIGNER',
            path: '/designer',
            component: DESIGNER
        },
        {
            name: 'PERSONAL',
            path: '/personal',
            component: PERSONAL
        },
        {
            name: 'LOGIN',
            path: '/login',
            component: LOGIN
        },
        {
            name: 'SHOPPINGCART',
            path: '/shoppingcart',
            component: SHOPPINGCART
        },
        // 404
        {
            path: '*',
            component: NotFound
        }
    ]
});
//router.beforeEach((to,from,next)=>{
//  console.log('beforeEach',to,from,next);
//
//  if(to.meta.requiresAuth){
//      // 需要登录的模块，判断是否已登录
//      let username = localStorage.getItem('username');
//      if(username){
//          next();
//      }else{
//          console.log('from:',to.fullPath)
//          // 重定向到登录页面
//          next({
//              name:'Login',
//              params:{from:to.fullPath}
//          })
//      }
//  }else{
//      next();
//  }
//
//
//});

export default router;
