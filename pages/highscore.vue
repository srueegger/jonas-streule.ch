<template>
  <div id="page_content">
    <div class="container">
      <div id="game_title" class="text-bold text-white">
        <h1 class="text-bold text-shadow">Bullshit-Bingo <span>Highscore</span></h1>
      </div>
      <NuxtLink class="btn mt-15" to="/">{{ return_game }}</NuxtLink>
      <section id="highscore" class="mt-45">
        <Highscoreentry
          v-for="(highscore, index) in highscore_list"
          v-bind:key="highscore.id"
          v-bind:highscore="highscore"
          v-bind:rang="index+1"
        />
      </section>
      <NuxtLink class="btn mt-15" to="/">{{ return_game }}</NuxtLink>
    </div>
  </div>
</template>

<script>
import API from '../api';
export default {
  data() {
    return {
      highscore_list: {},
      return_game: 'Zurück zum Spiel'
    }
  },
  asyncData() {
    return API.get( 'bingo_highscore/?per_page=100' )
    .then( response => {
      return {
        highscore_list: response.data
      }
    });
  },
  head() {
    return {
      title: 'Bullshit Bingo Highscore - Jonas Streule'
    }
  }
}
</script>