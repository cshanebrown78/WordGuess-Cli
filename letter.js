function Letter(char) {
    this.char = char;
    this.guessed = false;
    this.toString = function() {
        if (char === " ") {
            return " ";
        } else if (this.guessed === false) {
                return "_";
            } else {
                return this.char;
            };
    };
    this.letterCheck = function(userInput) {
        switch(userInput) {
            case this.char:
                this.guessed = true;
                break;
        }
    }
}

// var testChar = new Letter("a");
// testChar.toString();


module.exports = Letter;