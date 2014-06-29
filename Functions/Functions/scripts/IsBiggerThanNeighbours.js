function printIsBigger() {//test function
    var numbers = jsConsole.readNumbersArray("#tb-numbers", ","),
        line = jsConsole.readNumbersArray("#tb-numbers", " "),
        index = line[1];
    jsConsole.writeLine("The element at the given position is bigger than its two neighbours: " + isBiggerThanNeighbours(numbers, index));
}

function isBiggerThanNeighbours(numbers, index) {
    var isBigger = false,
        doNeighboursExist = false;

    if (numbers[index - 1] !== undefined && numbers[index + 1] !== undefined) {
        doNeighboursExist = true;
    }

    if (doNeighboursExist === true) {
        if (numbers[index - 1] < numbers[index] && numbers[index + 1] < numbers[index]) {
            isBigger = true;
        }
    }

    return isBigger;
}