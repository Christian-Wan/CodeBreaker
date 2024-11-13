var code = "";
var guess = "";
var time = 0;
var score = 0;
var scoreEl = document.getElementById("score");
var timeEl = document.getElementById("clock");
var guessEl = document.getElementById("currentGuess");
var previousGuessesEl = document.getElementById("previousGuesses");
var number = 0;

function startRound() {
    time = 7;
    randomCode();
    updateHTML();
    guessEl.innerHTML = "Guess Code"
}

function randomCode() {
    code = "";
    for (var i = 0; i < 3; i++) {
        number = Math.floor(Math.random() * 3) + 1;
        code += number.toString();
    }
}

function addGuess(value) {
    guess += value.toString();
    guessEl.innerHTML = guess;
    if (guess.length == 3) {
        checkAnswer();
    }
}

function checkAnswer() {
    if (guess === code) {
        score += time;
        guessEl.innerHTML = "Guess Code"
        startRound();
        previousGuesses = [];
        clearGuesses();
    }
    else {
        time--;
        if (guess.localeCompare(code) == -1) {
            addToGuesses("higher");
        }
        else {
            addToGuesses("lower");
        }
        if (time == 0) {
            score = 0;
            clearGuesses();
            startRound();
        }
        updateHTML()
    }
    guess = "";
    guessEl.innerHTML = "Guess Code"
}

function addToGuesses(highOrLow) {
    previousGuessesEl.innerHTML += "\n" + guess + " (" + highOrLow + ")";
}

function clearGuesses() {
    previousGuessesEl.innerHTML = "Previous Guesses: "
}

function clearCurrentGuess() {
    guess = "";
    guessEl.innerHTML = "Guess Code"
}

function updateHTML() {
    timeEl.innerHTML = "Time: " + time;
    scoreEl.innerHTML = "Score: " + score;
}