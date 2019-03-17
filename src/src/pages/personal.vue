<template>
	<div>
		<div class='content'>
			<button @click='goto'>dianji</button>
		</div>
	</div>
    
</template>
<script>

export default {

  methods: {
    goto(){	
        this.$router.push({name:'LOGIN'})
        
    }
  }
}
</script>
<style scoped lang="scss">
	/*.content{
		
	}*/
</style>
