var text = "Lorem Ipsum is simply dummy text of The printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    searchedWord = " the ",
    isCaseSensitive = true;

jsConsole.writeLine(text);
jsConsole.writeLine();
showOccurences(text, searchedWord);
showOccurences(text, searchedWord, isCaseSensitive)

function showOccurences(text, searchedWord, isCaseSensiteve) {
    var occurrences = 0,
        words = [],
        index = "";

    isCaseSensiteve = isCaseSensiteve || false;
    if (isCaseSensiteve === false) {
        words = text.split(searchedWord);

        for (var word in words) {
            occurrences++;
        }

        jsConsole.writeLine("The occurrences of the word \"" + searchedWord.trim() + "\" (case-insensitive search) are " + occurrences);
    } else {
        index = text.indexOf(searchedWord);
        while (index >= 0) {
            occurrences++;
            index = text.indexOf(searchedWord, index + 1);
        }

        jsConsole.writeLine("The occurrences of the word \"" + searchedWord.trim() + "\" (case-sensitive search) are " + occurrences);
    }
}