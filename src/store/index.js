import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "../services/AxiosService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    champions: [],
    dragons: [],
    activeChamp: {},
    activeDragon: {}
  },
  mutations: {
    setAllChampions(state, champions) {
      state.champions = champions;
    },
    setAllDragons(state, dragons) {
      state.dragons = dragons
    },
    setActiveChampion(state, activeChamp){
      state.activeChamp = activeChamp
    },
    setActiveDragon(state, activeDragon){
      state.activeDragon = activeDragon
    }
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
    async getAllDragons({ commit }) {
      try {
        let res = await api.get("dragons");
        commit("setAllDragons", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getChampionbyId({commit}, champId){
      try{
        let res = await api.get("champions/"+champId);
        console.log(res)
        commit("setActiveChampion", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async getDragonbyId({commit}, dragonId){
      try {
        let res = await api.get("dragons/"+dragonId)
        commit("setActiveDragon", res.data)
      } catch (error) {
        console.error(error)
      }
    }

  },
  modules: {},
});
