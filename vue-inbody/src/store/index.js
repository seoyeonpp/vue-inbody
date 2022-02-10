import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import router from '../router'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userState:{
      userId:null,
      userName:null,
      Token:null,
      isLogin:false
    },
    instance: null
  },
  getters:{
    getAxios(state, getter){    //setInstance에서 생성한 엑시오스 객체를 넘겨받음
      return state.instance;
    },
    getUser(state, getter){
      return state.userState;
    }
  },
  mutations: {
    setToken (state, payload) {
      state.userState.Token = payload
      state.userState.isLogin = true
    },
    logOut (state, payload) {
      state.userState.isLogin = false
    },
    setInstance (state, payload) {  //로그인 후 넘겨받은 토큰을 헤더에 포함시킨 엑시오스 객체생성
      state.instance = axios.create({
        baseURL: 'http://localhost:8080',
        headers: {
          Authorization: `Bearer ${payload}`
        }
      })
    },
    setUser (state, {userId, userName}) {
      state.userState.userId = userId
      state.userState.userName = userName
    }
  },
  actions: {
    isLogin ({state, commit}, obj) {
      let {id, password} = obj
      axios.post('http://localhost:8080' + '/login',
        `username=${id}&password=${password}`
      ).then(({data}) => {
        commit('setToken', data.response.Token)
        commit('setInstance', data.response.Token)
        commit('setUser', data.response.user)
        router.push('/boardList')
      })
    }
  },
  modules: {},
  plugins: [createPersistedState()] //vuex 데이터를 쿠키로 남겨 영속성을 띄게 하는 플러그인, 새로고침 해도 vuex 데이터가 유지되게함
});
