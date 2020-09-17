import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Game from "../pages/Game.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/game/:id",
    name: "Game",
    component: Game,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
