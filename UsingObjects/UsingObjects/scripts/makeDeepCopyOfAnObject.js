var number = 13,
    person = { firstName: "Ivan", lastName: "Ivanov", toString: function personToString() {return this.firstName + " " + this.lastName} },
    numberTest = 0,
    personTest = [];

numberTest = makeDeepCopyOfAnObject(number);
personTest = makeDeepCopyOfAnObject(person);

function makeDeepCopyOfAnObject(objectToCopy) {
    var copy = objectToCopy.constructor();

    if (objectToCopy === null || typeof(objectToCopy) !== "object") {
        return objectToCopy;
    }

    for (var attr in objectToCopy) {
        if (objectToCopy.hasOwnProperty(attr)) {
            copy[attr] = objectToCopy[attr];
        }
    }
    
    return copy;
}

jsConsole.writeLine(number);
jsConsole.writeLine("Copy: " + numberTest);
jsConsole.writeLine(person.toString());
jsConsole.writeLine("Copy: " + personTest.toString());