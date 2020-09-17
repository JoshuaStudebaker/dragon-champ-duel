import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "../services/AxiosService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    champions: [],
    dragons: [],
  },
  mutations: {
    setAllChampions(state, champions) {
      state.champions = champions;
    },
  },
  actions: {
    async getAllChampions({ commit }) {
      try {
        let res = await api.get("champions");
        console.log(res);
        commit("setAllChampions", res.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
