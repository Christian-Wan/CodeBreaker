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
}

function randomCode() {
    code = "";
    for (var i = 0; i < 3; i++) {
        number = Math.floor(Math.random() * 3) + 1;
        code += number.toString();
    }
    guessEl.innerHTML = code;
}

function addGuess(value) {
    guess += value.toString();
    guessEl.innerHTML = guess;
    if (guess.length == 3) {
        checkAnswer();
        guessEl.innerHTML = ""
    }
}

function checkAnswer() {
    if (guess === code) {
        score += time;
        time = 7;
        previousGuesses = [];
        clearGuesses();
        startRound()
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
    }
    guess = "";
}

function addToGuesses(highOrLow) {
    previousGuessesEl.innerHTML += "\n" + guess + " (" + highOrLow + ")";
}

function clearGuesses() {
    previousGuessesEl.innerHTML = "Previous Guesses: "
}

function clearCurrentGuess() {
    guess = "";
    guessEl.innerHTML = ""
}

function updateHTML() {
    timeEl.innerHTML = "Time: " + time;
    scoreEl.innerHTML = "Score: " + score;
}