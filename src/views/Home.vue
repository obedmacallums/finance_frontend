<template>

<div v-for="(register, index) in home_list" :key="index" class="home">

  <Card :description="register.description" 
        :amount="register.amount"
        :item="register.item__name"
        :color="register.item__color"
        :intensity="register.item__color_intensity"
        class="m-3 mb-4"
  
  />

  <!-- <Card description="Compras en el lider"
      amount="-32988"
      item="Spuermercado"
      color="red"
      intensity="200"
      class="m-3 mb-4"

/> -->




</div>



  
</template>

<script>

import Card from '@/components/Card.vue'
import { computed } from 'vue'
import {useStore} from 'vuex'

export default {
  name: 'Home',
  components: {
     Card
  },

  setup(){
    const store = useStore()
    const getHomeList = ()=> store.dispatch('getHomeList')
    getHomeList()

    const home_list = computed(() => store.state.home_list)
    

    return {home_list}


  }
}
</script>

