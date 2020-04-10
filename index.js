var Word = require("./word.js");
var inquirer = require("inquirer");

var randWord = "";
var wordConvert = "";
var cityList = ["dallas", "austin", "san antonio", "houston", "los angeles", "new orleans", "chicago", "new york", "boston", "atlanta", "miami", "denver", "portland"]
var guesses = 6;
var userLetter = "";
var usedLetters = [];




function gameStart() {
    // console.log(cityList)
    if(cityList.length > 0) {
        // chooses a city randomly
        randWord = cityList[Math.floor(Math.random()*cityList.length)];
        // console.log(randWord);
        // the two below variables have to be reset each time gameStart is run
        guesses = 6;
        usedLetters = [];
        // gives the index so that the city can be removed and not randomly picked again
        var c = cityList.indexOf(randWord);
        // sends the random city to the word js
        wordConvert = new Word(randWord);
        // console.log("--" + JSON.stringify(wordConvert));
        // runs the necessary function to break the city down into separate letters
        wordConvert.wordBuild();
        console.log("\nYou have 6 wrong guesses to figure out the major US city.\n");
        // console.log(wordConvert.displayWord() + "\n");
        // removes the randomly chosen city from the list
        cityList.splice(c,1);
        // console.log(cityList)
        gamePlay();
    } else {
    console.log("\nThere are no cities left to guess.");
    gameRestart();
    
    }
}

// function prompts the user for a letter if they have guesses left or sends them to game restart if no guesses left
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
            if (usedLetters.indexOf(userLetter) > -1) {
                console.log("\nPlease choose a letter you haven't used already.\n");
                gamePlay();

            } else {
                usedLetters.push(userLetter);
                inputCheck(userLetter);
            }
            
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
        // console.log("---" + wordConvert.displayWord().replace(/ /g,""));
        if(tempWord === wordConvert.displayWord()) {
            console.log("\nYou guessed incorrectly!")
            guesses--;
            console.log("\nYou have " + guesses + " guesses left.");
            gamePlay();
        } else if (randWord.replace(/ /g,"") === wordConvert.displayWord().replace(/ /g,"")) {
        
            console.log("\nYou guessed the right City.\n"+ randWord.toUpperCase() + "\nNext word\n");
            gameStart();

        } else {  
                console.log("\nYou guessed correctly!\n");
                gamePlay();
        };
        
    } else {
        console.log("\Please pick only one letter at a time.")
        gamePlay();
    }
};


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
            randWord = "";
            wordConvert = "";
            cityList = ["dallas", "austin", "san antonio", "houston", "los angeles", "new orleans", "chicago", "new york", "boston", "atlanta", "miami", "denver", "portland"]
            guesses = 6;
            userLetter = "";
            usedLetters = [];
            gameStart();
        } else {
            console.log("Thanks for playing...Goodbye!")
        }
    })


}