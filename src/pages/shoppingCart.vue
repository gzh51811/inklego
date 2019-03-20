<template>
  <div>
    <div id="tabbar-with-list" class="mui-control-content mui-active">
      <header class="mui-bar mui-bar-nav ink-bar">
        <a class="mui-action-back ink-icon iconfont icon-left mui-pull-left" @click="esc"></a>
        <h1 class="mui-title">购物车</h1>
        <el-button
          class="mui-tab-item ink-icon iconfont icon-trash mui-pull-right"
          type="text"
          @click="open7"
        ></el-button>
        <!-- <a
          href="#tabbar-with-edit"
          class="mui-tab-item ink-icon iconfont icon-trash mui-pull-right"
          type="text"
          @click="open"
        ></a>-->
      </header>
      <nav class="mui-bar mui-bar-tab ink-bar-tab">
        <div class="total mui-text-center text-danger mui-pull-left">
          合计: RMB
          <span id="total" ref="totali">{{total}}</span>
        </div>
        <a
          href="javascript:;"
          id="checkout"
          class="check-out mui-text-center mui-pull-right"
          type="text"
          @click="clear"
        >结算</a>
      </nav>
      <div class="ink-scroll" style="position:fixed;top:44px;bottom:0px;">
        <div class="mui-scroll" style="height:475px;">
          <div
            class="cart mui-scroll-wrapper mui-slider-indicator mui-segmented-control"
            style="width:100vw;overflow-x:auto"
          >
            <ul id="cartLg" class="of" ref="liw" :style="{width:ulw+'px',left:left_+'px'}">
              <li
                class="car_box"
                v-for="(key,idx) in cart"
                :key="idx"
                :data-id="key._id"
                :data-state="key.state"
              >
                <a href="javascript:;">
                  <img :src="`../static/picture/${goods[idx][0].gImg}`" alt>
                </a>
                <div class="short-nick mui-text-left">
                  <span>{{goods[idx][0].gName}}</span>
                  <p>
                    <small>RMB {{goods[idx][0].gPrice}}</small>
                  </p>
                </div>
                <a href="javasrcipt:;" class="param">
                  <span class="short-nick size">{{goods[idx][0].gClassify}}</span>
                  <span class="short-nick num">X {{key.num}}</span>
                </a>
                
                <a
                  href="javascript:;"
                  class="select iconfont icon-checked-circle active"
                  :class="key.state=='1'?'hoverac':''"
                  @click="cut(goods[idx][0].gPrice,key.num,$event)"
                ></a>
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
  inject: ["reload"],
  data() {
    return {
      ulw: 300,
      cart: null,
      goods: null,
      left_: 0,
      total: 0,

    };
  },
  methods: {
    esc() {
      history.back();
    },
    cut(price, num, ev) {
      // 价位
      let totality = parseInt(this.$refs.totali.innerText);
      let g_tota = price * num;
      // console.log(totality, g_tota);
      // 更改状态
      let state = 0;
      if (ev.target.classList.contains("hoverac")) {
        ev.target.classList.remove("hoverac");
        ev.path[1].dataset.state = "0";
        state = ev.path[1].dataset.state;
        // console.log(ev.path[1].dataset.id);
        // 总价减
        this.total = parseInt(totality - price * num).toFixed(2);

      } else {
        ev.target.classList.add("hoverac");
        ev.path[1].dataset.state = "1";
        state = ev.path[1].dataset.state;
        // 计算总价
        this.total = parseInt(totality + price * num).toFixed(2);
      }
      // console.log(this.$refs);
      this.$axios.post("http://localhost:2233/cart", {
        a: "revamp",
        id: ev.path[1].dataset.id,
        state: state
      })
        .then(res => { });
      // console.log("tota" + price, num, ev);
    },
    // 删除
    open7() {
      if (this.total > 0) {
        this.$confirm('此操作将永久删除商品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          showClose: false,
          roundButton: true,
          center: true
        }).then(() => {
          this.$axios
            .post("http://localhost:2233/cart", {
              a: "remover"
            })
            .then(res => {
              // 刷新当前页面
              console.log(res)
              this.reload();
            });
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }

    },

    // 结算
    clear() {
      if (this.total > 0) {
        // alert("暂未开通此功能")
      }
    }


  },
  computed: {},
  beforeCreate() {
    this.$loading();
  },
  // mounted() {},
  created() {
    this.$axios.post("http://localhost:2233/cart", {
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
          try {
            let wNum = this.$refs.liw.children.length;
            let wu = this.$refs.liw.children[0].offsetWidth + 10;
            this.ulw = wNum * wu;
          } catch (error) {
            console.log("没有商品");
          }
        });

        // 取消遮盖
        this.$loading().close();
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
  color: #ccc;
  position: absolute;
  font-size: 24px;
  text-shadow: 0px 0px 2px #000;
}
.hoverac {
  color: #ffd71d !important;
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
.dota {
  width: 30px;
  height: 30px;
  position: absolute;
  right: -3%;
  top: -3%;
}
@import url("//unpkg.com/element-ui@2.6.0/lib/theme-chalk/index.css");
</style>
