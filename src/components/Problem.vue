<template>
  <!-- <div class="problem"> -->
    <!-- <form @submit.prevent="checkAnswer" v-for="prob in problem" :key="prob.operator"> -->
        <form @submit.prevent="checkAnswer">
        <div class="top"><span>{{problem.top}}</span></div>
        <div class="top"><span>{{problem.operator}}</span><span>{{problem.bottom}}</span></div>
        <div><input type="text" maxlength="5" v-model.number="userAnswer"></div>
        <!-- <button @click="checkAnswer(problem, userAnswer)">Check Calculation</button> -->
        <button>Check Calculation</button>
        <!-- <div >Incorrect Letters: <span class="wrong">{{wrongLetters.toString()}}</span></div> -->
        <div >Incorrect Letters: <span class="wrong">B</span></div>
    </form>

</template>

<script>
import {computed, ref} from 'vue'
import getProblem from '../composables/getProblem'

export default {

    setup() {
        const userAnswer = ref();

        const problem = getProblem();
        // console.log("problem", problem, problem.top);

        const handleAddition = ()=> {
            let answer = problem.top + problem.bottom;
            if(answer === userAnswer.value){
                console.log('correct');
                problem.value = getProblem();
                
            }
            else
                console.log('incorrect');
        };

        const handleSubtraction = ()=> {
            let answer = problem.top - problem.bottom;
            if(answer === userAnswer.value){
                console.log('correct');

            }
            else
                console.log('incorrect');
        };

        const handleMultiplication = ()=> {
            let answer = problem.top * problem.bottom;
            if(answer === userAnswer.value){
                console.log('correct');
            }
            else
                console.log('incorrect');
        };

        const handleDivision = ()=> {
            let answer = problem.top / problem.bottom;
            if(answer === userAnswer.value){
                console.log('correct');
            }
            else
                console.log('incorrect');
        };

        const checkAnswer = () => {
            // console.log(problem.operator);
            switch(problem.operator) {
                case '+':
                    handleAddition();
                    break;
                case '-':
                    handleSubtraction();
                    break;
                case '*':
                    handleMultiplication();
                    break;
                case '/':
                    handleDivision();
                    break;
                default:
                    console.log();
                    break;
            }
            userAnswer.value ='';
        };
        return { problem, userAnswer, checkAnswer };
    }

}
</script>

<style scoped>
     .top {
        @apply flex justify-end;
    } 
    form {
        @apply grid justify-between;
    }
    form input {
        @apply rounded-b border-t-4 border-black p-4 bg-gray-300 text-lg text-right focus:outline-none;
    }
    form button {
        @apply bg-blue-300 p-2 my-2 rounded border-2 border-blue-300  focus:bg-blue-100 focus:border-blue-100 hover:bg-blue-100 hover:border-blue-300;
    }
    .wrong{
        @apply text-red-500 text-3xl;
    }
</style>