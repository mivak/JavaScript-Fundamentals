function reverseDigits() {
    var number = jsConsole.readInteger("#tb-number"),
        reversedNumber = 0;

    while (number > 0) {
        reversedNumber *= 10;
        reversedNumber += (number % 10);
        number = parseInt(number / 10);
    }

    jsConsole.writeLine(reversedNumber);
}