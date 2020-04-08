var Letter = require("./letter.js");


function Word(word) {
    this.word = word;
    this.wordArr = [];
    this.wordBuild = function(word) {
        for (var i = 0; i < this.word.length; i++) {
            this.wordArr.push(new Letter(this.word[i]));
            // this.wordArr.push(character);
            // this.wordArr[i].toString();
        }
        
    }
    this.displayWord = function() {
        toDisplay = [];
        for (var j = 0; j < this.wordArr.length; j++) {
            toDisplay.push(this.wordArr[j].toString());
        }
        return toDisplay.join(" ");
    }
    this.letterGuess = function(userInput){
        for (var k = 0; k < this.wordArr; k++) {
            wordArr[k].letterCheck(userInput);
        }
    }
}


    var testWord = new Word("test");
    testWord.wordBuild();
    

module.exports = Word;