<template>
  <div class="ulbox">
    <ul>
      <li v-for="(item,idx) in data" @click="dianji(idx)">
        <img :src="item.picture">
        <p>{{item.title}}</p>
        <span>￥{{item.price}}.00</span>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
export default {
  props: ["data"],
  data() {
    return {
      num: this.data,
      goodid: null
    }
  },
  methods: {
    dianji(idx) {

      this.goodid = this.data[idx].id;

      this.$router.push({ path: '/goodsXQ/', query: { id: this.goodid } });

    }
  },
  mounted() {


    // this.route = this.$route.query.leixing;
    // console.log("路由",this.route);
    //根据不同的路由渲染不同的数据
    // this.$axios.get(' /list/'+this.route).then(res=>{
    // this.alldata = res.data[0].result;

    // });

  },

}

</script>
<style type="text/css" scoped>
.ulbox {
  width: 375px;
  overflow-y: hidden;
  box-sizing: border-box;
}
.small ul {
  width: 1350px;
  background: white;
  text-align: center;
}
/*要改要改要改*/
/*要改要改要改*/
/*要改要改要改*/
.new ul {
  width: 1200px;
  background: white;
  text-align: center;
}

.small ul li {
  box-sizing: border-box;
  width: 150px;
  height: 210px;
  float: left;
  padding: 10px 5px;
}
.small ul li img {
  height: 130px;
  width: 130px;
}
.small ul li p,
.big ul li p {
  font-size: 16px;
  color: #333;
}
.small ul li span {
  color: red;
  display: block;
}

.big ul {
  width: 1250px;
  background: white;
  text-align: center;
  height: 320px;
}
.big ul span {
  color: red;
}
.big ul li {
  box-sizing: border-box;
  width: 250px;
  height: 320px;
  float: left;
  padding: 15px;
}
.big ul li img {
  width: 220px;
  height: 220px;
}

p {
  text-overflow: ellipsis;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
}
</style>
