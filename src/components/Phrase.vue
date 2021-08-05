<template>
  <div class="phrase">
      <div v-for="char in unknownPhrase" :key="char.id">
          <span>{{char.letter}}</span>
      </div>
    
      <input type="text" maxlength="1" v-model="userGuess">
      <button @click="checkGuess(userGuess)">Check Guess</button>
  </div>

</template>

<script>
export default {
    data() {
        return{
            guessPhrase: '',
            unknownPhrase: [ {letter: '', id: ''}],
            userGuess: ''
        }
    },
    setup(){
        const guessPhrase = "snowman";
        let unknownPhrase = [];
        
        for(let i = 0; i < guessPhrase.length; i++){
            unknownPhrase.push({letter:'_', id: i});
        };


        const checkGuess = (userGuess) => {
            for(let index = 0; index < guessPhrase.length; index++){
                if(guessPhrase[index] === userGuess){
                    unknownPhrase[index].letter = userGuess;
                }
            }

            userGuess = '';
           
        };

        return { unknownPhrase, checkGuess, guessPhrase };
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