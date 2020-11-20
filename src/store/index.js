import Vue from "vue";
import Vuex from "vuex";
import trees from "./trees";
import gifs from "./gifs";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    trees,
    gifs
  },
});

export default store;
