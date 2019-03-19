<template>
	<div>
		
		<header class="mui-bar mui-bar-nav ink-bar-header">
				<h1 class="mui-title">预售详情</h1>				
			</header>
			<div  class='content_header_t'>
					<a  class="ink-icon iconfont icon-left mui-pull-left mui-action-back"></a>
					
					<a class="mui-btn mui-btn-outlined" id="downloadapp">下载APP</a>
				</div>
		<div class="content">
			内容
		</div>
	</div>
    
</template>
<script>

export default {
   beforeCreate(){
	let {id,idx}=this.$route.query
   	 console.log(id);
   	 this.$axios.get("http://localhost:1822/designer/store", {
   	 				params: {
				          id
				        }
				     }).then(res=>{

					console.log(res)
		
		 });
   }
}
</script>
<style scoped lang="scss">
.content{
				top: 55px;
			    bottom: 0px;
			    position: fixed;
			    overflow-x: hidden;
}
.content_header_t{
		position: absolute;top:0;}
</style>
