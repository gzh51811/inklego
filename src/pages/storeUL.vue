<template>
    <div class="ulbox">
        <ul>
            <li v-for="item in 9">
                <img src="../static/images/342719b89256204014b440dffa4c8974.jpg" height="228" width="500"/>
                <p>你是猪</p>
                <span>￥500</span>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
    export default{

    }
</script>
<style type="text/css" scoped>
    .ulbox{
        width:375px;
        overflow-y:hidden;
        box-sizing: border-box;
    }
    .small ul{
        width:1350px;
        background:white;
        text-align: center;

    }
    /*要改要改要改*/
     /*要改要改要改*/
      /*要改要改要改*/
    .small ul{
        width:1350px;
        background:white;
        text-align: center;

    }
    
    .small ul li{
        box-sizing: border-box;
        width:150px;
        height:210px;
        float:left;
        padding:10px 5px;
    }
     .small ul li img{
        height:130px;
        width:130px;
        
    }
     .small ul li p,.big ul li p{
        font-size: 16px;
        color:#333;
    }
    .small ul li span{
        color:red;
        display:block;
    }
    
    .big ul{
        width:1250px;
        background:white;
        text-align: center;
        height:320px;
    }
    .big ul span{
        color:red;
    }
    .big ul li{
        box-sizing: border-box;
        width:250px;
        height:320px;
        float:left;
        padding:15px;
    }
    .big ul li img{
        width:220px;
        height:220px;
    }
    /*list的ul样式*/
    /*.bottom ul{
        width:100%;
        background:white;
        text-align: center;
        
    }
    .bottom ul span{
        color:red;
    }
    .bottom ul li{
        box-sizing: border-box;
        width:182px;
        height:274px;
        float:left;
        padding:15px;
    }
    .bottom ul li img{
        width:172px;
        height:172px;
    }
    .bottom ul li:nth-child(odd){
        margin-right: 10px;
    }*/

</style>