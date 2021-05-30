<template>
  <div>

    <div class="m-3 mb-4 border rounded-lg shadow-md hover:border-2 hover:border-gray-500" v-bind:class="[class_bg ? class_bg : 'bg-white']">
        
       
      <div class="flex p-3 place-content-between ">   
    
        <div class="font-bold text-md">
            Saldo Total
        </div>
        <div class="font-bold text-md">
            {{total}}
        </div>
        </div>
    </div>
    
  <div class="grid flex-wrap grid-cols-2 gap-4 m-3 mb-4 items" >
    <div  v-for="item in item_list" :key="item.updated">
      
    <Item :name="item.name" :amount="item.balance" :intensity="item.color_intensity" :color="item.color" class="h-full"/>
    </div>
    
  </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Item from '@/components/Item.vue'
import { ref, computed } from 'vue'
import {useStore} from 'vuex'
export default {
  name: 'Items',
  components: {
    Item
  },
  setup(props){
    const color_intensity = '100'
    const colors = ["red", "blue", "pink", "gray", "green", "purple", "yellow", "indigo"];
    const random = Math.floor(Math.random() * colors.length);
    const class_bg = computed(()=> `bg-${colors[random]}-${color_intensity}`)
    const store = useStore()
    const getItemList = ()=> store.dispatch('getItemList')
    getItemList()
    
    const item_list = computed(() => store.state.item_list)
    const total = computed(() => store.getters.total_items)
    
    return {item_list, total, class_bg}
  }
}
</script>