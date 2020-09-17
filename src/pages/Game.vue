<template>
  
</template>

<script>
export default {
  name: "Game",
  mounted(){
    this.$store.dispatch("getGameById", this.$route.params.id)
  }

}
</script>

<style>

</style>