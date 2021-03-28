<template>
  <div id="page_content">
    <section id="game_intro" class="screen_height">
      Game Intro
      <div class="bottom_layer" role="button">
        <p class="text-bold">So funktioniert's</p>
      </div>
    </section>
    <section id="how_it_works" class="screen_height">
      Hier folgt eine kleine Anleitung wie das Spiel funktioniert.
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
  .bottom_layer {
    height: 50px;
    background: $black;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    p {
      text-align: center;
      color: $white;
      font-size: 22px;
      margin: 0;
      line-height: 50px;
    }
  }
</style>
