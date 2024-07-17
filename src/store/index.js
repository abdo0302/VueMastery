import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    login:'login',
    user: {},
    messageLogin:''
  },
  mutations: {
    setLogin(state){
      state.login='login'
    },
    setSginUp(state){
      state.login='sgin-up'
    },
    //
    setLoginUser(state,loginUser){
      state.user = loginUser;
      state.messageLogin='Successfully registered';
    }

  },
  actions: {
   async sinup(context,user){
    try {
      const response = await axios.post('http://localhost:3000/users',user);
      context.commit('setLoginUser', response.data);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  }
  },
  getters: {}
});
