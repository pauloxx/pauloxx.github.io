let secretNumber = Math.trunc(Math.random() *100 + 1);

const play = document.getElementById('play')
const scorenew = document.querySelector('.score');
const hscorenew = document.querySelector('.hscore');
const msg = document.querySelector('.msg');
const guesses = document.querySelector('.guesses')

const check = document.getElementById('check')
const center = document.querySelector('.center')

let score = 10;
let hscore = 0;

scorenew.textContent = score;
check.addEventListener('click', function(){
    const userInput = Number(document.getElementById('userInput').value)
    if (!userInput){
        msg.textContent = 'Please enter a valid number!';
    }
    else if (!Number(userInput)) {
        msg.textContent = 'Please enter a number!';
    }
    else if (userInput === secretNumber) {
        msg.textContent = 'Congrats! You got the number';
        center.textContent = userInput;
        document.getElementById('body').style.background = 'green';
        if (score > hscore) {
            hscore = score;
            guesses.innerHTML += userInput + `<br /> <br />`;
            hscorenew.textContent = hscore;
            scorenew.textContent = score;
        }
    }
    else if (userInput !== secretNumber){
        if (score === 0){
            msg.textContent = 'Game Over!';
            scorenew.textContent = score;
            hscorenew.textContent = hscore;
        }
        else if (userInput > secretNumber){
            msg.textContent = 'Too High!';
            score = score - 1;
            document.getElementById('userInput').value = '';
            document.getElementById('userInput').focus();
            guesses.innerHTML += userInput + `<br /> <br />`;
            scorenew.textContent = score;
        }
        else if (userInput < secretNumber){
            msg.textContent = 'Too Low!';
            score = score - 1;
            document.getElementById('userInput').value = '';
            document.getElementById('userInput').focus();
            guesses.innerHTML += userInput + `<br /> <br />`;
            scorenew.textContent = score;
        }
    }})
console.log(secretNumber)

play.addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() *100 + 1);
    score = 10;
    scorenew.textContent = score;
    document.getElementById('userInput').value = '';
    document.getElementById('userInput').focus();
    document.getElementById('body').style.background = 'linear-gradient(270deg, rgb(245, 140, 90), rgb(117, 19, 93))';
    guesses.innerHTML = "<br />";
    center.innerHTML = "?";
   })