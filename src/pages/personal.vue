<template>
  <div>
    <div class="box_top">
      <img src="../static/picture/user_default_bg.jpg" alt class="Images">
      <div class="ink-member-info">
        <div class="thumb">
          <a href="javascript:;">
            <img class="myThumb" :src="'../static/images/default_user_icon.png'">
          </a>
        </div>
        <div class="nick">
          <a class="sortNick2" href="javascript:;">
            <div class="short-nick"></div>
          </a>
          
          <a class="mui-btn mui-tab-item" href="javascript:;">登录/注册</a>
        </div>
        <ul class="info">
          <li class="mui-pull-left">
            <a href="javascript:;">
              <div>关注</div>
              <p>0</p>
            </a>
          </li>
          <li class="mui-pull-left">
            <a href="javascript:;">
              <div>粉丝</div>
              <p>0</p>
            </a>
          </li>
          <li class="mui-pull-left">
            <div>动态</div>
            <p>0</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="mui-table-view ink-view">
      <ul class="ink-member-action">
        <li class="mui-pull-left lg">
          <a href="javascript:;">
            <span class="mui-icon ink-icon iconfont icon-edit"></span>
            <span class="title">订单</span>
          </a>
        </li>
        <li class="mui-pull-left lg" @click="gotoTwo">
          <a href="javascript:;">
            <span class="mui-icon ink-icon iconfont icon-cart"></span>
            <span class="title">购物车</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- 分割线 -->
    <div class="mui-table-view ink-view">
      <ul class="ink-member-action" id="info2">
        <li class="mui-pull-left sm">
          <a href="javascript:;">
            <span class="mui-icon ink-icon iconfont icon-address"></span>
            <span class="title">地址</span>
          </a>
        </li>
        <li class="mui-pull-left sm">
          <a href="javascript:;" class="mui-tab-item">
            <span class="mui-icon ink-icon iconfont icon-user"></span>
            <span class="title">账户</span>
          </a>
        </li>
        <li class="mui-pull-left sm">
          <a href="javascript:;">
            <span class="mui-icon ink-icon iconfont icon-favorite"></span>
            <span class="title">收藏</span>
          </a>
        </li>
        <li class="mui-pull-left sm">
          <a href="javascript:;" class="webAction">
            <span class="mui-icon ink-icon iconfont icon-service"></span>
            <span class="title">客服</span>
          </a>
        </li>
        <li class="mui-pull-left sm">
          <a class="waiting">
            <span class="mui-icon ink-icon iconfont icon-ar"></span>
            <span class="title">AR</span>
          </a>
        </li>
        <li class="mui-pull-left sm">
          <a href="javascript:;" class="mui-tab-item">
            <span class="mui-icon ink-icon iconfont icon-setup"></span>
            <span class="title">设置</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goto() {
      this.$router.push({ name: "LOGIN" });
    },
    gotoTwo() {
      this.$router.push({ name: "SHOPPINGCART", query: { id: "123" } });
    }
  }
};
</script>
<style scoped lang="scss">
.box_top {
  position: relative;
  height: 187.5px;
  background: #777777;
  .Images {
    width: 100%;
    height: 100%;
    opacity: 0.35;
  }
}
.ink-member-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.thumb {
  position: absolute;
  top: 40px;
  left: 30px;
  width: 70px;
  height: 70px;
  border-radius: 70px;
  border: 1px solid #aaaaaa;
  overflow: hidden;
}
a {
  text-decoration: none;
  color: #007aff;
}
.myThumb {
  width: 100%;
}
img {
  border: 0;
}
.nick {
  position: absolute;
  top: 130px;
  left: 15px;
  text-align: center;
  color: #ffffff;
  font-size: 14px;
  width: 100px;
}
.mui-btn,
button,
input[type="button"],
input[type="reset"],
input[type="submit"] {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  position: relative;
  display: inline-block;
  margin-bottom: 0;
  padding: 6px 12px;
  cursor: pointer;
  -webkit-transition: all;
  transition: all;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  text-align: center;
  vertical-align: top;
  white-space: nowrap;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: #fff;
  background-clip: padding-box;
}
ul {
  padding-left: 0px;
  margin: 0px;
  overflow: hidden;
}
.info {
  position: absolute;
  top: 45px;
  left: 120px;
  width: 225px;
  height: 60px;
  font-size: 14px;
  font-weight: 300;
  li {
    width: 75px;
  }

  .mui-pull-left {
    float: left;
  }
  li {
    list-style: none;
  }
  div {
    border-left: none;
    text-align: center;
    height: 30px;
    line-height: 30px;
    color: #ffffff;
  }
  p {
    color: #fff;
    margin-top: 10px;
    text-align: center;
  }
}
</style>
