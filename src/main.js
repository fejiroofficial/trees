import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Card, Input, Spin, Drawer, Divider, notification} from "ant-design-vue";


const antComponents = [Button, Card, Input, Spin, Drawer, Divider];

antComponents.forEach((component) => Vue.use(component));

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
Vue.prototype.$notification = notification;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
