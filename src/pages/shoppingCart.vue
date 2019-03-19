<template>
  <div>
    <div id="tabbar-with-list" class="mui-control-content mui-active">
      <header class="mui-bar mui-bar-nav ink-bar">
        <a class="mui-action-back ink-icon iconfont icon-left mui-pull-left"></a>
        <h1 class="mui-title">购物车</h1>
        <a
          href="#tabbar-with-edit"
          class="mui-tab-item ink-icon iconfont icon-trash mui-pull-right"
        ></a>
      </header>
      <nav class="mui-bar mui-bar-tab ink-bar-tab">
        <div class="total mui-text-center text-danger mui-pull-left">
          合计: RMB
          <span id="total">0</span>
        </div>
        <a href="javascript:;" id="checkout" class="check-out mui-text-center mui-pull-right">结算</a>
      </nav>
      <div class="ink-scroll" style="position:fixed;top:44px;bottom:0px;">
        <div class="mui-scroll" style="height:475px;">
          <div class="cart mui-scroll-wrapper mui-slider-indicator mui-segmented-control">
            <ul id="cartLg" class="of" ref="liw" :style="{width:ulw+'px'}">
              <li class="car_box" v-for="(key,idx) in cart" :key="idx">
                <a href="javascript:;">
                  <img src="../static/picture/template_28551_5.png" alt>
                </a>
                <div class="short-nick mui-text-left">
                  <span>{{goods[idx][0].gName}}</span>
                  <p>
                    <small>RMB 49.90</small>
                  </p>
                </div>
                <a href="javasrcipt:;" class="param">
                  <span class="short-nick size">手机壳</span>
                  <span class="short-nick num">X {{key.num}}</span>
                </a>
                <a href="javascript:;" class="select iconfont icon-checked-circle active"></a>
              </li>
              <!-- <li class="car_box">
                <a href="javascript:;">
                  <img src="../static/picture/template_28551_5.png" alt>
                </a>
                <div class="short-nick mui-text-left">
                  <span>2019一夜暴富-黄色</span>
                  <p>
                    <small>RMB 49.90</small>
                  </p>
                </div>
                <a href="javasrcipt:;" class="param">
                  <span class="short-nick size">手机壳</span>
                  <span class="short-nick num">X 2</span>
                </a>
                <a href="javascript:;" class="select iconfont icon-checked-circle active"></a>
              </li>-->
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 数量选择 -->
    <div class="selectGroup">
      <div style="background:#fff;height:100%">
        <h2>数量</h2>
        <div style="padding: 25px 10px;">
          <div class="mui-numbox">
            <button class="up mui-btn-bor">-</button>
            <input type="text" class="input-shui" value="1">
            <button class="next mui-btn-bor">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ulw: 300,
      cart: null,
      goods: null
    };
  },
  methods: {},

  // mounted() {},
  created() {
    this.$axios
      .post("http://localhost:2233/cart", {
        a: "query",
        b: "1414134582@qq.com"
      })
      .then(res => {
        console.log(res);
        this.cart = res.data.cart;
        console.log(this.cart);
        this.goods = res.data.goods;
        console.log(this.goods);
        // 改变ul宽度
        this.$nextTick(() => {
          let wNum = this.$refs.liw.children.length;
          let wu = this.$refs.liw.children[0].offsetWidth + 10;
          this.ulw = wNum * wu;
        });
      });
  }
  // mounted() {

  // }
};
</script>
<style scoped lang="scss">
.ink-bar-tab {
  box-shadow: none;
}
.of::after {
  content: "";
  display: block;
  clear: both;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
#cartLg {
  overflow: hidden;
  width: 9999px;
  height: 472px;
  position: relative;
  margin: 10px 10px;
  img {
    height: 298px;
  }
}
.mui-bar-tab {
  bottom: 0;
  display: table;
  width: 100%;
  height: 50px;
  padding: 0;
  table-layout: fixed;
  border-top: 0;
  border-bottom: 0;
  -webkit-touch-callout: none;
}
.text-danger {
  color: #d93c37 !important;
}

.total {
  width: 67%;
  line-height: 50px;
  font-size: 14px;
}
.check-out {
  width: 33% !important;
  background: #d93c37;
  color: #fff !important;
  display: block;
  line-height: 50px;
}

.mui-pull-right {
  float: right;
}
.mui-text-center {
  text-align: center !important;
}
.car_box {
  width: 300px;
  display: block;
  margin: 5px;
  background: #fff;
  border: 1px solid #ddd;
  position: relative;
  list-style: none;
  float: left;
}
.short-nick {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mui-text-left {
  font-size: 14px;
  margin: 15px 0 10px 15px;
  color: #333;
  text-align: left !important;
}
p {
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 10px;
  color: #8f8f94;
}
small {
  font-size: 80%;
}
.param {
  margin: 5px 15px 25px 15px;
  text-align: left;
  display: block;
  width: auto;
  overflow: hidden;
  font-size: 12px;
  .size {
    border: 1px solid #999;
    border-radius: 20px;
    display: inline-block;
    padding: 2px 10px;
    color: #666;
    max-width: 75px;
  }
  .num {
    display: inline-block;
    padding: 2px 10px;
    color: #666;
  }
}
li .active {
  top: -4px;
  right: -6px;
  color: #ffd71d;
  position: absolute;
  font-size: 24px;
  text-shadow: 0px 0px 2px #000;
}
.hoverac {
  color: #ccc !important;
}
.selectGroup {
  display: none;
  position: absolute;
  bottom: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  z-index: 999;
  box-sizing: border-box;
  padding-top: 140%;
  background: rgba(69, 69, 69, 0.3);
  h2 {
    background: #eee;
    color: #666;
    font-size: 14px;
    margin: 0;
    padding: 10px;
  }
}
.mui-numbox {
  border-radius: 3px;
  vertical-align: middle;
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: 160px;
  height: 35px;
  padding: 0 0px;
  border: none !important;
  background: none;
}
.mui-btn-bor {
  width: 32px;
  height: 32px;
  border-radius: 30px;
  border: 1px solid #ccc;
  font-size: 12px;
}
.input-shui {
  text-align: center;
  width: 60px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  border: none !important;
}
</style>
