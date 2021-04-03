<template>
  <li :id="'bingo_card_' + statement.id" :data-points="statement.ACF.bingo_points" class="bingo_card" @click="bingo_win( statement.id )" v-bind:class="{ small_txt: statement.ACF.bingo_statement.length > 29 }" role="button">
    {{ statement.ACF.bingo_statement }}
  </li>
</template>

<script>
import API from '../api';
export default {
  props: {
    statement: Object
  },
  methods: {
    async bingo_win( card_id ) {
      var card_element = document.getElementById('bingo_card_' + card_id);
      var new_points = card_element.dataset.points;
      /* Prüfen ob die CardID bereits angeklickt wurde wurde */
      if(!card_element.classList.contains('clicked')) {
        card_element.classList.add('clicked');
        /* Nach der CSS Animation das Element verschwinden lassen */
        setTimeout(function() {
          card_element.remove();
        }, 600);
        this.add_points( new_points );
      }
    },
    async add_points( points ) {
      /* Animation starten */
      var animation_element = document.getElementById('points_animation');
      animation_element.innerText = '+ ' + points;
      setTimeout(function() {
        animation_element.innerText = '';
      }, 1000);
      /* Gesamtpunktestand anpassen */
      var new_points = Number(this.$store.state.total_points) + Number(points);
      this.$store.commit('SET_TOTAL_POINTS', new_points);
      this.check_endscreen();
    },
    async check_endscreen() {
      var new_counter = Number(this.$store.state.total_played_cards) + 1;
      this.$store.commit('SET_PLAYED_CARD', new_counter);
      if(this.$store.state.total_played_cards >= 7) {
        /* Spielende wurde erreicht */
        /* Endscreen anzeigen */
        setTimeout(function() {
          var endscreen_element = document.getElementById('endscreen');
          endscreen_element.classList.remove('d-none');
        }, 600);
        /* Highscore speichern */
        var rest_send_datas = new URLSearchParams();
        rest_send_datas.append('points', this.$store.state.total_points);
        rest_send_datas.append('player_name', this.$store.state.player_name);
        return API.get('js/v1/savehighscore/?' + rest_send_datas.toString());
      }
    }
  }
}
</script>

<style lang="scss">
  .bingo_card {
    background: $white;
    height: 50px;
    line-height: 50px;
    border: 2px solid $black;
    border-radius: 25px;
    padding-left: 15px;
    padding-right: 15px;
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    opacity: 1;
    visibility: visible;
    transition: visibility .5s linear,opacity .5s linear;
    white-space: nowrap;
    &.small_txt {
      font-size: 13px;
    }
    &.clicked {
      opacity: 0;
      visibility: hidden;
    }
  }
</style>