<template>
    <div class='content'>
        
            
        
        <div class="top">
            <i @click="back" class="el-icon-back"></i>
            
            
            <i  class="el-icon-star-off" ></i>
            <el-button size="small">下载APP</el-button>
            <h4>商品名称</h4>

        </div>
        <div class="box">
        <div class="center">
            <img :src="data.picture"  />
            <p>{{data.title}}</p>
            
            <i>{{data.title}}</i>
            <span>￥{{data.price}}.00</span>
        </div>
        <div class="shejishi">
            <h4>设计师</h4>
            <img :src="sjsthumb"/>
            <p>{{sjsnick}}</p>
        </div>
        <div class="xiangqing">
            商品详情
        </div>
        </div>
        <div class="bottom">
            <i class="el-icon-check"></i>
            <i class="el-icon-service"></i>
            <el-button type="info">立即购买</el-button><el-button type="info" @click="toCart">加入购物车</el-button>
            
        </div>
    </div>
</template>
<script type="text/javascript">
    import axios from 'axios'
    export default{
        data(){
            return {
                data:[],
                sjsthumb:[],
                sjsnick:[]
            }
        },
        methods:{
            back(){
                this.$router.back();
            },
            toCart(){
               
                console.log("购物车",this.data.id,Date.now());

                this.$axios.get('http://localhost:1822/goodCart/',{params:{
                    userName:'name',
                    u_id:this.data.id,
                    num:1,
                    date:Date.now(),
                    state:0
                }}).then(res=>{
                    console.log(res);
                
                });


            }
        },
        created(){
            console.log("详情页",this.$route.name);
            this.$axios.get('http://localhost:1822/GOODSXQ/',{
                params:{
                    leixing:this.$route.query.leixing,
                    id:this.$route.query.id

                }
            }).then(res=>{
                    console.log("返回来的东西",res.data[0]);
                    this.data = res.data[0];
                    this.sjsthumb =res.data[0].designer.thumb;
                    this.sjsnick =res.data[0].designer.nick
                });
        }
    
    }
</script>
<style type="text/css" scoped>
    .content{
        position:fixed;
        top:0;
        width:100%;
        overflow-x:hidden;
    }
    .box{
        height:616px;
    }
    .top{
        width:100%;
        box-sizing: border-box;
        padding:0 10px;
        height:44px;
        position:fixed;
        top:0;
        background:white;
    }
    .top .el-icon-back{
        float:left;
    }
    .top h4{
        float:right;
        height:44px;
        line-height: 44px;
        width:100px;
        text-align: center;
        
    }
    .top i{
        font-size: 22px;
        line-height: 44px;
        width:44px;
        height:44px;
        text-align: center;
    }
    .top .el-button{
        float:right;
        margin-top:6px;
    }
    .top .el-icon-star-off{
        float:right;
    }
    .center{
        width:375px;
        text-align: center;
    }
    .center img{
        width:375px;
        height:375px;

    }
    .center p{
        height:40px;
        line-height: 40px;
        font-size: 16px;
        color:#333;
        font-weight: bold;
    }
    .center span{
        display:block;
        height:40px;
        line-height: 40px;
        color:red;
    }
    .center i{
        display:block;
        line-height: 40px;
        height:40px;
    }
    .center p,.center i{
        text-overflow:ellipsis;
        width:100%;
        white-space:nowrap; 
        overflow:hidden;
        padding:0 40px;
        box-sizing: border-box;
    }
    .shejishi{
        height:196px;
        text-align: center;
        background:white;
    }
    .shejishi h4{
        width:100px;

    }
    .shejishi img{
        width:73px;
        height:73px;
        border-radius: 50%;
    }
    .shejishi p{
        margin-top:20px;
        height:40px;
        line-height: 40px;
        color:#333;
    }
    .xiangqing{
        height:800px;
        background:skyblue;
    }
    .bottom{
        position:fixed;
        height:50px;
        bottom:50px;
        background:white;
        width:100%;
        
    }
    .bottom i{
        font-size: 32px;
        display:block;
        width:57px;
        line-height: 50px;
        float:left;
        text-align: center;
    }
    .bottom .el-button{
        background:black;
        width:125px;
        height:50px;
        float:right;
        font-weight: bold;;
    }
    .bottom .el-button:nth-child(3){
        background:yellow;
        color:#333;
    }
 /*隐藏滚轮*/
    ::-webkit-scrollbar {
    display: none;
    }
</style>