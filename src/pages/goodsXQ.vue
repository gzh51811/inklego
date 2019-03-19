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
            <img src="../static/images/b5f154a7be5efb76e2154c81a952a2a6.png"  />
            <p>麻溜溜滑溜溜</p>
            
            <i>颜色</i>
            <span>RMB:888</span>
        </div>
        <div class="shejishi">
            <h4>设计师</h4>
            <img src="../static/images/b46fb0ca7ea3f29becc7aa822aa339a4.jpg"/>
            <p>某知名品牌，</p>
        </div>
        <div class="xiangqing">
            商品详情
        </div>
        </div>
        <div class="bottom">
            <i class="el-icon-check"></i>
            <i class="el-icon-service"></i>
            <el-button type="info">立即购买</el-button><el-button type="info">加入购物车</el-button>
            
        </div>
    </div>
</template>
<script type="text/javascript">
    export default{
        methods:{
            back(){
                this.$router.back();
            }
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
        bottom:0px;
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