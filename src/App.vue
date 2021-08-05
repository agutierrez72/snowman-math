<template>
  <div class="phrase-app">
    <h1>Snowman Math Game</h1>
    <Game />
  </div>
  
</template>

<script>
import Game from './views/Game.vue'

export default {
  // components: { Phrase },
  components: { Game },
}
</script>

<style>
  .phrase-app {
    @apply grid justify-center min-w-max m-4;
  }
  .phrase-app h1 {
    @apply text-5xl pointer-events-none;
  }
</style>