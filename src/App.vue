<template>
  <div class="phrase-app">
    <h1>Snowman Math Game</h1>
    <div><Phrase /></div>
    <router-view />
  </div>
  
</template>

<script>
import Phrase from './components/Phrase.vue'
export default {
  components: { Phrase },
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