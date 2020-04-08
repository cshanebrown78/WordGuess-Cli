var Word = require("./word.js");
var inquirer = require("inquirer");

var wordGrab = 0;
var randWord = "";
var wordConvert = "";
var cityList = ["dallas", "austin", "san antonio", "houston", "los angeles", "new orleans", "chicago", "new york", "boston", "atlanta", "miami", "denver", "portland"]
var guesses = 0;



function gameStart() {
    randWord = cityList[Math.floor(Math.random()*cityList.length)];
    console.log(randWord);
    wordConvert = new Word(randWord);
    wordConvert.wordBuild();
    console.log(wordConvert.displayWord());

    cityList.splice(randWord,1);
    // console.log(cityList)
    
}



gameStart();

