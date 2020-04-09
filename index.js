var Word = require("./word.js");
var inquirer = require("inquirer");

var wordGrab = 0;
var randWord = "";
var wordConvert = "";
var cityList = ["dallas", "austin", "san antonio", "houston", "los angeles", "new orleans", "chicago", "new york", "boston", "atlanta", "miami", "denver", "portland"]
var guesses = 6;
var userLetter = "";
var theWord = "";



function gameStart() {
    // console.log(cityList.length)
    if(cityList.length > 0) {
        randWord = cityList[Math.floor(Math.random()*cityList.length)];
        console.log(randWord);
        wordConvert = new Word(randWord);
        // console.log("--" + JSON.stringify(wordConvert));
        wordConvert.wordBuild();
        console.log("\nYou have 6 wrong guesses to figure out the major US city.\n")
        // console.log(wordConvert.displayWord() + "\n");
        cityList.splice(randWord,1);
        gamePlay();
    } else {
    console.log("\nThere are no cities left to guess.");
    gameRestart();
    
    }
}

function gamePlay() {
    if(guesses > 0) {
        console.log(wordConvert.displayWord() + "\n");
        inquirer.prompt ([
            {
                type: "input",
                name: "letterGuessed",
                message: "Guess a letter of the city."
            }
        ]).then(function(user) {
            userLetter = user.letterGuessed.toLowerCase();
            // console.log("----" + userLetter);
            inputCheck(userLetter);
        })
    } else { 
        gameRestart();
    }
};

function inputCheck(userLetter) {
    // console.log("----" + userLetter)
    // console.log("---" + userLetter.length);
    // console.log(wordConvert.displayWord() + "\n");
    if(userLetter.length === 1){
        var tempWord = wordConvert.displayWord();
        // console.log(wordConvert.wordBuild());
        // console.log("---" + tempWord);
        wordConvert.letterGuess(userLetter);
        if(tempWord === wordConvert.displayWord()) {
            console.log("\You guessed incorrectly!")
            guesses--;
            console.log("\nYou have " + guesses + " guesses left.");
            gamePlay();
        } else {
            console.log("You guessed correctly!");
            gamePlay();

        }
    } else {
        console.log("\Please pick only one letter at a time.")
        gamePlay();
    }
}

gameStart();

function gameRestart() {

    inquirer.prompt([
        {
            type: "checkbox",
            name: "startOver",
            message: "Do you want to start over?",
            choices: ["Yes", "No"]
        }
    ])
    .then(function(user) {
        var playAgain = (user.startOver)
        console.log(playAgain[0]);
        if(playAgain[0] === "Yes"){
            wordGrab = 0;
            randWord = "";
            wordConvert = "";
            cityList = ["dallas", "austin", "san antonio", "houston", "los angeles", "new orleans", "chicago", "new york", "boston", "atlanta", "miami", "denver", "portland"]
            guesses = 6;
            gameStart();
        } else {
            console.log("Thanks for playing...Goodbye!")
        }
    })


}