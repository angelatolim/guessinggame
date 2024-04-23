console.log('guessing game');

// Game state globals
let secretNum = Math.floor(Math.random()*9)
let attempts = 0;

// Determine elements that will be used
const choicesElems = document.querySelectorAll('.choices button')
const messageElem = document.querySelector('.message')
const attemptsElem = document.querySelector('.attempts')
const playAgainBtn = document.querySelector('.playagain-btn')

resetGame();

// Allow button input triggered by an event
for (let elem of choicesElems) {
    elem.addEventListener('click',handleGuess)
}

playAgainBtn.addEventListener('click', resetGame);

function handleGuess(event) {
    const elem = event.target
    // const userGuess = Number(elem.textContent)
    const userGuess = Number(elem.dataset.num)
    
    elem.disabled = true;
    
    if (userGuess === secretNum) {
        messageElem.textContent = "you got it!"
        playAgainBtn.style.display = 'initial'
    } else {
        messageElem.textContent = "try again!"
    }
    attempts++;
    attemptsElem.textContent = `${attempts}`;
}

function resetGame() {
    secretNum = Math.floor(Math.random() * 9); // can turn this into a function
    attempts = 0;
    messageElem.textContent = "";
    playAgainBtn.style.display = 'none';
    attemptsElem.textContent = attempts;
    for (let elem of choicesElems) {
        elem.disabled = false;
    }
}


// Compare secret Num and input
// if (secretNum === btnInput) {

// }

// // Count number of attempts

// //Disable button
// btn.disabled = true;