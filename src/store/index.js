import { createStore } from 'vuex'
import axios from 'axios'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

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
        //axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        console.log(payload.username)
        console.log(payload.password)
        const response = await axios({
          method: 'post',
          url: 'https://finance.parkingfile.com/api-token-auth',
          data: {
            username: payload.username,
            password: payload.password
          },
         
        });
        const data = await response.data;
        console.log(data)

      }catch (error){
        console.log(error)

      }


    }

  },
  modules: {
  }
})
