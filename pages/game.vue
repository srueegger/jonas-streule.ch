<template>
  <div id="page_content">
    <div id="points_container">
      <span id="points_animation" class="text-bold text-shadow text-white">+ 5</span>
      <span id="total_points" class="text-bold text-shadow">{{ total_points }}</span>
    </div>
    <div id="game_field" class="container">
      Hallo {{ player_name }}<br>Hier ist das Spiel
      <ul id="bingo_statements">
        <Bingostatement
          v-for="statement in statements"
          v-bind:key="statement.id"
          v-bind:statement="statement"
          v-bind:total_points="total_points"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import API from '../api';
export default {
  data() {
    return {
      player_name: this.$store.state.player_name,
      total_points: 0,
      statements: {}
    }
  },
  asyncData( ctx ) {
    return API.get( 'bingo_statements/?per_page=100' )
    .then( response => {
      return {
        statements: response.data
      }
    });
  },
  head() {
    return {
      title: 'Bullshit Bingo - Jonas Streule'
    }
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
      left: 15px;
    }
    #total_points {
      color: #e2b007;
      font-size: 28px;
      left: unset;
      right: 15px;
    }
  }

  #game_field {
    margin-top: 55px;
  }
</style>