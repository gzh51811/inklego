<template>
  <div class="ffff">
    <img src="../static/images/6e3fe1a4601c73b5fba2dc5e398a2a2b.jpg">

    <fushimokuai :data="Tee" v-if="Tee.length!=0"></fushimokuai>
    <fushimokuai :data="Hoodies" v-if="Hoodies.length!=0"></fushimokuai>
    <fushimokuai :data="Vest" v-if="Vest.length!=0"></fushimokuai>
  </div>
</template>

<script type="text/javascript">
import fushimokuai from './fushimokuai.vue'
export default {
  data() {
    return {
      Tee: [],
      Hoodies: [],
      Vest: []
    }
  },
  components: {
    fushimokuai
  },
  created() {
    this.$axios.get('/store/fushi').then(res => {

      this.Hoodies = res.data[0].result.cateList[0];
      this.Tee = res.data[0].result.cateList[1];
      this.Vest = res.data[0].result.cateList[2];


    })
  }
}
</script>
<style type="text/css" scoped>
.ffff {
  background: white;
}
img {
  width: 375px;
  height: 125px;
}
</style>
