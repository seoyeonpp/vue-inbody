<template>
  <!-- <hello-world /> -->
  <div>
    <router-link to="/uicomponents">uicomponents</router-link>
    <router-link to="/chartsample">chartsample</router-link>
    <router-link to="/login">로그인</router-link>
    <router-link to="/dashboard">대시보드</router-link>
    <router-link to="/boardList">boardList</router-link>
  </div>
</template>

<script>
// import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",

  components: {
    // HelloWorld,
  },
};
</script>

<style scoped>
  a{display: block;}
  a + a{margin-top: 10px;}
</style>
