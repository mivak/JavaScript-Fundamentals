function reverseString() {
    var text = jsConsole.read('#tb-string'),
        reversed = '';

    for (var i = 0; i < text.length; i++) {
        reversed += text[text.length - 1 - i];
    }

    jsConsole.writeLine(reversed);
}