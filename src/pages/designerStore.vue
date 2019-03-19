<template>
	<div>
		<div class="content">
			<div class="content_header">
				<img :src="this.store.banner"  style="height:180px;"/>
				<img :src="this.store.thumb"  style="height:100px;" alt="" />
			</div>
		</div>
	</div>
   
</template>
<script>

export default {
	data(){
		return {
			store:''
		}
	},
  beforeCreate(){
	let {id}=this.$route.query
   	 console.log(id);
   	 this.$axios.get("http://localhost:1822/designer/store", {
   	 				params: {
				          id
				        }
				     }).then(res=>{
				    let data= res.data[0]	
					this.store=data;
					console.log(data)
		 });
   },
}
</script>
<style scoped lang="scss">
.content{
	top: 0px;
    bottom: 0px;
    position: fixed;
    overflow-x: hidden;
}
/*.content_header{
	img
}*/
</style>
