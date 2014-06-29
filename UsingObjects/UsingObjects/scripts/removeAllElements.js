function printNewArray() {
    var numbers = jsConsole.readNumbersArray("#tb-numbers", ","),
        line = jsConsole.readNumbersArray("#tb-numbers", " "),
        value = line[1];
    jsConsole.writeLine("After all the elements with value " + value + " are removed the result is: " + removeAllElementsWithGivenValue(numbers, value));
}

function removeAllElementsWithGivenValue(numbers, value) {
    var result = [];
    for (var i = 0, len = numbers.length; i < len; i++) {
        if (numbers[i] !== value) {
            result.push(numbers[i]);
        }
    }

    return result;
}