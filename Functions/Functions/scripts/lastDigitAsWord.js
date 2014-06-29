function printLastDigitAsWord() {
    var number = jsConsole.readFloat("#tb-number");
        lastDigit = number % 10,
        searchedWord = "";

    switch (lastDigit) {
        case 0:
            searchedWord = "Zero";
            break;
        case 1:
            searchedWord = "One";
            break;
        case 2:
            searchedWord = "Two";
            break;
        case 3:
            searchedWord = "Three";
            break;
        case 4:
            searchedWord = "Four";
            break;
        case 5:
            searchedWord = "Five";
            break;
        case 6:
            searchedWord = "Six";
            break;
        case 7:
            searchedWord = "Seven";
            break;
        case 8:
            searchedWord = "Eight";
            break;
        case 9:
            searchedWord = "Nine";
            break;
    }

    jsConsole.writeLine(searchedWord);
}