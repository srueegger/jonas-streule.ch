<template>
  <div id="page_content">
    <section id="game_intro" class="screen_height">
      <div class="container">
        <div id="game_title" class="text-bold">
          <h1 class="text-bold text-shadow">Jonas Streule's <span>Bullshit-Bingo</span></h1>
        </div>
        <div id="bubble" class="mb-45">
          <div id="speech_txt" v-html="type_writer_txt" class="speech"></div>
          <div class="image">
            <picture>
              <img src="~/assets/images/jonas.jpg" alt="Jonas Streule" loading="lazy">
            </picture>
          </div>
        </div>
        <div class="name_form">
          <input type="text" placeholder="Dein Name" name="player_name" id="player_name" class="text-bold" v-model="player_name">
          <span v-if="!player_name" id="field_error" class="text-bold">Du musst einen Namen eingeben</span>
        </div>
        <button v-if="player_name" type="button" class="btn mt-15" @click="start_game()" id="start_game">Spiel als {{ player_name }} starten</button>
      </div>
      <div v-scroll-to="'#how_it_works'" class="bottom_layer" role="button">
        <p class="text-bold text-shadow">So funktioniert's</p>
      </div>
    </section>
    <section id="how_it_works" class="screen_height">
      <div class="container">
        Hier folgt eine kleine Anleitung wie das Spiel funktioniert.
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      player_name: '',
      type_writer_txt: 'Hallo!<br>Ich bin der Jonas von der SVP<br>Gib deinen Namen ein um zu zu spielen.',
      //type_writer_speed: 5000,
      //type_writer_position: 0
    }
  },
  methods: {
    async start_game() {
      console.log('Spiel wird gestartet');
      /* Prüfen ob ein Name eingegeben wurde */
      if(this.player_name) {
        /* Name in der VUEX Storage speichern */
        this.$store.commit('SET_PLAYER_NAME', this.player_name);
        /* Zum Game weiterleiten */
        this.$router.push({
          path: '/game'
        });
      }
    }
  }
}
</script>

<style lang="scss">
  #game_title {
    color: $white;
    text-align: center;
    transform: rotate(7deg);
    margin-bottom: 25px;
    span {
      display: block;
      text-transform: uppercase;
    }
  }

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

  input {
    height: 44px;
    font-size: 20px;
    width: 100%;
    border: 1px solid $black;
  }

  #field_error {
    color: $red;
    font-size: 14px;
  }

  #how_it_works {
    background: $white;
  }
</style>
