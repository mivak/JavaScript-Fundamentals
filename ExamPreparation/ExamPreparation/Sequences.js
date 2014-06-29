function Solve(input) {
    var counter = 1;

    for (var i = 2; i < input.length; i++) {
        if (parseInt(input[i - 1]) > parseInt(input[i])) {
            counter++;
        }
    }

    return counter;
}