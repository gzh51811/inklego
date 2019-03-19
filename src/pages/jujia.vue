<template>
    <div>
        <img src="../static/images/c75895e663908a4f8538a71b7c30b5ad.jpg" />
        <fushimokuai></fushimokuai>
        <fushimokuai></fushimokuai>
        <fushimokuai></fushimokuai>
        <fushimokuai></fushimokuai>
        <fushimokuai></fushimokuai>
        <fushimokuai></fushimokuai>
        <fushimokuai></fushimokuai>
    </div>
</template>

<script type="text/javascript">
    import fushimokuai from './fushimokuai.vue'
    import axios from 'axios'
    export default{
        created(){
            axios.get('http://www.inklego.com/api/v1/recommend/all').then(res=>{
                console.log(res);
                this.res = res;
            })
        },
        components:{
            fushimokuai
        }
    }
</script>
<style type="text/css" scoped>
    img{
        width:375px;
        height:125px;
    }

</style>