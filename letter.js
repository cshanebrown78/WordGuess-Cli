function Letter (char) {
    this.char = char;
    this.guessed = false;
    this.toString = function() {
        if (char === " ") {
            return " ";
        } else if (!this.guessed) {
                return "_";
            } else {
                return this.char;
            };
    };
    this.check = function(userInput) {
        switch(userinput) {
            case this.char:
                this.guessed = true;
                break;
        }
    }
}

