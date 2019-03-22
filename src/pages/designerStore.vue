<template>
  <div>
    <div class="content">
      <div class="content_header">
        <div class="content_header_t">
          <a @click="back" class="ink-icon iconfont icon-left mui-pull-left mui-action-back"></a>
          <a @click="backstore" class="backhome webAction" href="javascript:;">
            <span class="mui-icon mui-icon-home"></span>
          </a>
          <a class="mui-btn mui-btn-outlined" id="downloadapp">下载APP</a>
        </div>

        <img :src="this.store.banner" style="height:180px;">
        <img :src="this.store.thumb" class="name" style="height:100px;" alt>
        <h4 class="artiste-nick">{{this.store.nick}}</h4>
        <ul class="artiste-follow">
          <li class="mui-pull-left">
            <span>{{this.store.tagId}}</span>关注
          </li>
          <li class="mui-pull-left">
            <span>{{this.store.fansCount}}</span>粉丝
          </li>
        </ul>
        <div class="artiste-btn">
          <a
            @click="guanzhu"
            href="javascript:;"
            class="mui-btn mui-btn-outlined iconfont icon-plus mui-tab-item"
          >&nbsp;&nbsp;关注&nbsp;&nbsp;</a>
        </div>
        <ul class="biaoti">
          <div class="mui-col-xs-6 mui-pull-left">
            <a class="mui-control-item select-goods mui-active" id="selectGoods" href="#goods">
              <div>商品</div>
              <div class="goods-qty">{{this.length}}</div>
            </a>
          </div>
          <div class="mui-col-xs-6 mui-pull-left">
            <a class="mui-control-item select-goods" id="selectPresale" href="#presale">
              <div>预售</div>
              <div class="presale-qty">1</div>
            </a>
          </div>
        </ul>
        <ul class="dlist">
          <li v-for="(item,idx) in this.product" @click="designerGoods(idx)">
            <img :src="item.picture">
            <p>{{item.title}}</p>
            <p>￥{{item.price.toFixed(2)}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      store: '',
      length: 0,
      product: {}
    }
  },

  beforeCreate() {
    let { id } = this.$route.query
    console.log(id);
    this.$axios.get("/designer/store", {
      params: {
        id
      }
    }).then(res => {
      let data = res.data[0]
      this.store = data;
      this.product = data.product;
      this.length = data.product.length;

    });
  },
  methods: {
    back() {
      this.$router.push({ name: 'DESIGNER' })
    },
    backstore() {
      this.$router.push({ name: 'STORE' })
    },
    guanzhu() {
      let _token = localStorage.getItem('token');
      if (_token) {
        this.$axios.post("/tokenverify",
          { token: _token }).then(res => {
            if (res.data.status == 200) {
              //粉丝量加1
              console.log("已关注")

            } else {
              this.$router.push({ name: 'LOGIN' });
            }
          });
      } else {
        this.$router.push({ name: 'LOGIN' });
      }
    },
    designerGoods(idx) {
      let id = this.store.id;

      console.log(this.store.product[idx].id)

      this.$router.push({ path: '/goodsXQ/', query: { id: this.store.product[idx].id } });
    }
  }
}
</script>
<style scoped lang="scss">
.content {
  top: 0px;
  bottom: 0px;
  position: fixed;
  overflow-x: hidden;
  width: 376px;
  background: #fff;
}
.content_header {
  .content_header_t {
    position: absolute;
    top: 0;
    text-align: center;
    a {
      display: inline-block;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: beige;
      margin: 10px 8px;
    }
    a:nth-child(1) {
      margin-right: 200px;
    }
    a:last-child {
      width: 80px;
      height: 30px;
      border-radius: 0;
    }
  }
  .name {
    border-radius: 50%;
    position: absolute;
    top: 27%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .artiste-nick {
    text-align: center;
    margin-top: 66px;
    height: 20px;
    /*line-height: 20px;*/
  }
  .artiste-follow {
    width: 200px;
    margin: 20px 100px;
    li {
      margin: 0 20px;
      span {
        color: red;
      }
    }
  }
  .artiste-btn {
    text-align: center;
    margin: 20px 0;
  }
  .biaoti {
    border: 1px solid #ccc;
    text-align: center;
    a {
      color: black;
    }
  }
  .dlist {
    li {
      float: left;
      width: 178px;
      height: 274px;
      margin: 5px;

      img {
        width: 180px;
      }
    }
  }
}
</style>
