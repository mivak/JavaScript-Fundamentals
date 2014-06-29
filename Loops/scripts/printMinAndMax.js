function printMinAndMax() {
    var numberStr = jsConsole.read("#tb-number"),
        min,
        max,
        i;

    numbers = numberStr.split(" ");

    for (i = 0; i < numbers.length; i++) {
        numbers[i] = parseInt(numbers[i]);
    }
	
	max = numbers[0];
	min = numbers[0];

    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }

        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    jsConsole.writeLine("Min = " + min + " Max = " + max);
}