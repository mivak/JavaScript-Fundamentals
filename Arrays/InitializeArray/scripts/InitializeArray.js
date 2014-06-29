var array = new Array(20);

initializeArray(array);

function initializeArray(Array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = i * 5;
    }

    jsConsole.writeLine(array.join(" "));
}