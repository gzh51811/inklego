<template>
    <div class="content">
    <div class="swiperbox">
        <el-carousel indicator-position="none"  height="170px" >
            <el-carousel-item v-for="(item,idx) in bannerdata" :key="item.image">
              
                  <img :src="item.image"  />
              
            </el-carousel-item>
      </el-carousel>
      
  </div>
  <div class="jingxuanStore">
          <h4>精选设计商店</h4>
          <p>SELECT STORE</p>
          <ul>
              <li v-for="(item,idx) in designerdata">
                <img :src="item.thumb" height="228" width="500" alt="" />
                <span>{{item.nick}}</span>
                <el-button-group>
                    <el-button type="primary" icon="el-icon-plus" size="mini"></el-button>
                </el-button-group>
              </li>
          </ul>
    </div>
    <div class="hot small">
        <img src="../static/images/hot.jpg"  />
        <storeUL :data="hotdata" v-if="hotdata.length!=0"></storeUL>
        
    </div>
    <div class="new small">
        <img src="../static/images/new.jpg"  />
        <storeUL :data="newdata" v-if="newdata.length!=0"></storeUL>
    </div>
    <div class="fushi big">
        <h4 @click="tiao">服饰<i class="el-icon-caret-right"></i></h4>
        <storeUL :data="clothdata" v-if="clothdata.length!=0"></storeUL>
    </div>
    <div class="dapei big">
        <h4  @click="tiao">搭配<i class="el-icon-caret-right"></i></h4>
        <storeUL :data="dapeidata" v-if="dapeidata.length!=0"></storeUL>
    </div>
    <div class="shuma big">
        <h4 @click="tiao">数码<i class="el-icon-caret-right"></i></h4>
        <storeUL :data="shumadata" v-if="shumadata.length!=0"></storeUL>
    </div>
    <div class="canchu big">
        <h4 @click="tiao">餐厨<i class="el-icon-caret-right"></i></h4>
        <storeUL :data="canchudata" v-if="canchudata.length!=0"></storeUL>
    </div>
    <div class="chuxing big">
        <h4 @click="tiao">出行<i class="el-icon-caret-right"></i></h4>
        <storeUL :data="chuxingdata" v-if="chuxingdata.length!=0"></storeUL>
    </div>
    <div class="wenju big">
        <h4 @click="tiao">文具<i class="el-icon-caret-right"></i></h4>
        <storeUL :data="wenjudata" v-if="wenjudata.length!=0"></storeUL>
    </div>
    <div class="jujia big">
        <h4 @click="tiao">居家<i class="el-icon-caret-right"></i></h4>
        <storeUL :data="jujiadata" v-if="jujiadata.length!=0"></storeUL>
    </div>
    <div class="pinpai big">
        <h4 @click="tiao">品牌<i class="el-icon-caret-right"></i></h4>
        <storeUL :data="pinpaidata" v-if="pinpaidata.length!=0"></storeUL>
    </div>
    </div>
</template>


<script type="text/javascript">
    import storeUL from './storeUL.vue';
    import axios from 'axios';
    export default{
        data(){
            return {
                swiperImg:[
                    {
                        src:'../static/images/342719b89256204014b440dffa4c8974.jpg'
                    },
                    {
                        src:'../static/images/b5f154a7be5efb76e2154c81a952a2a6.png'
                    },
                    {
                        src:'../static/images/bb8c5575de53128c48093725d24da1b1.jpg'
                    },
                    {
                        src:'../static/images/cc65b511cf72f9154d6c3fab03c30186.jpg'
                    },
                    {
                        src:'../static/images/dca575d46f495eea73c65819123aff9a.png'
                    }
                ],
                num:1,
                bannerdata:[],
                designerdata:[],
                hotdata:[],
                alldata:[],
                newdata:[],
                clothdata:[],
                dapeidata:[],
                shumadata:[],
                canchudata:[],
                chuxingdata:[],
                wenjudata:[],
                jujiadata:[],
                pinpaidata:[]
            }
        },
        props:['page','change'],
        
        methods:{

            tiao(e){
                console.log(444);
                switch(e.target.innerText){
                    case '服饰': this.num = 1;break;
                    case '搭配': this.num = 2;break;
                    case '数码': this.num = 3;break;
                    case '餐厨': this.num = 4;break;
                    case '出行': this.num = 5;break;
                    case '文具': this.num = 6;break;
                    case '居家': this.num = 7;break;
                    case '品牌': this.num = 8;break;
                }
                this.$emit("change",this.num);
     
            }
        },
        //获取数据
        created(){
            this.$axios.get(' http://localhost:1822/store').then(res=>{
                
                this.bannerdata = res.data[0].result.banner;
                this.designerdata = res.data[0].result.designer.slice(0,3);
                this.hotdata = res.data[0].result.hot.list;
                this.newdata = res.data[0].result.new.list.slice(0,8);
                this.clothdata = res.data[0].result.cate[0].list;
                this.dapeidata = res.data[0].result.cate[1].list;
                this.shumadata = res.data[0].result.cate[2].list;
                this.canchudata = res.data[0].result.cate[3].list;
                this.chuxingdata = res.data[0].result.cate[4].list;
                this.wenjudata = res.data[0].result.cate[5].list;
                this.jujiadata = res.data[0].result.cate[6].list;
                this.pinpaidata = res.data[0].result.cate[7].list;    
            })
        },
        components:{
            storeUL
        }
    }
</script>

<style type="text/css" scoped>
    .content{

        overflow-x:hidden;
    }
    .swiperbox{
        width:100%;
        height:170px;
    }
    .swiperbox div.el-carousel__container{
         height:170px;
    }
    .el-carousel img{
        height:170px;
        width:auto;
    }
    .jingxuanStore{
        margin-top:25px;
        height:260px;
    }
    .jingxuanStore h4,.jingxuanStore p{
        text-align: center;
    }
    .jingxuanStore ul{
         height:180px;
        box-sizing:border-box;
        padding-top:15px;
    }
    .jingxuanStore ul li{
        height:180px;
        float:left;
        width:33.3%;
        box-sizing:border-box;
        padding:0 20px;
    }
    .jingxuanStore ul img{
        width:78px;
        height:78px;
        border-radius: 50%;
    }
    .jingxuanStore span{
        display: block;
        height:53px;
        width:80px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        line-height: 24px;
        text-align: center;
        
    }
    .jingxuanStore .el-button{
        margin-left:18px;
        color:black;
        background:yellow;
    }
    .jingxuanStore .el-button .el-icon-plus{
        font-size: 30px;;
    }
    .hot{
        background:red;
       height:435px;
       background:pink;
       box-sizing: border-box;
       padding: 20px 0;
      width:375px;
      overflow:hidden;
    }
    .hot>img,.new>img{
        width:375px;
        height:auto;
    }
    .big{
        margin-top:20px;
        background:white;
        height:375px;
        box-sizing: border-box;
        padding-top:15px;
    }
    
    .big h4{
        text-align: center;
        height: 30px;
        line-height: 30px;
    }
    .big h4 i{
        width:20px;
    }

    



    /*隐藏滚轮*/
    ::-webkit-scrollbar {
    display: none;
    }

</style>