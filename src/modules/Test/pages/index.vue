<template>
  <div>
    <cardCom v-for='(item,index) in list' :key='index' :cardData='item' />
  </div>
</template>

<script>
import card from '@/modules/Test/components/card/index.vue'
export default {
  name:'Test',
  components:{
    cardCom:card
  },
  data(){
    return {
      list:[
        {
        tag:"0",
        title:'1111111',
        description:'审计发现问题',
        unit1:'2456',
        unit2:'12',
      },
      {
        tag:"0",
        title:'2222222',
        description:'审计发现问题',
        unit1:'2456',
        unit2:'12',
      },
      {
        tag:"0",
        title:'3333333',
        description:'审计发现问题',
        unit1:'2456',
        unit2:'12',
      }
      ]
    }
  }
}
</script>

<style>

</style>