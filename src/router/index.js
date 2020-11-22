import Vue from "vue";
import Router from "vue-router";
import Trees from "@/pages/Trees";
import Gifs from "@/pages/Gifs";
import NotFound from "@/pages/NotFound";

Vue.use(Router);

const routes = [
  { path: "/", component: Trees },
  { path: "/gifs", component: Gifs },
  { path: "*", component: NotFound },
];

export default new Router({
  mode: "history",
  routes,
});
