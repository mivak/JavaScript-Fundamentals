var objectToCheck = [],
    propertyToCheck = "length";

function ifAnObjectContainsAProperty(objectToCheck, propertyToCheck) {
    if (objectToCheck.hasOwnProperty(propertyToCheck)) {
        return true;
    }

    if (propertyToCheck in objectToCheck) {
        return true;
    }

    return false;
}

jsConsole.writeLine("The object " + objectToCheck + " contains the property " +
                        propertyToCheck + " : " + ifAnObjectContainsAProperty(objectToCheck, propertyToCheck));