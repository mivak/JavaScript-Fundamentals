function NumbersNotDivisibleBy3And7() {
	var number = jsConsole.readInteger("#tb-number"),
		i;
	for ( i = 1; i <= number; i++) {
		if ((i % 7) || (i % 3)) {
			jsConsole.write(i + " ");
		}
	}
}