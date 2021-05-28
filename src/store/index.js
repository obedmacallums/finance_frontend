import { createStore } from 'vuex'
import router from '../router'
import createPersistedState from "vuex-persistedstate";
import axios from 'axios';
const persist = createPersistedState({
  paths: ['token', 'user']
})
export default createStore({
  state: {
    home_list: [],
    item_list:[],
    token: null,
    user: null,
    error: null
  },
  mutations: {
    setHome_list(state, payload){
      state.home_list = payload
    },
    setItem_list(state, payload){
      state.item_list = payload
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
      async login({commit}, payload){
        // const url = 'https://finance.parkingfile.com/api-token-auth/';
        // const data = { username: payload.username,
        //   password: payload.password};
        //  try{ 
        //   const res  = await fetch(url, {
        //   method: 'POST',
        //   body: JSON.stringify(data), 
        //   headers:{
        //     'Content-Type': 'application/json'
        //   }})
        // const data_json = await res.json()
        
        const url = 'https://finance.parkingfile.com/api-token-auth/'
        const data = { username: payload.username, password: payload.password}
        try{
            const res = await axios.post(url, data)
            
            if (res.data.token){
          
              commit('setToken', res.data.token)
              router.push('/')
              
            }
        }
        catch(error){
          
          commit('setError', error.response.data)
        }
       },
        
    async getHomeList({commit, state}) {
      const url = 'https://finance.parkingfile.com/api/v1/';
      try{
        const res  = await axios.get(url, {headers: {Authorization: 'Token ' + state.token}})
        commit('setHome_list', res.data)
      }
      catch(error){
        console.log(error.response.data)
      }
      },
    logout ({commit}){
      commit('setToken', null)
    },

    async addRegister({commit, state}, payload){
      const url = 'https://finance.parkingfile.com/api/v1/register/create/';
      const data = { description: payload.description, amount: payload.amount, 
        item:payload.item, date:payload.date}

        try{
          const res  = await axios.post(url, data, {headers: {Authorization: 'Token ' + state.token}})
          // commit('setItem_list', res.data)
          console.log(res.data)
        }catch(error){
          console.log(error.response.data)
        }
      


    },

    async getItemList ({commit, state}){
      const url = 'https://finance.parkingfile.com/api/v1/items';
      try{
        const res  = await axios.get(url, {headers: {Authorization: 'Token ' + state.token}})
        commit('setItem_list', res.data)
        console.log(res.data)
      }catch(error){
        console.log(error.response.data)
      }
      
    }
  },
  getters: {
    total_items: state => {
      let total = 0
      state.item_list.map(item => total = total + item.balance)
      return total
    },
    items_select: state => {
      let items = []
      state.item_list.map(item => items.push({name:item.name, id:item.id}))
      return items
    }
  
  },

  modules: {
  },
  plugins: [persist]
})