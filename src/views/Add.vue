<template>
    <div>
        <div>
        <div class="flex flex-col h-20 m-4">
        <label for="des" class="font-sans text-lg font-bold">Descripcion</label>
        
        <input id="des" v-model="description" type="text" class="w-full h-full border border-gray-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
        </div>

        <div class="flex flex-col h-20 m-4">
            <label for="item" class="font-sans text-lg font-bold">Item</label>
            
            <select id="item" v-model="item" class="w-full h-full border border-gray-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
            <option value="-------">-------</option>
            <option v-for="(item, index) in items_select" :key="index" :value="item.id">{{item.name}}</option>
            </select>
            </div>

        <div class="flex flex-col h-20 m-4">
            <label for="amount" class="font-sans text-lg font-bold">Monto</label>
            
            <input id="amount" type="number"  v-model="amount" class="w-full h-full border border-gray-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
            </div>

        <div class="flex flex-col h-20 m-4">
            <label for="date" class="font-sans text-lg font-bold">Fecha</label>
            <div v-if="ok" class="pb-1 mb-1">
                <v-date-picker v-model="date" mode="date" @dayclick='dayClicked' is-expanded is-required/>
                
            </div>
            
            <input type="text" @click="ok=true" :value="day1" v-if="!ok" class="w-full h-full">
            
            


            
            </div>

        </div>

        <div class="flex m-4 place-content-between">
         <button class="px-6 py-2 font-sans font-semibold text-white bg-gray-700 rounded-xl hover:bg-gray-900">
            Borrar
        </button>

        <button @click="addRegister" class="px-6 py-2 font-sans font-semibold text-white bg-gray-700 rounded-xl hover:bg-gray-900">
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
  components: {DatePicker,Calendar},

    setup(props){
        const date = ref(new Date())
        

        const dayClicked =(day)=> {
        
        
        
        selectedDay.value = day;
        ok.value = false
        


        
    }
        
        const store = useStore()
        const getItemList = ()=> store.dispatch('getItemList')
        if (!store.state.item_list.length){
            getItemList()
        }
        const selectedDay = ref(null)
        const ok = ref(false)
        const description = ref('')
        const amount = ref('')
        const item = ref('')
        

        const formatDate = (d)=>{

     
    
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        let year = d.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [year, month, day].join('-')
        }




        const day1 = computed(() => formatDate(date.value))
        
        const addRegister = ()=> {

            let payload = {"description": description.value, "amount": amount.value,
                    "date": day1.value, "item": item.value
            }
            console.log(payload)
            
            
            store.dispatch('addRegister', payload)
            
            }




        
        const items_select = computed(() => store.getters.items_select)
        
        return{ items_select, day1, description, amount, item, date, ok, addRegister, selectedDay, dayClicked}

    
    
    
  },

}
</script>