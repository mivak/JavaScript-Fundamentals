var array = new Array(1, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5),
    i = 0,
    current = 1,
    position = 0,
    max = 1;

jsConsole.write("Array = {");
for (i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
        jsConsole.write(array[i] + ", ");
    } else {
        jsConsole.write(array[i] + "} --> ");
    }
}

maxIncreasingSequence(array);

function maxIncreasingSequence(array) {
       for (i = 0; i < array.length - 1; i++) {
        if (array[i] < array[i + 1]) {
            current++;
            if (current > max) {
                max = current;
                position = i + 1;
            }
        } else {
            current = 1;
        }
    }

    for (i = position - max + 1; i <= position; i++) {
        if (i === position - max + 1) {
            jsConsole.write("{" + array[i] + ", ");
        } else if (i !== position) {
            jsConsole.write(array[i] + ", ");
        } else {
            jsConsole.write(array[i] + "}");
        }
    }
}