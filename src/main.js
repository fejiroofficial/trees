import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Card } from "ant-design-vue";

const antComponents = [Button, Card];

antComponents.forEach((component) => Vue.use(component));

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
