import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Card from 'ant-design-vue/lib/card';
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css';


Vue.component(Button.name, Button)
Vue.component(Card.name, Card)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
