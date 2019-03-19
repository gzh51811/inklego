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
//列表页路由
import LIST from  'page/list'
//商品详情页
import GOODSXQ from  'page/goodsXQ'
Vue.use(VueRouter);

let router = new VueRouter({
    // mode:'history',
    routes:[
        // 首页:当浏览器地址为path路径是时，自动渲染component对应组件
        {
            path:'/',   //重定向：当浏览器url地址为/,自动跳转到/home
            redirect:'/store'
        },
        {
            name:'STORE',
            path:'/store',
            component:STORE
        }	,
        {
            name:'FUND',
            path:'/fund',
            component:FUND
        },
        {
            name:'SERVICE',
            path:'/service',
            component:SERVICE
           
        },
        {
            name:'DESIGNER',
            path:'/designer',
            component:DESIGNER
           
        },
        {
            name:'PERSONAL',
            path:'/personal',
            component:PERSONAL
        },
        {
            name:'LIST',
            path:'/list',
            component:LIST
        },
        {
            name:'GOODSXQ',
            path:'/goodsXQ',
            component:GOODSXQ
        },
        // 404
        {
            path:'*',
            component:NotFound
        }
    ]
});


export default router;