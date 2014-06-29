var smallest,
	biggest,
	property;

findSmallest(window);
findBiggest(window);
findSmallest(navigator);
findBiggest(navigator);
findSmallest(document);
findBiggest(document);

function findSmallest(object) {
    smallest = 'zzz';
    for (property in object) {
		if (property < smallest) {
			smallest = property;
		}
    }

	jsConsole.writeLine("The smallest lexicographically property in "+object+ " is "+smallest);
}

function findBiggest(object) {
    biggest = 'aaa';
    for (property in object) {
        if (property > biggest) {
            biggest = property;
        }
    }
   
    jsConsole.writeLine("The biggest lexicographically property in " + object + " is " + biggest);
}