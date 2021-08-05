import {ref} from 'vue'

const getProblem = () => {
    let top = ref();
    let bottom = ref();


    top = Math.floor((Math.random() *99) + 1);
    bottom = Math.floor((Math.random() *99) + 1);

    const prob = {top: top, bottom: bottom, operator: '+'};
    // console.log("prob", prob)
    return prob;
}

export default getProblem;