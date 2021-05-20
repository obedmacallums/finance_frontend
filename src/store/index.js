import { createStore } from 'vuex'
import router from '../router'


export default createStore({
  state: {
    home_list: [],
    token: '',
    user: null,
    error: null

  },
  mutations: {
    setHome_list(state, payload){
      state.home_list = payload

    },
    setToken(state, payload){
      state.token = payload

    },

    setUser(state, payload){
      state.user = payload

    },

    setError(state, payload){
      state.error = payload

    },

  },
  actions: {
      async login({commit, state}, payload){
        const url = 'https://finance.parkingfile.com/api-token-auth/';
        const data = { username: payload.username,
          password: payload.password};
        
         try{ 
          const res  = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(data), 
          headers:{
            'Content-Type': 'application/json'
          }})
        
        const data_json = await res.json()
        
        // router.push('/')

        if (data_json.token){
          
          commit('setToken', data_json.token)
          router.push('/')
          
        }else{
          
          commit('setError', data_json)
          

        }
        

      }catch (error){
        commit('setError', error)
        
      }

    }

  },
  modules: {
  }
})
