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
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>
            </div>

        <div class="flex flex-col h-20 m-4">
            <label for="amount" class="font-sans text-lg font-bold">Monto</label>
            
            <input id="amount" type="number" class="w-full h-full border border-gray-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
            </div>

        <div class="flex flex-col h-20 m-4">
            <label for="date" class="font-sans text-lg font-bold">Fecha</label>
            <datepicker v-model="picked" :inputFormat="format" :locale="locale" class="w-full h-12 border border-gray-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" />
            
            
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

import Datepicker from 'vue3-datepicker'
import { ref } from 'vue'
import { es } from 'date-fns/locale'

export default {
  name: 'Add',
  components: {
    Datepicker
  },
    setup(props){
        const picked = ref(new Date())
        const locale = ref(es)
        const format = ref('dd-MM-yyyy')
        return{picked, locale, format}

    }

}
</script>