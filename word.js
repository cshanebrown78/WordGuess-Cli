var Letter = require("./letter.js");


function Word(word) {
    this.word = word;
    this.wordArr = [];
    this.wordBuild = function(word) {
        for (var i = 0; i < this.word.length; i++) {
            this.wordArr.push(new Letter(this.word[i]));
            // this.wordArr.push(character);
        }
        console.log(this.wordArr);
    }
    this.letterGuess = function(userInput){
        for (var j = 0; j < this.wordArr; j++) {
            wordArr[i].letterCheck(userInput);
        }
    }
}


var testWord = new Word("test");
testWord.wordBuild();
