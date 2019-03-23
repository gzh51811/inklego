<template>
  <div class="ink-content">
    <div id="tabbar-with-info" class="mui-control-content mui-active">
      <nav class="mui-bar mui-bar-tab ink-bar-tab" v-show="luyou">
        <a class="mui-tab-item" href="javascript:;" v-for="(nav,idx) in navs">
          <svg class="icon" aria-hidden="true" @click="goto(nav)">
            <use :href="nav.tubiao"></use>
          </svg>
        </a>
      </nav>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
/**
 * $router：路由实例，具有跳转等方法
 * $route：当前路由信息，保存当前路由的参数
 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './static/css/mui.min.css';
import './static/css/iconfont.css';
import './static/css/inklego.css';

import './static/js/iconfont.js';
import axios from "axios";
import Mint from 'mint-ui';
Vue.use(Mint);
// ElementUI以插件的形式来扩展Vue的功能
Vue.use(ElementUI);
var axios_ = axios.create({
  // baseURL: '../'
  baseURL: 'http://localhost:1822'
});
var ax = axios.create({
  // baseURL: '../'
  baseURL: 'http://localhost:1822'
});
// 把axios设置到Vue的原型对象上，方便在任意组件中使用
Vue.prototype.$axios = axios_;
Vue.prototype.$ax = ax;

export default {
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true,
      navs: [{
        text: '商店',
        name: 'STORE',
        tubiao: '#icon-store2',

      },
      {
        text: '预售',
        name: 'FUND',
        tubiao: '#icon-presale',

      },
      {
        text: '设计师',
        name: 'DESIGNER',
        tubiao: '#icon-artiste',

      },
      {
        text: '客服',
        name: 'SERVICE',
        tubiao: '#icon-msg',

      },
      {
        text: '个人信息',
        name: 'PERSONAL',
        tubiao: '#icon-my',
      }],
      activeIndex: 0,
      active: 'ink-scroll'
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
    goto(nav) {
      this.$router.push({ name: nav.name });
      console.log(this.$route.name)
      // this.$router.push({path:nav.path})
    }
  },
  computed: {
    navName() {
      let nv = true;
      if (this.$route.name == "SHOPPINGCART") {
        nv = false;
      }
      return nv;
    },
    luyou() {
      for (var i = 0; i < this.navs.length; i++) {
        if (this.navs[i].tubiao.slice(-1) == 2) {
          this.navs[i].tubiao = this.navs[i].tubiao.slice(0, -1)
        }
      }
      let luyouName = this.$route.name
      switch (luyouName) {
        case "STORE": this.navs[0].tubiao += '2'; break;
        case "FUND": this.navs[1].tubiao += '2'; break;
        case "DESIGNER": this.navs[2].tubiao += '2'; break;
        case "SERVICE": this.navs[3].tubiao += '2'; break;
        case "PERSONAL": this.navs[4].tubiao += '2'; break;
      }
      if (luyouName == 'FUND' || luyouName == 'STORE' || luyouName == 'SERVICE' || luyouName == 'DESIGNER' || luyouName == 'PERSONAL') {
        return true;
      } else {
        return false;
      }

    }
  }

}
</script>

<style >
.ink-nav {
  height: 40px;
  background: #fff;
  border: none;
  z-index: 10;
}
::-webkit-scrollbar {
  display: none;
}
</style>
