import Vue from "vue";
import axios from "axios";

const Axios = {
  install(Vue) {
    Vue.prototype.$axios = axios.create({
      baseURL: "https://s3.eu-central-1.amazonaws.com/",
    });
  },
};

Vue.use(Axios);

export default Axios;
