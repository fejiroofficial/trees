import Vue from "vue";
import Router from "vue-router";
import Trees from "@/pages/Trees";

Vue.use(Router);

const routes = [{ path: "/", component: Trees }];

export default new Router({
  mode: "history",
  routes,
});
