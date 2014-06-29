function Solve(input) {
    var rowsColumnsAndJumps = parseNumbers(input[0]),
        totalRows = rowsColumnsAndJumps[0],
        totalColumns = rowsColumnsAndJumps[1],
        totalJumps = rowsColumnsAndJumps[2],
        startPosition = parseNumbers(input[1]),
        field = [],
        counter = 1,
        currentRow = startPosition[0],
        currentColumn = startPosition[1],
        jumps = readJumps(),
        escaped = false,
        sumOfNumbers = 0,
        sumOfJumps = 0,
        jumpsIndex = 0,
        currentJump = 0;

    field = initField();

    while (true) {
        currentJump = jumps[jumpsIndex];

        if (currentRow < 0 || currentRow >= totalRows || currentColumn < 0 || currentColumn >= totalColumns) {
            escaped = true;
            break;
        }

        if (field[currentRow][currentColumn] === 'X') {
            escaped = false;
            break;
        }

        sumOfNumbers += field[currentRow][currentColumn];
        sumOfJumps++;

        jumpsIndex++;
        if (jumpsIndex >= jumps.length) {
            jumpsIndex = 0;
        }

        field[currentRow][currentColumn] = 'X';

        currentRow += currentJump.row;
        currentColumn += currentJump.column;
    }

    function initField() {
        for (var i = 0; i < totalRows; i++) {
            field[i] = [];
            for (var j = 0; j < totalColumns; j++) {
                field[i][j] = counter;
                counter++;
            }
        }

        return field;
    }

    function readJumps() {
        var jumps = [];

        for (var i = 2; i < 2 + totalJumps; i++) {
            var parsedJump = parseNumbers(input[i]);
            var currentJump = {
                row: parsedJump[0],
                column: parsedJump[1]
            };

            jumps.push(currentJump);
        }

        return jumps;
    }

    function parseNumbers(input) {
        return input.split(' ').map(Number);
    }

    if (escaped) {
        return 'escaped ' + sumOfNumbers;
    } else {
        return 'caught ' + sumOfJumps;
    }
}