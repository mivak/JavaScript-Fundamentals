var first = 31,
    second = 16,
    third = 30,
    temp;

if (first >= second) {
    if (third > second) {
        if (third > first) {
            temp = second;
            second = first;
            first = third;
            third = temp;
        }
        else {
            temp = second;
            second = third;
            third = temp;
        }
    }//no need of "else" because it is the initial order
}
else {//second > first
    if (third > first) {
        if (third > second) {
            temp = first;
            first = third;
            third = temp;
        }
        else {
            temp = first;
            first = second;
            second = third;
            third = first;
        }
    } else {
        temp = first;
        first = second;
        second = temp;
    }
}

console.log("first = " + first + "\nsecond = " + second + "\nthird = " + third);