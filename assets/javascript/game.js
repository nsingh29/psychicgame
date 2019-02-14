
var compChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let wins = 0;
let losses = 0;
let guesses = 9;
let guessesLeft = 9;
let guessedLetters = [];
var letterToGuess = null;

var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];

function updateGuessesLeft() {
    document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};
function updateLetterToGuess() {
    this.letterToGuess = this.compChoices[Math.floor(Math.random() * this.compChoices.length)];
};
function updateGuessesSoFar() {

    document.querySelector('#let').innerHTML = "Your guesses so far: " + guessedLetters.join(', ');
};
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}
updateLetterToGuess();
updateGuessesLeft();

document.onkeyup = function(event) {
    var uGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = computerChoices.includes(uGuess);
if (check === true) {
    guessesLeft--;
    guessedLetters.push(uGuess);
    updateGuessesLeft();
    updateGuessesSoFar();

}

// 1. Key event not working
// 2. Need to update wins/losses
// 3. possibly use query selector...?
// 4. Reset after guesses run out?