var array = new Array(3, 6, 2, 7, 9, 1, 8, 0, 4),
    min = Number.MAX_VALUE,
    current = 0,
    i,
    j,
    tempArray = new Array(array.length);

jsConsole.write("Array = {");
for (i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
        jsConsole.write(array[i] + ", ");
    }
    else {
        jsConsole.write(array[i] + "} --> ");
    }
}

selectionSort(array);

function selectionSort(array) {
    for (i = 0; i < tempArray.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[j] < min) {
                min = array[j];
                current = j;
            }
        }

        tempArray[i] = min;
        array.splice(current, 1);
        min = Number.MAX_VALUE;
    }

    jsConsole.write(tempArray.join(", "));
}