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
            <v-tab><router-link to="/join">대시보드</router-link></v-tab>
            <v-tab><router-link to="/moreInfo">변화</router-link></v-tab>
            <v-tab><router-link to="/">랭킹</router-link></v-tab>
          </v-tabs>
        </template>
    </v-app-bar>
</template>

<script>
export default {
    data: () => ({ 
        userName : '서도하',
    }),
    computed: {
      
    },
}
</script>

<style>

</style>