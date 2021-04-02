<template>
  <li :id="'bingo_card_' + statement.id" :data-points="statement.ACF.bingo_points" class="bingo_card" @click="bingo_win( statement.id )">
    {{ statement.ACF.bingo_statement }}
  </li>
</template>

<script>
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
      /* var animation_element = document.getElementById('points_animation');
      animation_element.innerText('+ ' + points); */
      /* Gesamtpunktestand anpassen */
      var new_points = Number(this.$store.state.total_points) + Number(points);
      this.$store.commit('SET_TOTAL_POINTS', new_points);
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
    &.clicked {
      opacity: 0;
      visibility: hidden;
    }
  }
</style>