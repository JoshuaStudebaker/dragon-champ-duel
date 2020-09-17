<template>
  <!-- TODO Add Router Link -->

  <div class="card" style="width: 18rem;">
    <img :src="champProp.imgUrl" class="card-img-top" alt="..." />
    <div class="card-body">
      <h4 class="card-title">{{ champProp.name }}</h4>
      <h5 class="card-subtitle text-muted">
        Race: {{ champProp.race }} - Class: {{ champProp.class }} - Hit Points: {{champProp.hp}}
      </h5>
    </div>
    <button type="button" @click="chooseChampion(champProp._id)">
      Choose your Champion
    </button>
  </div>
</template>

<script>
export default {
  name: "champion-component",
  props: ["champProp"],
  data() {
    return {};
  },
  methods: {
  chooseChampion(champId){
    this.$store.dispatch("getChampionbyId", champId)
  }

}
}
</script>

<style scoped></style>
