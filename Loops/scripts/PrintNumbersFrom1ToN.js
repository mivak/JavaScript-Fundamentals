function printNumbersFrom1ToN() {
				var number = jsConsole.readInteger("#tb-number"),
					i;
				for (i = 1; i <= number; i++) {
					jsConsole.write(i + " ");
				}
			}