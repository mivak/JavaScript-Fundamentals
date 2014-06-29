var persons = [
    { firstname: "George", lastname: "Petrov", age: 32 },
    { firstname: "Petar", lastname: "Ivanov", age: 32 },
    { firstname: "George", lastname: "Ivanov", age: 44 },
    { firstname: "Petar", lastname: "Lazarov", age: 9 },
    { firstname: "Stoyan", lastname: "Aleksandrov", age: 9 },
],
    groupedByFname = group(persons, "firstname");
    groupedByLname = group(persons, "lastname");
    groupedByAge = group(persons, "age");

function group(persons, criteria) {
    var groupa = {};

    for (var person in persons) {
        if (!groupa[persons[person][criteria]]) {
            groupa[persons[person][criteria]] = [];
        }

        var current = persons[person].firstname + " " + persons[person].lastname + " " + persons[person].age + " years old.";
        groupa[persons[person][criteria]].push(current);
    }
    
    jsConsole.writeLine('Grouped by ' + criteria);

    for (var name in groupa) {
        jsConsole.writeLine('Group "' + name + '":');
        jsConsole.writeLine("-----------------------");

        for (var member in groupa[name]) {
            jsConsole.writeLine(groupa[name][member]);
        }

        jsConsole.writeLine();
    }
}