const btnDecrease = document.querySelector(".btn-minus");
const btnReset = document.querySelector(".btn-reset");
const btnIncrease = document.querySelector(".btn-plus");
const counterText = document.querySelector(".counter");
let counter = 0;

const decrease = () => {
  counter++;
  counterText.innerText = counter;
};

const increase = () => {
  counter--;
  counterText.innerText = counter;
};

const reset = () => {
  counter = 0;
  counterText.innerText = counter;
};

btnDecrease.addEventListener("click", decrease);
btnIncrease.addEventListener("click", increase);
btnReset.addEventListener("click", reset);
