<template>
  <div class="phrase">
      <div v-for="char in unknownPhrase" :key="char.id">
          <span>{{char.letter}}</span>
      </div>
    
      <input type="text" maxlength="1" v-model="userGuess">
      <button @click="checkGuess">Check Guess</button>
  </div>

</template>

<script>
import { ref, computed } from 'vue'
export default {
    setup(){
        const guessPhrase = ref("snowman");
        const userGuess = ref('');
        
        const unknownPhrase = computed(()=>{
            let phrase = [];
            for(let i = 0; i < guessPhrase.value.length; i++){
                phrase.push({letter:'_', id: i});
            };
            return phrase;
        })

        const checkGuess = () => {
            for(let index = 0; index < guessPhrase.value.length; index++){
                if(guessPhrase.value[index] === userGuess.value){
                    unknownPhrase.value[index].letter = userGuess.value;
                }
            }
            userGuess.value = '';
           
        };

        return { unknownPhrase, guessPhrase, checkGuess, userGuess };
    }

}
</script>

<style>
    .phrase{
        @apply flex justify-between p-4;
    }

    .phrase-app span {
        @apply text-6xl m-2 pointer-events-none;
    }
    .phrase input {
        @apply border max-w-min mx-2 bg-gray-50 rounded text-center font-bold text-lg focus:outline-none focus:bg-white;
    }
    .phrase button {
        @apply bg-green-300 p-2 rounded border-2 border-green-300  focus:bg-green-100 focus:border-green-100 hover:bg-green-100 hover:border-green-300;
    }
</style>