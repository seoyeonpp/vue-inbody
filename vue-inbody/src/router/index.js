import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import UiComponents from "../views/UiComponents.vue";
import ChartSample from "../views/ChartSample.vue";

// 로그인
import Login from "../views/login/Login.vue";
import Join from "../views/login/Join.vue";
import MoreInfo from "../views/login/MoreInfo.vue";

// 게시판
import BoardDetail from "../components/BoardDetail.vue";
import BoardList from "../views/Board/BoardList.vue";
import BoardWrite from "../views/Board/BoardWrite.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/uicomponents",
    name: "UiComponents",
    component: UiComponents,
  },
  {
    path: "/chartsample",
    name: "ChartSample",
    component: ChartSample,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/join",
    name: "Join",
    component: Join,
  },
  {
    path: "/moreInfo",
    name: "MoreInfo",
    component: MoreInfo,
  },
  {
    path: "/boardDetail",
    name: "boardDetail",
    component: BoardDetail,
  },
  {
    path: "/boardList",
    name: "boardList",
    component: BoardList,
  },
  {
    path: "/boardWrite",
    name: "boardWrite",
    component: BoardWrite,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
