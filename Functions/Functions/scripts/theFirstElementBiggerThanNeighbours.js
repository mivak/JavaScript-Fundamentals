function printIsBigger() {
    var numbers = jsConsole.readNumbersArray("#tb-numbers", ",");
    jsConsole.writeLine("The first element bigger than its two neighbours has index: " + theFirstElementBiggerThanNeighbours(numbers));
}

function theFirstElementBiggerThanNeighbours(numbers) {
    var doNeighboursExist = false,
        index = -1;

    for (var i = 0, len = numbers.length; i < len; i++) {
        if (numbers[i - 1] !== undefined && numbers[i + 1] !== undefined) {
            doNeighboursExist = true;
        }

        if (doNeighboursExist === true) {
            if (numbers[i - 1] < numbers[i] && numbers[i + 1] < numbers[i]) {
                index = i;
                break;
            }
        }
    }

    return index;
}