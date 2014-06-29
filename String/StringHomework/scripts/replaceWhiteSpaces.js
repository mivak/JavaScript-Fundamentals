function replaceWhiteSpaces() {
    var text = jsConsole.read('#tb-line'),
        replaceWith = '&nbsp',
        newText = text.split(' '),
        replaced = [];

    for (var i = 0; i < newText.length; i++) {
        if (newText[i] !== '') {
            replaced.push(newText[i]);
        }
    }

    jsConsole.writeLine(replaced.join(replaceWith));
}