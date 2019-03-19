<template>
    <div>
        <header class="mui-bar mui-bar-nav ink-bar-header">
					<a class="mui-icon ink-icon iconfont icon-search mui-pull-left webAction" href="http://www.inklego.com/mb/search"></a>
					<a class="mui-icon ink-icon iconfont icon-cart mui-pull-right mui-tab-item" href='#tabbar-with-login'>
						<div class="dot"></div>
					</a>
					<h1 class="mui-title">商店</h1>
					<p class="ink-sub-title">STORE</p>
		</header>
		<div class="xxx">
            <el-menu :default-active="activeIndex"  class="el-menu-demo" mode="horizontal">
              <el-menu-item :index="idx+''" v-for="(value,idx) in link" @click="changePage(idx)" >
                <a href="javascript:;">{{value}}</a>
              </el-menu-item>
            </el-menu>  
        </div>

        <div class="yyy">
            <component :is="nowpage" :page="page" v-on:change="change" ></component>
        </div>
    </div>
</template>
<script>
    import jingxuan from './jingxuan.vue';
    import fushi from './fushi.vue'; 
    import canchu from './canchu.vue';
    import dapei from './dapei.vue';
    import chuxing from './chuxing.vue';
    import wenju from './wenju.vue';
    import jujia from './jujia.vue';
    import pinpai from './pinpai.vue';
    import shuma from './shuma.vue';
    
    export default {
        data(){
            return {
                link:["精选",'服饰','搭配','数码','餐厨','出行','文具','居家','品牌'],
                activeIndex:'0',
                page:['jingxuan','fushi','dapei','shuma','canchu','chuxing','wenju','jujia','pinpai'],
                nowpage:"jingxuan"
            }
        },
        props:['zujianPage'],
        methods: {
           changePage(idx){
            
                this.nowpage = this.page[idx];
           },
           change(n){
                this.nowpage = this.page[n];
                this.$el.parentNode.scrollTop = 0;
               
           }
        },
        
        components:{
            jingxuan,
            fushi,
            dapei,
            shuma,
            canchu,
            chuxing,
            wenju,
            jujia,
            pinpai,

        }
    }
</script>
<style scoped scoped>
    .xxx{
         width:100%; 
         overflow-y:hidden;
    }
    .el-menu-demo{
       width:612px; 
        box-sizing:border-box;
    }
    /*隐藏滚轮*/
    ::-webkit-scrollbar {
    display: none;
    }
    
    
    
</style>
