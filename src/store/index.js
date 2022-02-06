import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
  },
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
  },
  mutations: {
    //로그인용
    setUsername(state, username) {
      //payload인 username
      state.username = username;
    },
    //로그아웃용
    clearUsername(state) {
      state.username = '';
    },
  },
});
