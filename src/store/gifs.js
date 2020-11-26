const state = () => ({
  gifs: null,
  isLoading: false,
  isError: ''
});

const getters = {
  getGifs(state) {
    return state.gifs;
  },
  getLoading(state) {
    return state.isLoading;
  },
  getError(state) {
    return state.isError;
  },
};

const mutations = {
  setGifs(state, data) {
    state.gifs = data;
  },
};

const actions = {
  async fetchGifs({ commit, state }, value) {
    state.isLoading = true;
    try {
      const response = await this._vm.$axios.get(
        "https://api.giphy.com/v1/gifs/search",
        {
          params: {
            api_key: process.env.VUE_APP_GIF_API_KEY,
            q: value,
          },
        }
      );

      if (response.status === 200) {
        const {
          data: { data },
        } = response;
        commit("setGifs", data);
        state.isLoading = false;
      }
    } catch (error) {
      state.isLoading = false;
      state.isError = '*bad network'
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
