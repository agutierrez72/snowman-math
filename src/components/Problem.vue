<template>
  <!-- <div class="problem"> -->
    <form>
        <div class="top"><span>{{problem.top}}</span></div>
        <div class="top"><span>{{problem.operator}}</span><span>{{problem.bottom}}</span></div>
        <div><input type="text" maxlength="5" v-model.number="userAnswer"></div>
        <button @click="checkAnswer(problem, userAnswer)">Check Calculation</button>
        <div >Incorrect Letters: <span class="wrong">B</span></div>
    </form>

</template>

<script>
export default {
    data(){
        return {
            problem: {
                top: 23,
                bottom: 34,
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
            let answer = problem.top + problem.bottom;
            if(answer === userAnswer){
                console.log('correct');
            }
            else
                console.log('incorrect');
        };

        const handleSubtraction = (problem, userAnswer)=>{
            let answer = problem.top - problem.bottom;
            if(answer === userAnswer){
                console.log('correct');
            }
            else
                console.log('incorrect');
        };

        const handleMultiplication = (problem, userAnswer)=>{
            let answer = problem.top * problem.bottom;
            if(answer === userAnswer){
                console.log('correct');
            }
            else
                console.log('incorrect');
        };

        const handleDivision = (problem, userAnswer)=>{
            let answer = problem.top / problem.bottom;
            if(answer === userAnswer){
                console.log('correct');
            }
            else
                console.log('incorrect');
        };

        return { checkAnswer }
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