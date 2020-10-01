import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    trees: null,
  },
  mutations: {
    setTrees(state, data) {
      state.trees = data;
    },
  },
  actions: {
    async fetchTrees({ commit }) {
      const { data: { trees } } = await axios.get(
        "http://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json"
      );
      commit('setTrees', trees)
    },
  },
  getters: {
    getTrees(state) {
      return state.trees;
    },
  },
});

export default store;
