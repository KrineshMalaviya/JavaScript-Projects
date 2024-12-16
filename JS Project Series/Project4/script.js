let randomnumber = parseInt(Math.random() * 100 + 1)
//console.log(randomnumber)

const submit = document.querySelector("#subt")
const userInput = document.querySelector(".guessField")
const guessslot = document.querySelector(".guesses")
const remining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const StartOver = document.querySelector(".resultParas")


const p = document.createElement('p')

let preGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert(`please enter valid number`)
    }else if(guess < 1){
        alert(`please enter more then 1 number`)
    }else if(guess > 100){
        alert(`please enter number less than 100`)
    }else{
        preGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over, Random number was ${randomnumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomnumber){
        displayMessage(`You guessed it right, number is ${randomnumber}`)
        endGame()
    }else if(guess < randomnumber){
        displayMessage(`Number is TOOOO Low`)
    }else if(guess > randomnumber){
        displayMessage(`Number is TOOOO High`)
    }
}


function displayGuess(guess){
    userInput.value = ""
    guessslot.innerHTML += `${guess}, `
    numGuess++;
    remining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `${message}`
}

function endGame(){
    userInput.value = ""
    userInput.setAttribute("disabled",'')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Strat new Game</h2>`
    StartOver.appendChild(p)
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click",function(e){
        randomnumber = parseInt(Math.random() * 100 + 1);
        preGuess = [];
        numGuess = 1;
        guessslot.innerHTML = '';
        lowOrHi.innerHTML = ''
        remining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute("disabled")
        StartOver.removeChild(p)
        playGame = true
    })
}