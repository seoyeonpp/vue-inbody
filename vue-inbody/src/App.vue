<template>
  <v-app>
    <tool-bar-header v-if="isLogin"></tool-bar-header>
    <v-main>
      <router-view />
    </v-main>
    <tool-bar-foot v-if="isLogin"></tool-bar-foot>
  </v-app>
</template>

<script>
import ToolBarHeader from '@/components/ToolBarHeader.vue';
import ToolBarFoot from '@/components/ToolBarFoot.vue';
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "App",
  components: {
    ToolBarHeader,
    ToolBarFoot
  },
  data: () => ({
      isLogin: false,
  }),
  methods: {
    ...mapGetters(['getUser']),
    ...mapActions(['tokenCheck'])
  },
  mounted() {
    this.isLogin = this.getUser().isLogin
    this.tokenCheck()
  },
  computed:{
    loginCk(){
      return this.getUser().isLogin
    }
  },
  watch:{
    loginCk(val){
      this.isLogin = val
    }
  }
};
</script>
