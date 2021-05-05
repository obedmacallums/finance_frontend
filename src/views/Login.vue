<template>
    <div>
        <h1>Login</h1> <br><br>
        <label for="username">Usuario</label>
        <input type="text" id="username" name="username" v-model="username"><br><br>
        <label for="password">Clave</label>
        <input type="password" id="password" name="password" v-model="password"><br><br>
        <input type="submit" @click="login" value="Iniciar Sesion">

        {{username}}
        {{password}}



    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from 'vue'
import {useStore} from 'vuex'


export default {
  name: 'Login',
  components: {
    HelloWorld
  },

  setup(){
    const store = useStore()
    const password = ref('')
    const username = ref('')
    const login = ()=> store.dispatch('login', {"username": username.value, "password": password.value})
    
    return {password, username, login}

  }
}
</script>