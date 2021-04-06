<template>
  <div id="page_content">
    <div id="points_container">
      <span id="points_animation" class="text-bold text-shadow text-white"></span>
      <span id="total_points" class="text-bold text-shadow text-gold">{{ this.$store.state.total_points }}</span>
    </div>
    <div id="game_field" class="container">
      <p class="text-white">Hallo <strong>{{ player_name }}</strong></p>
      <p class="text-white">Wenn Jonas einer dieser Sätze sagt, klicke den entsprechenden Satz an.</p>
      <ul id="bingo_statements">
        <Bingostatement
          v-for="statement in statements"
          v-bind:key="statement.id"
          v-bind:statement="statement"
        />
      </ul>
    </div>
    <div id="endscreen" class="d-none">
      <h2 class="text-white text-center">Bingo! {{ player_name }}!</h2>
      <h3 class="text-white text-center">Herzlichen Glückwunsch {{ player_name }}!<br>In dieser Runde hast du <span class="text-underline">{{ this.$store.state.total_points }}</span> Punkte erreicht!</h3>
      <h4 class="text-white text-center">Deine Leistung wurde im <NuxtLink to="/highscore">Highscore</NuxtLink> gespeichert.</h4>
      <button type="button" class="btn" @click="go_to_game_landing()"><font-awesome-icon :icon="['fal', 'play']" class="mr-10 text-gold" />Neues Spiel starten!</button>
    </div>
  </div>
</template>

<script>
import API from '../api';
export default {
  data() {
    return {
      player_name: this.$store.state.player_name,
      statements: {}
    }
  },
  asyncData() {
    return API.get( 'wp/v2/bingo_statements/?per_page=7&orderby=rand' )
    .then( response => {
      return {
        statements: response.data
      }
    });
  },
  methods: {
    go_to_game_landing() {
      this.$router.push({
        path: '/'
      });
    }
  },
  created() {
    if( !this.player_name ) {
      this.go_to_game_landing();
    }
  },
  mounted() {
    this.$store.commit('SET_TOTAL_POINTS', 0);
  }
}
</script>

<style lang="scss">
  #points_container {
    background: $black;
    position: fixed;
    border: 1px solid $black;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    height: 45px;
    width: 120px;
    right: 0;
    top: 15px;
    span {
      display: inline-block;
      line-height: 45px;
      font-size: 22px;
      position: absolute;
      left: 10px;
    }
    #total_points {
      font-size: 28px;
      left: unset;
      right: 15px;
    }
  }

  #game_field {
    margin-top: 55px;
  }

  #bingo_statements {
    margin: 0;
    list-style: none;
    padding: 0;
    li {
      &:not(:last-of-type) {
        margin-bottom: 15px;
      }
    }
  }

  #endscreen {
    position: absolute;
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);
    padding: 15px;
    background: $red;
    border: 5px solid $black;
    width: calc(100% - 30px);
  }
</style>