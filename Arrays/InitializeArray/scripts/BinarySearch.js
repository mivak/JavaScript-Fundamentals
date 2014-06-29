var array = new Array(0, 2, 3, 5, 7, 8, 10, 15, 16, 21),//sorted
    value = 5,
    i = 0,
    min = 0,
    max = array.length - 1,
    middle = 0;

jsConsole.write("Array = {");
for (i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
        jsConsole.write(array[i] + ", ");
    }
    else {
        jsConsole.write(array[i] + "} --> ");
    }
}

binarySearch(array, 5);

function binarySearch(array, value) {
    while (min <= max) {
        middle = parseInt((min + max) / 2);
        if (value === array[middle]) {
            break;
        }
        else if (array[middle] < value) {
            min = middle + 1;
        }
        else {
            max = middle - 1;
        }
    }

    if (value === array[middle]) {
        jsConsole.write("The searched number " + value + " was found at position " + middle);
    }
    else {
        jsConsole.write("The searched number " + value + " was not found in the array");
    }
}