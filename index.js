var Word = require("./word.js");
var inquirer = require("inquirer");

var wordGrab = 0;
var randWord = "";
var wordConvert = "";
var cityList = ["dallas", "austin", "san antonio", "houston", "los angeles", "new orleans", "chicago", "new york", "boston", "atlanta", "miami", "denver", "portland"]
var guesses = 6;



function gameStart() {
    if(cityList.length>-1) {
        randWord = cityList[Math.floor(Math.random()*cityList.length)];
        // console.log(randWord);
        wordConvert = new Word(randWord);
        wordConvert.wordBuild();
        console.log("\nYou have 6 wrong guesses to figure out the major US city.\n")
        console.log(wordConvert.displayWord());
        cityList.splice(randWord,1);
    } esle {
    console.log("/nThere are no cities left to guess.")
        inquirer.prompt([
            {
                type: "checkbox",
                name: "startOver",
                message: "Do you want to start over?",
                choices: ["Yes", "No"]
            }
        ])
        .then(function(user) {
            if(user.startOver === "Yes"){
                gameRestart();
            } else {
                console.log("Thanks for playing...Goodbye!")
            }
        })
    }
}



gameStart();

function gameRestart() {
    var wordGrab = 0;
    var randWord = "";
    var wordConvert = "";
    var cityList = ["dallas", "austin", "san antonio", "houston", "los angeles", "new orleans", "chicago", "new york", "boston", "atlanta", "miami", "denver", "portland"]
    var guesses = 6;
    gameStart();
}