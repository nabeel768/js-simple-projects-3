const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionElement = document.getElementById('question');
const inputElement = document.getElementById('input');
const formElement = document.getElementById('form');

const scoreElement = document.getElementById('score');
let score = JSON.parse(localStorage.getItem('score'));


if (!score) {
  score = 0;
}

scoreElement.innerHTML = `score: ${score}`;

questionElement.innerHTML = `What is ${num1} multiplied by ${num2}?`;

const correctAnswer = num1 * num2;

formElement.addEventListener('submit', () => {
  const userAnswer = +inputElement.value;
  if (userAnswer === correctAnswer) {
    score++;
    updateLocalStorage()
  }else{
    updateLocalStorage()
    }
  }
);

function updateLocalStorage(){
  localStorage.setItem('score', JSON.stringify(score));
}
