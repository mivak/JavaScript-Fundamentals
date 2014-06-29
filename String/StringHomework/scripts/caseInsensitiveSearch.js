function caseInsensitiveSearch() {
    var text = jsConsole.read('#tb-line'),
        counter = 0,
        lowerText = text.toLowerCase(),
        word = jsConsole.read('#searchedWord');

    for (var i = 0; i < lowerText.length - word.length; i++) {
        if (lowerText.substr(i, word.length) === word) {
            counter++;
        }
    }

    jsConsole.writeLine(counter);
}