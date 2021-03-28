<template>
  <div id="mobile_wrapper">
    <Nuxt />
  </div>
</template>

<style lang="scss">
  @include for-tablet-landscape-up {
    #mobile_wrapper {
      width: 414px;
      height: 736px;
      border: 2px solid $white;
      overflow-x: hidden;
      overflow-y: scroll;
      position: absolute;
      right: 50%;
      bottom: 50%;
      transform: translate(50%, 50%);
    }
  }
</style>