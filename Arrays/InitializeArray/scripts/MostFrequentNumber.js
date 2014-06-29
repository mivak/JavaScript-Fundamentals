var array = new Array(3, 6, 2, 6, 7, 9, 6, 1, 8, 0, 4),
    times = 1,
    maxTimes = 1,
    number = 0,
    i = 0,
    j = 0;

jsConsole.write("Array = {");
for (i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
        jsConsole.write(array[i] + ", ");
    }
    else {
        jsConsole.write(array[i] + "} --> ");
    }
}

mostFrequentNumber(array);

function mostFrequentNumber(array) {
    for (i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                times++;
            }
        }

        if (times > maxTimes) {
            maxTimes = times;
            number = array[i];
        }

        times = 1;
    }

    jsConsole.write(number + " (" + maxTimes + " times)");
}