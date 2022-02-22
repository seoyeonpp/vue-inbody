import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import interceptor from "./plugins/interceptors";

import "@/plugins/fontAwesomeIcon";
import "@/plugins/echart";
import '@/assets/scss/index.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  interceptor,
  render: (h) => h(App),
}).$mount("#app");
