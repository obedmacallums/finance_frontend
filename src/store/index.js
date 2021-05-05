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
      try{
        console.log('okok', payload)

      }catch (error){
        console.log(error)

      }


    }

  },
  modules: {
  }
})
