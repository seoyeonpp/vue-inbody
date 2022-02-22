<template>
    <v-app-bar
      absolute
      elevate-on-scroll
     >
        <h1>Inbody</h1>

        <v-spacer></v-spacer>

        <button class="header-name-button">{{ userName }}</button>

        <template v-slot:extension>
          <v-tabs fixed-tabs class="header-tab">
            <v-tab><router-link to="/dashboard">대시보드</router-link></v-tab>
            <v-tab><router-link to="/">변화</router-link></v-tab>
            <v-tab><router-link to="/">랭킹</router-link></v-tab>
          </v-tabs>
        </template>
    </v-app-bar>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import router from '@/router'

export default {
    data: () => ({
    }),
    computed: {
    },
    created() {
      let userName = this.getUser().userName
      if(userName != null)
        this.userName = userName
    },
    methods: {
      ...mapGetters(['getUser']),
      ...mapActions(['tokenCheck'])
    },
    computed: {
      isLogin () {
        return this.getUser().isLogin
      }
    },
    watch: {
      isLogin () {
        router.push('/login')
      }
    },
}
</script>

<style>

</style>