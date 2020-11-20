import axios from "axios";

const state = () => ({
  trees: null,
});

const getters = {
  getTrees(state) {
    return state.trees;
  },
};

const mutations = {
  setTrees(state, data) {
    state.trees = data;
  },
};

const actions = {
  async fetchTrees({ commit }) {
    const {
      data: { trees },
    } = await axios.get(
      "http://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json"
    );
    commit("setTrees", trees);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
