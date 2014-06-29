function Solve(input) {
    var numbers = input.map(Number),
        sum = 0,
        maxSum = -3000000;

    for (var i = 1; i < numbers.length; i++) {
        sum = 0;
        for (var j = i; j < numbers.length; j++) {
            sum += numbers[j];
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }

    return maxSum;
}