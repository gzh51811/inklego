<template>
<div class="ink-content">
			<div id="tabbar-with-info" class="mui-control-content mui-active">
				
				<nav class="mui-bar mui-bar-tab ink-bar-tab">
					<a class="mui-tab-item" href="javascript:;" v-for='(nav,idx) in navs' >
						<svg class="icon" aria-hidden="true" @click='goto(nav)'>
							<use :href="nav.tubiao" ></use>
						</svg>
					</a>
				</nav>
				<div class="ink-scroll" >				
					<router-view></router-view>
				</div>
			</div>		
			
		</div>
		
</template>
<script>
/**
 * $router：路由实例，具有跳转等方法
 * $route：当前路由信息，保存当前路由的参数
 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './static/css/mui.min.css';
import './static/css/iconfont.css';
import './static/css/inklego.css';
import './static/js/iconfont.js';
import axios from "axios";

// ElementUI以插件的形式来扩展Vue的功能
Vue.use(ElementUI);

// 把axios设置到Vue的原型对象上，方便在任意组件中使用
Vue.prototype.$axios = axios;

export default {
    data(){
        return {
            navs:[{
                text:'商店',
                name:'STORE',
                tubiao:'#icon-store2',
                
            },
            {
                text:'预售',
                name:'FUND',
                tubiao:'#icon-presale',
               
            },
            {
                text:'设计师',
                name:'DESIGNER',
                tubiao:'#icon-artiste',
               
            },
            {
                text:'客服',
                name:'SERVICE',
                tubiao:'#icon-msg',
                
            },
            {
                text:'个人信息',
                name:'PERSONAL',
                tubiao:'#icon-my',
            }],
            activeIndex:0,
            active:'ink-scroll'
        }
    },
    methods:{
        goto(nav){
            this.$router.push({name:nav.name});
            // this.$router.push({path:nav.path})
            for(var i=0;i<this.navs.length;i++){
            		if(this.navs[i].tubiao.slice(-1)==2){
            			this.navs[i].tubiao=this.navs[i].tubiao.slice(0,-1)
            		}     	
           	 }
            if(nav.tubiao.slice(-1)==2){
            }else{
            	nav.tubiao+='2';
            }
            if(nav.name=='PERSONAL'){
            	this.active='ink-scroll2';
            }else{
            	this.active='ink-scroll';
            }
        }
    },

}
</script>

<style scoped>
	.ink-nav {
				
				height: 40px;
				background: #fff;
				border: none;
				z-index: 10;
			}
			
			
			.ink-scroll {			
			    top: 0px;
			    bottom: 50px;
			    position: fixed;
			    overflow-x: hidden;
			}
			
</style>
