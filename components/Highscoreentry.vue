<template>
  <div class="highscore_entry">
    <span class="highscore_entry--rang text-bold text-shadow text-gold">{{ rang }}.</span>
    <span class="highscore_entry--name">{{ highscore.title.rendered }}</span>
    <span class="highscore_entry--points text-bold text-shadow">{{ highscore.ACF.highscore_punkte }}</span>
  </div>
</template>

<style lang="scss">
  .highscore_entry {
    border: 2px solid $white;
    background: $black;
    color: $white;
    height: 45px;
    line-height: 45px;
    margin-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    &--rang {
      font-size: 24px;
      margin-right: 15px;
    }
    &--name {
      font-size: 18px;
    }
    &--points {
      position: absolute;
      right: 15px;
      font-size: 26px;
    }
  }
</style>

<script>
export default {
  props: {
    highscore: Object,
    rang: Number
  }
}
</script>