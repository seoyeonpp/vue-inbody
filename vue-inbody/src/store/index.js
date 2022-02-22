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
    }
  },
  getters:{
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
      state.userState.userId = null
      state.userState.userName = null
    },
    setUser (state, {userId, userName}) {
      state.userState.userId = userId
      state.userState.userName = userName
    }
  },
  actions: {
    isLogin ({state, commit}, obj) {
      let {id, password} = obj
      axios.post('/login',
        `username=${id}&password=${password}`
      ).then(({data}) => {
        commit('setToken', data.response.Token)
        commit('setUser', data.response.user)
        router.push('/boardList')
      }).catch((error)=>{
        console.log(error);
        alert(`로그인실패`)
      })
    },
    tokenCheck({state, commit}, obj){
      axios.get('/member/check')
      .then(({data})=>{
        console.log(data);
        if(data.code=="update"){
          commit('setToken', data.message)
        }
        if(data.code=="access_denied"){
          commit('logOut')
          router.push('/login')
        }
      })
    }
  },
  modules: {},
  plugins: [createPersistedState()] //vuex 데이터를 쿠키로 남겨 영속성을 띄게 하는 플러그인, 새로고침 해도 vuex 데이터가 유지되게함
});
