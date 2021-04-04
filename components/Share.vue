<template>
  <div id="share" v-if="show_share">
    <font-awesome-icon :icon="['fas', 'share']" class="text-gold" @click="share_action()" />
  </div>
</template>

<style lang="scss">
  #share {
    position: relative;
    svg {
      font-size: 52px;
      position: absolute;
      top: 15px;
    }
  }
</style>

<script>
export default {
  data() {
    return {
      show_share: false,
      share_data: {
        title: 'Jonas Streule - Bullshit Bingo',
        text: 'Spiel mit mir das ultimative (!) Jonas Streule - Bullshit Bingo!',
        url: 'https://jonas-streule.ch'
      }
    }
  },
  methods: {
    share_action() {
      console.log('Sharing ist gestartet');
      navigator.share(this.share_data);
    }
  },
  created() {
    /* Prüfen ob der Browser die Native Share Methode unterstützt */
    if( navigator.canShare ) {
      this.show_share = true;
    }
  }
}
</script>