const counter = document.querySelector('.counter');
const increaseNumber = document.querySelector('.button-increment');
const decreaseNumber = document.querySelector('.button-decrement');
const restartNumber = document.querySelector('.button-restart');
const message = document.querySelector('.message');
let numberCounter = 0;

const increase = () => {
    if( numberCounter < 10){
        numberCounter++;
        counter.innerHTML = numberCounter;
    }
    showMessage();
}

const decrease = () => {
    if(numberCounter > 0){
        numberCounter--;
        counter.innerHTML = numberCounter;
    }
    showMessage();
}

const restartCounter = () => {
    numberCounter = 0;
    counter.innerHTML = numberCounter;
    message.textContent = ``;
}

const showMessage = () => {
    if(numberCounter === 10){
        message.textContent = `You have reached the maximum value`;
    }else if(numberCounter === 0){
        message.textContent =`You have reached the minimum value`;
    }else{
        message.textContent = ``;
    }
}

increaseNumber.addEventListener('click',increase);
decreaseNumber.addEventListener('click',decrease);
restartNumber.addEventListener('click',restartCounter);