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

export default {
  name: "App",
  components: {
    ToolBarHeader,
    ToolBarFoot
  },
  data: () => ({
      isLogin: false,
  }),
};
</script>
