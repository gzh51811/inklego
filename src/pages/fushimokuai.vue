<template>
    <div class="kuai">
        <a href="javascript:;" @click="toList">
                <div class="left">
                    <h5>嘛嘛嘛在</h5>
                    <p>嘛嘛嘛<span>111</span>在</p>
                </div>
                <div class="right">
                    >
                </div>
        </a>
        <ul>
            <li v-for="(item,idx) in 3 ">
                <img src="../static/images/b5f154a7be5efb76e2154c81a952a2a6.png"  />
            </li>
        </ul>

    </div>
</template>
<script type="text/javascript">
    export default{
        methods:{
            toList(){
                this.$router.push({path:'/list',query:{id:123}});
               
            }
        }
    }
</script>
<style type="text/css" scoped>
    div.kuai{
        margin-top:15px;
    }
    a{
        display: block;
        width:375px;
        height:70px;
        box-sizing: border-box;
        padding:15px;
    }
    a .left{
        float:left;
         height:70px;
         
    }
    a .left h5{
        font-weight: bold;
        font-size: 16px;
        color:#333;
    }
    a .right{
        float:right;
        height:70px;
        width:20px;
        color:#aaa;
        line-height: 55px;;
    }
    ul{
        width:375px;
    }
    ul li{
        width:33.3%;
        height:130px;
        float:left;
        box-sizing: border-box;
        padding:10px;

    }
    ul li img{
        width:104px;
        height:104px;
    }

</style>