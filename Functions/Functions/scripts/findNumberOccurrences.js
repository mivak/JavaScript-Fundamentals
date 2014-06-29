function printNumberOccurrences() {//test function
    var numbers = jsConsole.readNumbersArray("#tb-numbers", ","),
        line = jsConsole.readNumbersArray("#tb-numbers", " "),
        number = line[1];
    jsConsole.writeLine(findNumberOccurrences(numbers, number));
}

function findNumberOccurrences(numbers, number) {
    var count = 0;
    for (var i = 0, len = numbers.length; i < len; i++) {
        if (number === numbers[i]) {
            count++;
        }
    }

    return count;
}