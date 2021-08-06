<template>
  <div class="game-content">
    <h1>Snowman Math Game</h1>
    <Phrase />
    <div class="game">
      <Snowman />
      <!-- <Problem :wrongLetters="wrongLetters" /> -->
      <Problem />
    </div>
  </div>
</template>

<script>
import Phrase from '@/components/Phrase.vue'
import Snowman from '@/components/Snowman.vue'
import Problem from '@/components/Problem.vue'

export default {
    components: { Phrase, Snowman, Problem },
    // data(){
    //     return{
    //         wrongLetters: ['B', 'A']
    //     }
    // },
    setup(){
        // const wrongLetters = ['B', 'A'];

        // return {wrongLetters}
    }
}
</script>

<style>
    .game {
        /* @apply grid justify-center min-w-max m-4; */
        @apply flex justify-between p-4;
    }
    .game-content {
        /* @apply flex justify-between; */
        @apply bg-gradient-to-b from-white to-gray-300 p-6 rounded;
    }
    .game-content h1 {
        @apply text-5xl pointer-events-none text-center;
    }
</style>