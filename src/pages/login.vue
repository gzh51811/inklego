<template>
  <div class="login">
    <header class="mui-bar mui-bar-nav ink-bar ink-bar-login-reg">
      <a
        @click="backhistory"
        class="ink-icon iconfont icon-left mui-pull-left mui-tab-item"
        href="javascript:;"
      ></a>
      <a
        class="mui-pull-right ink-login-reg mui-tab-item mui-active"
        href="javascript:;"
        @click="login"
      >
        <strong>登录</strong>
        <span>注册</span>
      </a>
    </header>
    <div id="tabbar-with-login" v-bind:class="{'mui-control-content':true,'mui-active':status}">
      <div class="mui-card" style="margin-top: 200px;">
        <div id="login" class="mui-card-content">
          <form class="mui-input-group">
            <div class="mui-input-row">
              <label>
                <span class="mui-icon mui-icon-email"></span>
              </label>
              <input
                @change="emailL"
                id="account"
                type="text"
                class="mui-input-clear mui-input"
                placeholder="请输入邮箱"
                data-input-clear="1"
                v-model="emailLogin"
              >
              <span class="mui-icon mui-icon-clear mui-hidden"></span>
            </div>
            <div class="mui-input-row mui-password">
              <label>
                <span class="mui-icon mui-icon-locked"></span>
              </label>
              <input
                @change="pswL"
                id="password"
                type="password"
                class="mui-input-password"
                placeholder="请输入密码"
                data-input-password="2"
                v-model="pswLogin"
              >
              <span class="mui-icon mui-icon-eye"></span>
            </div>
            <div class="mui-input-row" id="showCode">
              <label>
                <span class="mui-icon mui-icon-camera"></span>
              </label>
              <input
                @change="yzmL"
                id="code"
                type="text"
                class="mui-input"
                placeholder="请输入验证码"
                style="width:45%;float:left;"
                v-model="yzmLogin"
              >
              <span style="display:inline-block;padding:10px 20px;">{{suijishu}}</span>
            </div>
          </form>
        </div>
      </div>
      <a class="mui-btn mui-btn-ink mui-btn-block" @click="btnLogin">登录</a>
      <hr>
      <ul class="third-login">
        <li class="mui-pull-left mui-text-right">
          <a href="javascript:;">
            <span class="ink-icon iconfont icon-alipay text-secondary"></span>
          </a>
        </li>
        <li class="mui-pull-left mui-text-center">
          <a href="javascript:;">
            <span class="ink-icon iconfont icon-weibo text-danger"></span>
          </a>
        </li>
        <li class="mui-pull-left mui-text-left">
          <a href="javascript:;">
            <span class="ink-icon iconfont icon-qq text-primary"></span>
          </a>
        </li>
      </ul>
    </div>
    <div id="tabbar-with-register" v-bind:class="{'mui-control-content':true,'mui-active':!status}">
      <div class="mui-card" style="margin-top: 340px;">
        <div id="register" class="mui-card-content">
          <form class="mui-input-group">
            <div class="mui-input-row">
              <label>
                <span class="mui-icon mui-icon-email"></span>
              </label>
              <input
                @change="emailR"
                id="reg_email"
                type="email"
                class="mui-input-clear mui-input"
                placeholder="请输入邮箱"
                data-input-clear="4"
                v-model="emailReg"
                ref='emailR'
              >
              <span class="mui-icon mui-icon-clear mui-hidden"></span>
            </div>
            <div class="mui-input-row">
              <label>
                <span class="ink-icon iconfont icon-puzzle"></span>
              </label>
              <input
                @change="nickR"
                id="reg_nick"
                type="text"
                class="mui-input-clear mui-input"
                placeholder="请输入昵称"
                data-input-clear="5"
                v-model="nickReg"
                ref='nickR'
              >
              <span class="mui-icon mui-icon-clear mui-hidden"></span>
            </div>
            <div class="mui-input-row mui-password">
              <label>
                <span class="mui-icon mui-icon-locked"></span>
              </label>
              <input
                @change="pswR"
                id="reg_pswd"
                type="password"
                class="mui-input-password"
                placeholder="请输入密码"
                data-input-password="6"
                v-model="pswReg"
                ref='pswR'
              >
              <span class="mui-icon mui-icon-eye"></span>
            </div>
          </form>
        </div>
      </div>
      <a class="mui-btn mui-btn-ink mui-btn-block" @click="btnReg">注册</a>
    </div>
    <div :class="{'mui-toast-container':true,'mui-active':msgOK}"><div class="mui-toast-message">{{msg}}</div></div>
  </div>
