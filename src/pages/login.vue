<template>
	<div class="login">
		<div id="tabbar-with-login" class="mui-control-content mui-active">
				<header class="mui-bar mui-bar-nav ink-bar ink-bar-login-reg">
					<a class="ink-icon iconfont icon-left mui-pull-left mui-tab-item" href="javascript:;"></a>
					<a class="mui-pull-right ink-login-reg mui-tab-item mui-active" href="javascript:;"> <strong>登录</strong> <span>注册</span> </a>
				</header>
				<div class="mui-card" style="margin-top: 200px;">
					<div id="login" class="mui-card-content">
						<form class="mui-input-group">
							<div class="mui-input-row"> <label><span class="mui-icon mui-icon-email"></span></label> <input id="account" type="text" class="mui-input-clear mui-input" placeholder="请输入邮箱" data-input-clear="1"><span class="mui-icon mui-icon-clear mui-hidden"></span> </div>
							<div class="mui-input-row mui-password"> <label><span class="mui-icon mui-icon-locked"></span></label> <input id="password" type="password" class="mui-input-password" placeholder="请输入密码" data-input-password="2"><span class="mui-icon mui-icon-eye"></span> </div>
							<div class="mui-input-row" id="showCode" style="display:none;"> <label><span class="mui-icon mui-icon-camera"></span></label> <input id="code" type="text" class="mui-input" placeholder="请输入验证码" style="width:45%;float:left;"> <img src="" id="codeImg" style="margin-top:5px;float:right;"> </div>
						</form>
					</div>
				</div>
				<a class="mui-btn mui-btn-ink mui-btn-block">登录</a>
				<hr>
				<ul class="third-login">
					<li class="mui-pull-left mui-text-right">
						<a href="javascript:;"> <span class="ink-icon iconfont icon-alipay text-secondary"></span> </a>
					</li>
					<li class="mui-pull-left mui-text-center">
						<a href="javascript:;"> <span class="ink-icon iconfont icon-weibo text-danger"></span> </a>
					</li>
					<li class="mui-pull-left mui-text-left">
						<a href="javascript:;"> <span class="ink-icon iconfont icon-qq text-primary"></span> </a>
					</li>
				</ul>
			</div>
		<div id="tabbar-with-register" class="mui-control-content ">
				<header class="mui-bar mui-bar-nav ink-bar-login-reg">
					<a class="ink-icon iconfont icon-left mui-pull-left mui-tab-item" href="javascript:;"></a>
					<a class="mui-pull-right ink-login-reg mui-tab-item" href="javascript:;"> <span>登录</span> <strong>注册</strong> </a>
				</header>
				<div class="mui-card" style="margin-top: 340px;">
					<div id="register" class="mui-card-content">
						<form class="mui-input-group">
							<div class="mui-input-row"> <label><span class="mui-icon mui-icon-email"></span></label> <input id="reg_email" type="email" class="mui-input-clear mui-input" placeholder="请输入邮箱" data-input-clear="4"><span class="mui-icon mui-icon-clear mui-hidden"></span> </div>
							<div class="mui-input-row"> <label><span class="ink-icon iconfont icon-puzzle"></span></label> <input id="reg_nick" type="text" class="mui-input-clear mui-input" placeholder="请输入昵称" data-input-clear="5"><span class="mui-icon mui-icon-clear mui-hidden"></span> </div>
							<div class="mui-input-row mui-password"> <label><span class="mui-icon mui-icon-locked"></span></label> <input id="reg_pswd" type="password" class="mui-input-password" placeholder="请输入密码" data-input-password="6"><span class="mui-icon mui-icon-eye"></span> </div>
						</form>
					</div>
				</div>
				<a class="mui-btn mui-btn-ink mui-btn-block">注册</a>
			</div>
   </div>
</template>
<script>
import '../static/css/mui.min.css';
import '../static/css/iconfont_2.css';
import '../static/css/inklego_3.css';
export default {
     methods:{
    	backhistory(){
    		console.log(1)
    		history.back();
    	}
    }
}
</script>