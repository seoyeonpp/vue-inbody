import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import router from '../router'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userState:{
      userId:null,
      Token:null,
      isLogin:false
    },
    instance: ''
  },
  mutations: {
    setToken (state, payload) {
      state.userState.Token = payload
      state.userState.isLogin = true
    },
    logOut (state, payload) {
      state.userState.isLogin = false
    },
    setInstance (state, payload) {
      state.instance = axios.create({
        baseURL: process.env.VUE_APP_API_URL,
        headers: {
          Authorization: `Bearer ${payload}`
        }
      })
    }
  },
  actions: {
    isLogin ({state, commit}, obj) {
      let {id, password} = obj
      axios.post('http://18.191.222.197:8080' + '/login',
        `username=${id}&password=${password}`
      ).then(({data}) => {
        commit('setToken', data.response.Token)
        commit('setInstance', data.response.Token)
        router.push('/boardList')
      })
    }
  },
  modules: {},
});
