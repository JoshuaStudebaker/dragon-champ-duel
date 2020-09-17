<template>
  <main class="container-fluid flex-grow-l d-flex">
    <div class="row">
      <div id="champions" class="col-6">
        <champion-component
          v-for="champ in champions"
          :key="champ._id"
          :champProp="champ"
        />
      </div>
      <div id="dragons">
        <!-- <dragon-component /> -->
      </div>
    </div>
  </main>
</template>

<script>
import ChampionComponent from "../components/ChampionComponent.vue";
// import DragonComponent from "../components/DragonComponent.vue";

export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getAllChampions");
  },
  data() {
    return {};
  },
  components: {
    ChampionComponent,
    // DragonComponent,
  },
  computed: {
    champions() {
      return this.$store.state.champions;
    },
  },
};
</script>

<style></style>
