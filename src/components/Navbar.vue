<template>
  <div class="flex flex-wrap items-center justify-between p-6 bg-gray-700">
    
    <div class="text-gray-400">
        <router-link to="/">
        <div class="w-10 h-10 hover:text-white hover:border-white">
             
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-full h-full" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
              </svg>
    
        </div>
        </router-link>

  </div>
    
    <div class="text-gray-400">
      <router-link to="/items">
  
        <div class="flex items-center w-8 h-8 hover:text-white hover:border-white">
    
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-full h-full" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
              </svg>
    
        </div>

        </router-link>

  </div>

  <div class="text-gray-400">
    <router-link to="/add">
  
    <div class="flex items-center w-5 h-5 hover:text-white hover:border-white">

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-full h-full" viewBox="0 0 16 16">
            <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
          </svg>

    </div>
    </router-link>

</div>

<div @click="menu_status()">
        <div class="w-12 h-12">
        <div id='boton' class="flex items-center px-2 py-1 text-gray-400 border border-gray-600 rounded hover:text-white hover:border-white">
      
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-full h-full" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
              </svg>
        </div>
        </div>
  
    </div>

  
  
    <div id='menu' class="flex-grow hidden w-full" >
      

                <a href="#" class="block mt-3 font-sans text-gray-400 text-md hover:text-white">
            
             <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="inline" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
</svg></i>&nbsp;
              obedmacallums@gmail.com
              
          </a>  
        
        <router-link to="/login" class="block mt-3 font-sans text-gray-400 text-md hover:text-white">
          <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="inline" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg></i>&nbsp;
            Busqueda / login
        </router-link>
        <a href="#" class="block mt-3 font-sans text-gray-400 text-md hover:text-white">
            <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="inline" viewBox="0 0 16 16">
                <path d="M5.5 10.5A.5.5 0 0 1 6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
              </svg></i>&nbsp;
          Este mes 
        </a>
        
        <a href="#" class="block mt-3 font-sans text-gray-400 text-md hover:text-white" @click="logout()">
            <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="inline" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg></i>&nbsp;
          Cerrar Sesion
        </a>
 
        
        
  
  
       
      
      
    </div>
    
  </div>  


</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from 'vue'
import {useStore} from 'vuex'


export default {
  name: 'Navbar',
  components: {
    HelloWorld
  },

  setup(){
    const store = useStore()
    const password = ref('')
    const username = ref('')

    const logout = ()=> store.dispatch('logout')
    


    const menu_status = () => {
    const menu = document.querySelector('#menu');
        menu.classList.toggle('hidden') 
    
}
    
    return {password, username, menu_status, logout}

  }
}
</script>

<style>


.router-link-active{
  color:white;
}


</style>