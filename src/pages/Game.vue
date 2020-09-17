<template>
  
</template>

<script>
export default {
  name: "Game",
  mounted(){
    this.$store.dispatch("getGameById", this.$route.params.id)
  },
  computed: {
    activeGame(){
      return this.$store.state.activeGame; 
    }
  }

}
</script>

<style>

</style>