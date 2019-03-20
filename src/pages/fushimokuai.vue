<template>
    <div class="kuai">
        <a href="javascript:;" @click="toList">
                <div class="left">
                    <h5>{{data.title}} / {{data.etitle}}</h5>
                    <p><span>{{data.count}}</span>款设计</p>
                </div>
                <div class="right">
                    >
                </div>
        </a>
        <ul>
            <li v-for="(item,idx) in data.product" @click="toXQ(idx)">
                <img :src="item.picture"  />
            </li>
        </ul>

    </div>
</template>
<script type="text/javascript">
    export default{
        props:['data'],

        data(){
            return{
                num:this.data
            }
        },
        methods:{
            toXQ(idx){
                console.log(this.data.product[idx].id);
                console.log(idx);
                this.$router.push({path:'/goodsXQ/',query:{id:this.data.product[idx].id}});
            },
            
            toList(e){

                //点击a标签，可以获取到data的etitle，然后以这个为路由传过去
                console.log("data",this.data.etitle);
                this.$router.push({path:'/list',query:{leixing:this.data.etitle}})
                
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