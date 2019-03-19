<template>
    <div>
        <header class="mui-bar mui-bar-nav ink-bar-header">
					<h1 class="mui-title">设计师</h1>
					<p class="ink-sub-title">DESIGNER</p>
		</header>
		<div class="content">
			<div id="title">
					<ul class="title_content">
						<li><p>知名品牌</p><p>FAMOUS BRAND</p></li>
						<li><p>漫画插画</p><p>CARTOON ILLUSTRATION</p></li>
						<li><p>人气博主</p><p>POPULAR BLOGGER</p></li>
						<li><p>文创娱乐</p><p>CULTURAL RECREATION</p></li>
						<li><p>书法字设</p><p>CALLIGRAPHY DESIGN</p></li>
						<li><p>明星应援</p><p>STAR WHO</p></li>				
					</ul>
			</div>
			<div class="designer_title">
					<h4>精选商店</h4>
					<p>SELECTED STORE</p>
				</div>
			<div id="designer">
				<ul v-for="(list,idx) in this.designerList.data">
					<li @click='DList(list.id)'><img :src="list.thumb" style="height:70px" alt="" /></li>
					<li @click='DList(list.id)'>{{list.nick}}</li>
					<li><span class="tag">{{list.tag}}</span></li>
					<li @click='guanzhu'><span class="ink-icon iconfont icon-plus"></span>
						<p><small>{{list.fansCount}}人关注</small></p>
					</li>
					<li  @click="designerGoods(list.id,0)"><img :src="list.product[0].picture" style="height:70px" alt="" /></li>
					<li @click="designerGoods(list.id,1)"><img :src="list.product[1].picture" style="height:70px" alt="" /></li>
					<li @click="designerGoods(list.id,2)"><img :src="list.product[2].picture" style="height:70px" alt="" /></li>
					<li @click='DList(list.id)'><div class="text-danger">{{list.dtCount}}</div>
						<p><small>more</small></p>
					</li>
				</ul>			
			</div>
		</div>
    </div>
</template>
<script>

export default {
	data(){
		return {
			designerList:''
		}
	},
  beforeCreate(){
  		this.$axios.get("http://localhost:1822/designer/init", {
				    }).then(res=>{				     	
			this.designerList=res;
		 });			     
  },
  methods:{
  	guanzhu(){
  		let _token=localStorage.getItem('token');
	    if(_token){
	        this.$axios.post("http://localhost:1822/tokenverify", 
	        		{token:_token}).then(res=>{
					     	if(res.data.status==200){
					    		//粉丝量加1
					    		console.log("已关注")
					    		
					     	}else{
					     		this.$router.push({name:'LOGIN'});     		
					     	}
					     });
	    }else{
	    	this.$router.push({name:'LOGIN'});  
	    }
  	},
  	DList(id){
  		this.$router.push({name:'DESIGNERSTORE',query:{id}});   
  		
  	},
  	designerGoods(id,idx){
  		this.$router.push({name:'DESIGNERGOODS',query:{id,idx}});
  	}
  }
}
</script>
<style scoped lang="scss">

.content{
				top: 55px;
			    bottom: 50px;
			    position: fixed;
			    overflow-x: hidden;
			    background: #fff;
}
#title{
	width: 970px;
	overflow:auto;
	.title_content{
	width:1640px;
	height: 110px;
	margin:30px 30px -14px;
	text-align: center;
	li{
		width: 160px;
		height: 80px;
		border-radius: 10px ;
		
		margin:6px;
		background: #1BE7C2;
		float:left;
		p{	padding: 0;
			margin: 0;
			height: 16px;
			word-spacing: 0px;
			color: #fff;
		}
		p:first-child{
			margin-top: 25px;
		}
		p:last-child{
			font-size: 10px;
		}
	}
	li:nth-child(2){
		background: #FFD449;
	}
	li:nth-child(3){
		background: #FF7475;
	}
	li:nth-child(4){
		background:#5AB6FF
	}
	li:nth-child(5){
		background:#FF7E3D
	}
	li:nth-child(6){
		background:#A097F4
	}
}
}
.designer_title{
		margin-left: 10px;
		border-bottom: 1px solid #ccc;
	}
#designer{
	ul{
		width: 383px;
		text-align: center;
		padding:30px 15px;
		border-bottom: 1px solid #ccc;
		li{
			width: 88px;
			height: 78px;
			float: left;
			
		}
	}
}
</style>
