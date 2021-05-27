<template>
    <div>
        <div>
        <div class="flex flex-col h-20 m-4">
        <label for="des" class="font-sans text-lg font-bold">Descripcion</label>
        
        <input id="des" type="text" class="w-full h-full border border-gray-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
        </div>

        <div class="flex flex-col h-20 m-4">
            <label for="item" class="font-sans text-lg font-bold">Item</label>
            
            <select id="item" class="w-full h-full border border-gray-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
            <option value="-------">-------</option>
            <option v-for="(item, index) in items_select" :key="index" value="item">{{item}}</option>
            </select>
            </div>

        <div class="flex flex-col h-20 m-4">
            <label for="amount" class="font-sans text-lg font-bold">Monto</label>
            
            <input id="amount" type="number" class="w-full h-full border border-gray-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
            </div>

        <div class="flex flex-col h-20 m-4">
            <label for="date" class="font-sans text-lg font-bold">Fecha</label>
            <div v-if="ok" class="">
                <v-date-picker v-model="date" mode="date" @dayclick='dayClicked' is-expanded/>
            </div>
            
            <input type="text" @click="ok=true" :value="day" v-if="!ok" class="w-full h-full">
            


            
            </div>

        </div>

        <div class="flex m-4 place-content-between">
         <button class="px-6 py-2 font-sans font-semibold text-white bg-gray-700 rounded-xl hover:bg-gray-900">
            Borrar
        </button>

        <button class="px-6 py-2 font-sans font-semibold text-white bg-gray-700 rounded-xl hover:bg-gray-900">
            Guardar
        </button>   
        </div>
    </div>
</template>

<script>


import { ref, computed } from 'vue'
import { Calendar, DatePicker } from 'v-calendar';
import {useStore} from 'vuex'

export default {
  name: 'Add',
  components: {DatePicker,Calendar
    
  },
    setup(props){
        const store = useStore()
        const getItemList = ()=> store.dispatch('getItemList')
        if (!store.state.item_list.length){
            getItemList()
        }

        
        const items_select = computed(() => store.getters.items_select)
        
        return{ items_select}

    },
    data(){

        return {date: new Date(),
                ok: false,
                
        }
    },
    computed: {
                day: function(){
                    return this.date.getDate() + "-"+ (this.date.getMonth()+1) + "-" + this.date.getFullYear();
                }
            },
    methods: {
    dayClicked(day) {
      this.selectedDay = day;
      this.ok = false
    },
  },

}
</script>