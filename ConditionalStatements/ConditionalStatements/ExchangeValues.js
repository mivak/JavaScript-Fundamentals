var first = 5,
    second = 4,
    temp;

if (first > second) {
    temp = first;
    first = second;
    second = temp;
}

console.log("first = " + first + "\nsecond = " + second);