function checkBrackets() {
    var expresion = jsConsole.read('#tb-line'),
        areCorrect = true,
        openingBracketCounter = 0;

    for (var i = 0; i < expresion.length; i++) {
        if (expresion[i] === '(') {
            openingBracketCounter++;
        }

        if (expresion[i] === ')') {
            openingBracketCounter --;
        }

        if (openingBracketCounter < 0) {
            areCorrect = false;
        }
    }

    if (openingBracketCounter !== 0) {
        areCorrect = false;
    }

    jsConsole.writeLine('Are the brackets put correctly: ' + areCorrect);
}