<template>
  <div class="phrase">

  </div>
</template>

<script>
export default {
    data() {
        guessPhrase: '',
        unknownPhrase: ''
    },
    setup(){
        guessPhrase = "snowman";
        unknownPhrase = "________";
        console.log(guessPhrase.length)
        console.log(unknownPhrase.length);

        return {guessPhrase, unknownPhrase};
    }

}
</script>

<style>

</style>