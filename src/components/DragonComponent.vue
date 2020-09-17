<template>
  <div class="card" style="width: 18rem;">
    <img :src="dragonProp.imgUrl" class="card-img-top" alt="..." />
    <div class="card-body">
      <h4 class="card-title">{{ dragonProp.name }}</h4>
      <h5 class="card-subtitle text-muted">Hit Points: {{ dragonProp.hp }}</h5>
    </div>
    <button type="button" @click="chooseDragon(dragonProp._id)">
      Choose your Dragon
    </button>
  </div>
</template>

<script>
export default {
  name: "dragon-component",
  props: ["dragonProp"],
  data() {
    return {};
  },
  methods: {
    chooseDragon(dragonId){
      this.$store.dispatch("getDragonbyId", dragonId)
    }
  }
};
</script>

<style scoped></style>
