<template>
<div>
    

<div v-for="register in home_list" :key="register.updated" class="home">

  <Card :description="register.description" 
        :amount="register.amount"
        :item="register.item__name"
        :color="register.item__color"
        :intensity="register.item__color_intensity"
        
        @click="selected(register)"
        class="m-3 mb-4"/>

</div>
<Pop v-if="register_selected" :id="register_selected.id" 
:amount="register_selected.amount"
:description="register_selected.description"/>




</div>



  
</template>

<script>

import Card from '@/components/Card.vue'
import Pop from '@/components/Pop.vue'

import { ref, computed } from 'vue'
import {useStore} from 'vuex'


export default {
  name: 'Home',
  components: {
    Card, Pop
  },

  setup(){
    const store = useStore()
    
    
    const register_selected = computed(() =>store.state.register_selected)
    
    const selected = (register)=> {
      store.commit('setRegister_selected', register)
      console.log(register)
    
    }
    const home_list = computed(() => store.getters.ordered_home_list)
    const getHomeList = ()=> store.dispatch('getHomeList')
    getHomeList()

    return {home_list, selected, register_selected}
}}
</script>

