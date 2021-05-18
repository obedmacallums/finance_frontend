<template>
    <div>
        <div>
        <div class="h-20 m-4 flex flex-col">
        <label for="des" class="font-sans text-lg font-bold">Descripcion</label>
        
        <input id="des" type="text" class="w-full h-full shadow-md rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
        </div>

        <div class="h-20 m-4 flex flex-col">
            <label for="item" class="font-sans text-lg font-bold">Item</label>
            
            <select id="item" class="w-full h-full shadow-md rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>
            </div>

        <div class="h-20 m-4 flex flex-col">
            <label for="amount" class="font-sans text-lg font-bold">Monto</label>
            
            <input id="amount" type="number" class="w-full h-full shadow-md rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
            </div>

        <div class="h-20 m-4 flex flex-col">
            <label for="date" class="font-sans text-lg font-bold">Fecha</label>
            
            <input id="date" class="w-full h-full shadow-md rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
            </div>

        </div>

        <div class="flex place-content-between m-4">
         <button class="font-semibold font-sans py-2 px-6 rounded-xl bg-gray-700 text-white hover:bg-gray-900">
            Borrar
        </button>

        <button class="font-semibold font-sans py-2 px-6 rounded-xl bg-gray-700 text-white hover:bg-gray-900">
            Guardar
        </button>   
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Add',
  components: {
    HelloWorld
  }
}
</script>