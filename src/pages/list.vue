<template>
    <div class="content">
        <div class="top">
            <h4><i @click="back" class="el-icon-back"></i>全部</h4>
        </div>
        <div class="center">
            <ul>
                <li v-for='(value,idx) in link' :class="{active:idx==nowidx}">{{value}}</li>
                
            </ul>
        </div>
        <div class="bottom">
            
            <ul>
            <li v-for="item in 30" @click="togoodsXQ">
                <img src="../static/images/6f6939cb8662a77d5f4f34289d564f3f.jpg" />
                <p>你是猪</p>
                <span>￥500</span>
            </li>
        </ul>
            
        </div>
    </div>
    
</template>
<script type="text/javascript">
    import storeUL from './storeUL.vue'
    export default{
        data(){
            return{
                link:["最新",'人气','价格'],
                nowidx:0
            }
        },
        methods:{
            back(){
                
                this.$router.back();
            },
            togoodsXQ(){
                console.log('准备发车详情页');
                this.$router.push({path:'/goodsXQ',query:{id:123}});
            }
        },
        components:{
            storeUL
        }
    }
</script>
<style type="text/css" scoped>
    .content{
        position:fixed;
        top:0;
        width:100%;

    }
    .content h4{
        text-align: center;
        height:44px;
        line-height: 44px;
        
    }
    .content .top{
        width:100%;
        box-sizing: border-box;
        padding:0 20px ;
        border-bottom: 1px solid #ccc;
    }
    .content h4 i{
        float:left;
        line-height: 44px;
        font-size: 22px;
    }
    .center ul{
        width:100%;
        border-bottom: 1px solid #ddd;
    }
    .center ul li{
        float:left;
        width:33.3%;
        text-align: center;
        height:36px;
        line-height: 36px;
        color:#666;

    }
    .center ul li.active{
        color:black;
    }
    .bottom{
        height:590px;
        overflow-x:hidden;
        padding:0 5px;
        box-sizing: border-box;
    }
    .bottom ul{
        width:100%;
        background:white;
        text-align: center;
        
    }
    
    .bottom ul span{
        color:red;
    }
    .bottom ul li{
        margin-top:15px;
        border:1px solid #eee;
        box-sizing: border-box;
        width:177px;
        height:274px;
        float:left;
        padding:10px 5px;
    }
    .bottom ul li img{
        width:160px;
        height:160px;
    }
    .bottom ul li:nth-child(odd){
        margin-right: 10px;
    }
    

     /*隐藏滚轮*/
    ::-webkit-scrollbar {
    display: none;
    }
</style>