<template>
  <!-- <div class="problem"> -->
    <form @submit.prevent="checkAnswer" v-for="prob in problem" :key="prob.operator">
        <div class="top"><span>{{prob.top}}</span></div>
        <div class="top"><span>{{prob.operator}}</span><span>{{prob.bottom}}</span></div>
        <div><input type="text" maxlength="5" v-model.number="userAnswer"></div>
        <!-- <button @click="checkAnswer(problem, userAnswer)">Check Calculation</button> -->
        <button>Check Calculation</button>
        <!-- <div >Incorrect Letters: <span class="wrong">{{wrongLetters.toString()}}</span></div> -->
        <div >Incorrect Letters: <span class="wrong">B</span></div>
    </form>

</template>

<script>
import {computed, ref} from 'vue'
export default {

    setup() {
        const userAnswer = ref();
        const problem = computed(()=>{
            let prob = [];
            prob.push({top: 23, bottom: 34, operator: '+'});
            return prob;
        });

        const handleAddition = ()=> {
            let answer = problem.value[0].top + problem.value[0].bottom;
            if(answer === userAnswer.value){
                console.log('correct');
            }
            else
                console.log('incorrect');
        };

        const handleSubtraction = ()=> {
            let answer = problem.value[0].top - problem.value[0].bottom;
            if(answer === userAnswer.value){
                console.log('correct');
            }
            else
                console.log('incorrect');
        };

        const handleMultiplication = ()=> {
            let answer = problem.value[0].top * problem.value[0].bottom;
            if(answer === userAnswer.value){
                console.log('correct');
            }
            else
                console.log('incorrect');
        };

        const handleDivision = ()=> {
            let answer = problem.value[0].top / problem.value[0].bottom;
            if(answer === userAnswer.value){
                console.log('correct');
            }
            else
                console.log('incorrect');
        };

        const checkAnswer = () => {
            // console.log(problem.value[0].operator);
            switch(problem.value[0].operator) {
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