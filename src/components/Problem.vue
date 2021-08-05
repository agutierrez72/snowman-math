<template>
  <div class="problem">
    <div class="top"><span id="top">{{problem.top}}</span></div>
    <div class="top"><span id="operator">{{problem.operator}}</span><span id="bottom">{{problem.bottom}}</span></div>
    <div><input type="text" maxlength="5" v-model="userAnswer"></div>
    <button @click="checkAnswer(problem, userAnswer)">Check Calculation</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            problem: {
                top: '23',
                bottom: '34',
                operator: '+'
            },
            userAnswer: null,
            points: 0
        }
    },
    setup() {
        const checkAnswer = (problem, userAnswer) => {
            switch(problem.operator) {
                case '+':
                    handleAddition(problem, userAnswer);
                    break;
                case '-':
                    handleSubtraction(problem, userAnswer);
                    break;
                case '*':
                    handleMultiplication(problem, userAnswer);
                    break;
                case '/':
                    handleDivision(problem, userAnswer);
                    break;
                default:
                    console.log('no operation', problem.operator);
                    break;
            }
        };

        const handleAddition = (problem, userAnswer)=>{
            let answer = Number(problem.top) + Number(problem.bottom);
            if(answer === Number(userAnswer)){
                console.log('correct');
            }
            else
                console.log('incorrect');
        };

        const handleSubtraction = (problem, userAnswer)=>{
            let answer = Number(problem.top) - Number(problem.bottom);
            if(answer === Number(userAnswer)){
                console.log('correct');
            }
            else
                console.log('incorrect');
        };

        const handleMultiplication = (problem, userAnswer)=>{
            let answer = Number(problem.top) * Number(problem.bottom);
            if(answer === Number(userAnswer)){
                console.log('correct');
            }
            else
                console.log('incorrect');
        };

        const handleDivision = (problem, userAnswer)=>{
            let answer = Number(problem.top) / Number(problem.bottom);
            if(answer === Number(userAnswer)){
                console.log('correct');
            }
            else
                console.log('incorrect');
        };

        return { checkAnswer }
    }

}
</script>

<style>
    .problem {
        @apply grid justify-center;
    }
     .top {
        @apply flex justify-end;
    } 
    .problem input {
        @apply rounded-b border-t-4 border-black p-4 bg-gray-50 text-lg text-right focus:outline-none;
    }
    .problem button {
        @apply bg-blue-300 p-2 mt-2 rounded border-2 border-blue-300  focus:bg-blue-100 focus:border-blue-100 hover:bg-blue-100 hover:border-blue-300;
    }
</style>