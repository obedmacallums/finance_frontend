<template>
  <div class="grid flex-wrap grid-cols-2 gap-4 m-3 mb-4 items" >
    <div  v-for="(item, index) in item_list" :key="index">
    <Item :name="item.name" :amount="item.balance" :intensity="item.color_intensity" :color="item.color" class="h-full"/>
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
    const store = useStore()
    const getItemList = ()=> store.dispatch('getItemList')
    getItemList()
    const item_list = computed(() => store.state.item_list)
    
    return {item_list}
  }
}
</script>