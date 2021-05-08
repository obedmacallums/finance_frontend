import { createStore } from 'vuex'



export default createStore({
  state: {
    home_list: [],
    token: '',
    user: null

  },
  mutations: {
    setHome_list(state, payload){
      state.home_list = payload

    },
    setToken(state, payload){
      state.token = payload

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
        console.log(data_json)

      }catch (error){
        console.log("errorrr", error)
      }

    }

  },
  modules: {
  }
})
