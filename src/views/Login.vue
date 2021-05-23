<template>
    <div>
       <div class="flex flex-col items-center justify-center h-screen bg-gray-100 select-none">
    <div class="flex flex-col w-full max-w-md px-4 py-8 -mt-32 bg-white shadow-2xl sm:px-6 md:px-8 lg:px-10 rounded-xl">
        <div class="w-12 h-12 text-center text-blue-500">
        <LoginAnimate/>
        </div>
       <div class="mt-10">
            <form @submit.prevent="login"> 
                <div class="relative w-full mb-3">
                    <input type="text" name="username" v-model="username" class="w-full p-4 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow focus:outline-none focus:ring" placeholder="Usuario" style="transition: all 0.15s ease 0s;" />
                </div>
                <div class="relative w-full mb-3">
                    <input type="password" v-model="password" name="password" autocomplete="on" class="w-full p-4 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow focus:outline-none focus:ring" placeholder="Clave" style="transition: all 0.15s ease 0s;" />
                    <small class="p-2 text-red-500">{{error}}</small>
                </div>
                <div class="mt-6 text-center">
                    <input type="submit" value="Iniciar" name="signin" id="signin" class="justify-center w-32 p-3 text-white bg-blue-500 border rounded-lg shadow outline-none focus:bg-blue-500 hover:text-blue-500 hover:border-blue-500 hover:border hover:bg-white focus:text-white"/>
                </div>  
                <div class="flex flex-wrap mt-6">
                    <div class="w-1/2 text-left">
                        <a href="#" class="text-xl text-black hover:text-blue-700"><small>Olvidaste tu clave?</small></a>
                    </div>
                    <div class="w-1/2 text-right">
                        <a href="#" class="text-xl text-black hover:text-blue-700"><small>Registrate</small></a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
    </div>
     
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import LoginAnimate from '@/components/LoginAnimate.vue'
import { ref, computed } from 'vue'
import {useStore} from 'vuex'
export default {
  name: 'Login',
  components: {
    HelloWorld, LoginAnimate
  },
  setup(){
    const store = useStore()
    const password = ref('')
    const username = ref('')
    store.commit('setError', null)
    const error = computed(() => store.state.error)
    const login = ()=> store.dispatch('login', {"username": username.value, "password": password.value})
    
    return {password, username, login, error}
  }
}
</script>