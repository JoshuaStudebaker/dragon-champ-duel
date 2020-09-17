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
    activeDragon: {},
    activeGame: {}
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
    },
    setGame(state, game){
      state.activeGame = game
    }
  },
  actions: {
    async getGameById({commit}, gameId){
      try {
        let res = await api.get("games/"+gameId)
        commit("setGame", res.data)
      } catch (error) {
        console.error(error)
      }
    },
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
    },
     async startFight({commit},payload){
      try {
        let res = await api.post("games", payload)
        router.push({name: "Game", params:{id: res.data._id }})
      } catch (error) {
        
      }
    }

  },
  modules: {},
});