</template>
<script>
import '../static/css/mui.min.css';
import '../static/css/iconfont_2.css';
import '../static/css/inklego_3.css';
import Qs from 'qs'
export default {
  data() {
    return {
      status: true,
      emailReg: '',
      nickReg: '',
      pswReg: '',
      emailLogin: '',
      pswLogin: '',
      yzmLogin: '',
      emailRegOK: false,
      nickRegOK: false,
      pswRegOK: false,
      emailLoginOK: false,
      pswLoginOK: false,
      yzmLoginOK: false,
      msg:'',
      msgOK:false
    }
  },
  computed: {
    suijishu() {
      function randomNum(min, max) {
        return parseInt(Math.random() * (max - min + 1)) + min;
      }
      var str = '';
      var str2 = '0123456789zxcvbnmlkjhgfdsaqwertyuiopZXCVBNMLKJHGFDSAQWERTYUIOP';
      for (var i = 0; i < 4; i++) {
        var num = randomNum(0, str2.length - 1);
        str += str2.charAt(num);
      }
      return str;
    }
  },
  beforeCreate() {
    let _token = localStorage.getItem('token');
    // console.log("_token" + _token);

    // token验证方式
    if (_token) {
      // 判断本地是否有token
      this.$axios.post("/tokenverify",
        { token: _token }).then(res => {
          if (res.data.status == 200) {
            this.$router.push({ name: 'STORE' })
          }
        });
    }
  },
  methods: {
    open(val) {
      this.$alert(val, '', {
        center: true,
        confirmButtonText: '确定',
      });
    },
    nikenameYZ(str) {
      var reg = /^[\u2E80-\u9FFF]+$/
      return reg.test(str);
    },
    emailYZ(str) {//邮箱正则
      var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;//网上推荐
      return reg.test(str);
    },
    psweasyYZ(str) {//6-18位
      var reg = /^\w{6,17}$/;
      return reg.test(str);
    },
    backhistory() {
      //  		this.$router.push({name:'STORE'});
      history.back()

    },
    login() {
      return this.status = (!this.status)
    },

    //验证用户名是否存在
    emailR() {
      console.log(this.emailReg)
      if (this.emailReg) {
        if (this.emailYZ(this.emailReg)) {
          this.$axios.get("/user_add/username", {
            params: {
              name: this.emailReg
            }
          }).then(res => {
            if (res.data == 'yes') {
              this.emailRegOK = true;
            } else {
              this.emailRegOK = false;
               this.msg='邮箱格式已存在';
              this.msgOK=true;
            }
            var timer=setTimeout(()=>{
            	 this.msgOK=false; 
            	 clearTimeout(timer);
            },1000)
           
          });
        } else {

          this.emailRegOK = false;
          this.msg='邮箱格式有误';
           this.msgOK=true;
        }
      } else {

        this.emailRegOK = false;
        this.msg='邮箱格式不能为空';
        this.msgOK=true;
      }
				 var timer=setTimeout(()=>{
            	 this.msgOK=false;
            	 clearTimeout(timer);
            },1000)
           
    },
    //昵称验证
    nickR() {
      if (this.nickReg) {
        if (this.nikenameYZ(this.nickReg)) {
          this.nickRegOK = true;
        } else {
          this.nickRegOK = false; 
          this.msg='请输入中文，不能有其它字符';
					  this.msgOK=true;
         
        }
      } else {
        this.nickRegOK = false;
        this.msg='昵称不能为空';
				 this.msgOK=true;
      }
      var timer=setTimeout(()=>{
            	 this.msgOK=false; 
            	 clearTimeout(timer);
            },1000)
    },
    //密码注册
    pswR() {
      if (this.pswReg) {
        if (this.psweasyYZ(this.pswReg)) {
          this.pswRegOK = true;       
        } else {
          this.pswRegOK = false;
          this.msg='请输入6到18的字母、数字或下划线';
					this.msgOK=true;
        }
      } else {
        this.pswRegOK = false;
        this.msg='密码不能为空';
				this.msgOK=true;
      }
       var timer=setTimeout(()=>{
            	 this.msgOK=false; 
            	 clearTimeout(timer);
            },1000)
    },
    btnReg() {
      console.log(this.emailRegOK && this.nickRegOK && this.pswRegOK)
      if (this.emailRegOK && this.nickRegOK && this.pswRegOK) {
        this.$axios.post("/user_add/insert", {
          name: this.emailReg,
          nickname: this.nickReg,
          password: this.pswReg

        })
          .then(res=>{	
							this.msg='注册成功';
							this.msgOK=true;
							 var timer=setTimeout(()=>{
            	 this.msgOK=false; 
            	 clearTimeout(timer);
            },1000)
							if(res.data.ok==1){
								this.$axios.post("/login", {
								          name:this.emailReg,
								          password: this.pswReg
								        })
								          .then(res => {							   
								              localStorage.setItem('user', res.data.name);
								              localStorage.setItem('token', res.data.token);
								              this.$router.push({ name: 'STORE' })							            
								          })
							}
          })
      } else {
					this.msg='请重新检查各项';
					this.msgOK=true;
      }
      var timer=setTimeout(()=>{
            	 this.msgOK=false; 
            	 clearTimeout(timer);
            },1000)
    },
    //登录部分
    //1 验证用户名格式
    emailL() {

      if (this.emailLogin) {
        if (this.emailYZ(this.emailLogin)) {
          this.emailLoginOK = true;
        } else {
          this.emailLoginOK = false;
          this.msg='邮箱格式有误';
					this.msgOK=true;
        }
      } else {

        	this.emailLoginOK = false;
         	this.msg='邮箱不能为空';
					this.msgOK=true;
      }
      var timer=setTimeout(()=>{
            	 this.msgOK=false; 
            	 clearTimeout(timer);
            },1000)

    },
    //密码验证
    pswL() {
      if (this.pswLogin) {
        this.pswLoginOK = true;
      } else {
        this.pswLoginOK = false;
         this.msg='密码不能为空';
					this.msgOK=true;
      }
      var timer=setTimeout(()=>{
            	 this.msgOK=false; 
            	 clearTimeout(timer);
            },1000)
    },
    yzmL() {
      if (this.yzmLogin) {
        if (this.yzmLogin.toLowerCase() == this.suijishu.toLowerCase()) {
          this.yzmLoginOK = true;
        } else {
          this.yzmLoginOK = false;
           this.msg='验证码错误';
						this.msgOK=true;
        }
      } else {
        	this.yzmLoginOK = false;
        	this.msg='请输入验证码';
					this.msgOK=true;
      }
       var timer=setTimeout(()=>{
            	 this.msgOK=false; 
            	 clearTimeout(timer);
            },1000)
    },
    btnLogin() {
      if (this.emailLoginOK && this.pswLoginOK && this.yzmLoginOK) {
        this.$axios.post("/login", {
          name: this.emailLogin,
          password: this.pswLogin
        })
          .then(res => {
            if (res.data.code == 100) {
              this.open();
              this.msg='邮箱与密码不匹配';
							this.msgOK=true;
							 var timer=setTimeout(()=>{
            	 this.msgOK=false; 
            	 clearTimeout(timer);
            },1000)
            } else if (res.data.code == 200) {
              localStorage.setItem('user', res.data.name);
              localStorage.setItem('token', res.data.token);
              this.$router.push({ name: 'STORE' })
            }
          })
      } else {
       		this.msg='各项都不能为空';
					this.msgOK=true;
      }
       var timer=setTimeout(()=>{
            	 this.msgOK=false; 
            	 clearTimeout(timer);
            },1000)
    }
  }
}
</script>
