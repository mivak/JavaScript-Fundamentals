var first = -5,
    second = 3,
    third = 7,
    sign;

if (!first || !second || !third) {
    sign = 0;
} else if (first > 0) {
    if ((second > 0 && third > 0) || (second < 0 && third < 0)) {
        sign = "+";
    } else {
        sign = "-";
    }
} else if (first < 0) {
    if ((second > 0 && third > 0) || (second < 0 && third < 0)) {
        sign = "-";
    } else {
        sign = "+";
    }
}

console.log("sign = " + sign);