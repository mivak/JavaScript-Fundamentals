var first = 1,
    second = 3,
    third = 2,
    biggest = first;

if (biggest < second) {
    biggest = second;
}

if (biggest < third) {
    biggest = third;
}

console.log("biggest = " + biggest);