function extractContent() {
    var text = '<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>',
        result = [],
        inTag = false;

    for (var i = 0; i < text.length; i++) {
        if (text[i] === '<') {
            inTag = true;
        }

        if (!inTag) {
            result.push(text[i]);
        }

        if (text[i] === '>') {
            inTag = false;
        }
    }

    jsConsole.writeLine('Text: ' + text);
    jsConsole.writeLine();
    jsConsole.writeLine('Result: ' + result.join(''));
}