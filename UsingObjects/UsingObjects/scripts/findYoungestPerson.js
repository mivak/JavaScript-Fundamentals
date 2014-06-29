var persons = [
    { firstName: "Ivan", lastName: "Ivanov", age: 25 },
    { firstName: "Gosho", lastName: "Georgiev", age: 32 },
    { firstName: "Pesho", lastName: "Petrov", age: 21 }
];

jsConsole.writeLine("The youngest person is: " + toString(findYoungestPerson(persons)));

function findYoungestPerson(persons) {
    var youngestAge = 200,
        youngestPersonPosition = 0;

    for (var prop in persons) {
        if (persons[prop].age < youngestAge) {
            youngestAge = persons[prop].age
            youngestPersonPosition = prop;
        }
    }

    return youngestPersonPosition;
}

function toString(youngestPersonPosition) {
    return persons[youngestPersonPosition].firstName + " " + persons[youngestPersonPosition].lastName +
        " " + persons[youngestPersonPosition].age;
}