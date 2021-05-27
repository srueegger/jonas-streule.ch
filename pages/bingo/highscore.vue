<template>
  <div id="page_content">
    <div class="container">
      <div id="game_title" class="text-bold text-white">
        <h1 class="text-bold text-shadow">Bullshit-Bingo <span>Highscore</span></h1>
      </div>
      <NuxtLink class="btn mt-15" to="/bingo"><font-awesome-icon :icon="['fal', 'play']" class="mr-10 text-gold" />{{ return_game }}</NuxtLink>
      <section v-if="highscore_list.length > 0" id="highscore" class="mt-45">
        <Highscoreentry
          v-for="(highscore, index) in highscore_list"
          v-bind:key="highscore.id"
          v-bind:highscore="highscore"
          v-bind:rang="index+1"
        />
      </section>
      <section v-if="highscore_list.length == 0">
        <p class="text-white text-center mt-15">Bisher gibt es noch keine Einträge!</p>
      </section>
      <NuxtLink class="btn mt-15" to="/bingo"><font-awesome-icon :icon="['fal', 'play']" class="mr-10 text-gold" />{{ return_game }}</NuxtLink>
    </div>
  </div>
</template>

<script>
import API from '../../api';
export default {
  layout: 'bingo',
  data() {
    return {
      highscore_list: {},
      return_game: 'Zurück zum Spiel'
    }
  },
  asyncData() {
    return API.get( 'wp/v2/bingo_highscore/?per_page=100' )
    .then( response => {
      return {
        highscore_list: response.data
      }
    });
  },
  head() {
    return {
      title: 'Bullshit Bingo Highscore - Jonas Streule',
      meta: [
        { hid: 'ogTitle', property: 'og:title', content: 'Bullshit Bingo Highscore - Jonas Streule' },
      ]
    }
  }
}
</script>