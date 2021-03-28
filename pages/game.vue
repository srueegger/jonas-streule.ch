<template>
  <div id="page_content">
    <div class="container">
      Hallo {{ player_name }}<br>Hier ist das Spiel
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      player_name: this.$store.state.player_name
    }
  }
}
</script>