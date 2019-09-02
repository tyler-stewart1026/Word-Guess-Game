// Psuedo Coding steps----

// Variables---
var wins = 0;
var losses = 0;
var lettersGuessed = [];
var guessesSoFar = [];
var words = ["Corsair", "Keelhaul", "Parley", "Landlubber", "Cutless", "Ahoy", "Aye", "Parrot", "Brig", "Rum", "Skaliwag", "Scurvy"];
var randomWord = currentWord();
console.log(randomWord)

// start button variables


// Button Function----
document.getElementById("button").onclick = randomWord;

// main function

function currentWord() {

    var text = words[Math.floor(Math.random() * words.length)]

    return text;
};
//Steps I'd like to achieve
// generate random word probably from array of strings made up of words pirate-y
// replace letters with _ _ _ _ and have them fill in when users guess === the letter/s in the word. 
// any wrong guesses are displayed on screen and a strike against them is displayed until theyre out of guesses 
// Keep it Pirate.
