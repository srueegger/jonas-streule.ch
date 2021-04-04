<template>
  <div id="page_content">
    <section id="game_intro" class="screen_height">
      <div class="container">
        <div id="game_title" class="text-bold text-white">
          <h1 class="text-bold text-shadow">Jonas Streule's <span>Bullshit-Bingo</span></h1>
        </div>
        <div id="bubble" class="mb-45">
          <div id="speech_txt" class="speech">
            Hoi zämme,<br>ich bin der Jonas aus St. Gallen.<br>I`m the future Bundesrat of the bescht Partei wo`s je hets gits: <strong>SVP</strong> <font-awesome-icon :icon="['fas', 'sun']" class="fa-2x text-yellow" />
          </div>
          <Share />
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
        <button v-if="player_name" type="button" class="btn mt-15" @click="start_game()" id="start_game"><font-awesome-icon :icon="['fal', 'play']" class="mr-10 text-gold" />Spiel als {{ player_name }} starten</button>
        <NuxtLink class="btn mt-30" to="/highscore"><font-awesome-icon :icon="['fal', 'star']" class="mr-10 text-gold" />Highcore anzeigen</NuxtLink>
      </div>
      <div v-scroll-to="'#how_it_works'" class="bottom_layer" role="button">
        <p class="text-bold text-shadow text-white">So funktioniert's</p>
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
      player_name: ''
    }
  },
  methods: {
    async start_game() {
      /* Prüfen ob ein Name eingegeben wurde */
      if(this.player_name) {
        /* Prüfen ob der Name erlaubt ist */
        if(this.player_name.toLowerCase() == 'jonas') {
          alert('Der Name ' + this.player_name + ' ist nicht erlaubt! ;)');
          return;
        }
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
