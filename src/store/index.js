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
      login({commit, state}, payload){
        var url = 'https://finance.parkingfile.com/api-token-auth/';
        var data = { username: payload.username,
          password: payload.password};
        
        fetch(url, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));


    }

  },
  modules: {
  }
})
