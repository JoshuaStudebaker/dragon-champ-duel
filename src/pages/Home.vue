<template>
  <main class="container-fluid">
    <div class="row">
      <div id="champions" class="col-3">
        <champion-component
          v-for="champ in champions"
          :key="champ._id"
          :champProp="champ"
        />
      </div>
      <div id="dragons" class="col-3">
        <dragon-component v-for="dragon in dragons" 
        :key="dragon._id" 
        :dragonProp="dragon" />
      </div>
      <div id="active-champ" class="col-3">
         <img class="img-fluid" v-if="activeChampion" :src="activeChampion.imgUrl">
      </div>
      <div id="active-dragon" class="col-3">
         <img class="img-fluid" v-if="activeChampion" :src="activeDragon.imgUrl">
      </div>
    </div>
  </main>
</template>

<script>
import ChampionComponent from "../components/ChampionComponent.vue";
import DragonComponent from "../components/DragonComponent.vue";

export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getAllChampions");
    this.$store.dispatch("getAllDragons");
  },
  data() {
    return {};
  },
  components: {
    ChampionComponent,
    DragonComponent,
  },
  computed: {
    champions() {
      return this.$store.state.champions;
    },
    dragons(){
      return this.$store.state.dragons;
    },
    activeChampion(){
      return this.$store.state.activeChamp;
    },
    activeDragon(){
      return this.$store.state.activeDragon;
    }
  },
};
</script>

<style></style>
