var first = 10,
    second = 20,
    third = 15,
    fourth = 17,
    fifth = 0,
    greatest = Number.MIN_VALUE;

if (greatest < first) {
    greatest = first;
}

if (greatest < second) {
    greatest = second;
}

if (greatest < third) {
    greatest = third;
}

if (greatest < fourth) {
    greatest = fourth;
}

if (greatest < fifth) {
    greatest = fifth;
}

console.log("Greatest number = " + greatest);