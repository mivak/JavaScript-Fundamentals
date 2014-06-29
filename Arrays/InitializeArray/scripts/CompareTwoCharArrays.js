var firstArray = new Array("a", "b", "c"),
    secondArray = new Array("a", "b", "c"),
    thirdArray = new Array("A", "b", "c");

compareTwoCharArrays(firstArray, secondArray);
jsConsole.writeLine()
compareTwoCharArrays(firstArray, thirdArray);

function compareTwoCharArrays(firstArray, secondArray) {
    var areEqual = true;

    if (firstArray.length === secondArray.length) {
        for (var i = 0; i < firstArray.length; i++) {
            if (firstArray[i] !== secondArray[i]) {
                areEqual = false;
                break;
            }
        }
    }
    else {
        areEqual = false;
    }

    jsConsole.write("firstArray = ");
    for (var j = 0; j < firstArray.length; j++) {
        jsConsole.write(firstArray[j] + " ");
    }

    jsConsole.writeLine();

    jsConsole.write("secondArray = ");
    for (var k = 0; k < secondArray.length; k++) {
        jsConsole.write(secondArray[k] + " ");
    }

    jsConsole.writeLine();
    
    jsConsole.writeLine("The two arrays are equal: " + areEqual);
}