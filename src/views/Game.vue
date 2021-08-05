<template>
  <Phrase />
  <div class="game">
      <Snowman />
      <Problem />
  </div>
</template>

<script>
import Phrase from '@/components/Phrase.vue'
import Snowman from '@/components/Snowman.vue'
import Problem from '@/components/Problem.vue'

export default {
    components: { Phrase, Snowman, Problem },
}
</script>

<style>
    .game {
        /* @apply grid justify-center min-w-max m-4; */
        @apply flex justify-between p-4;
    }
    /* .game-component {
        @apply flex justify-between;
    } */
</style>