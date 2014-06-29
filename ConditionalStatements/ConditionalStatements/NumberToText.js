var number = 403,//number = [0...999]
    firstDigit = number % 10,
    secondDigit = (parseInt(number / 10)) % 10,
    thirdDigit = parseInt(number / 100);

switch (thirdDigit) {
    case 1:
        thirdDigit = "One Hundred";
        break;
    case 2:
        thirdDigit = "Two Hundred";
        break;
    case 3:
        thirdDigit = "Three Hundred";
        break;
    case 4:
        thirdDigit = "Four Hundred";
        break;
    case 5:
        thirdDigit = "Five Hundred";
        break;
    case 6:
        thirdDigit = "Six Hundred";
        break;
    case 7:
        thirdDigit = "Seven Hundred";
        break;
    case 8:
        thirdDigit = "Eight Hundred";
        break;
    case 9:
        thirdDigit = "Nine Hundred";
        break;
}

switch (secondDigit) {
    case 2:
        secondDigit = "Twenty";
        break;
    case 3:
        secondDigit = "Thirty";
        break;
    case 4:
        secondDigit = "Fourty";
        break;
    case 5:
        secondDigit = "Fifty";
        break;
    case 6:
        secondDigit = "Sixty";
        break;
    case 7:
        secondDigit = "Seventy";
        break;
    case 8:
        secondDigit = "Eighty";
        break;
    case 9:
        secondDigit = "Ninety";
        break;
}

if (secondDigit !== 1) {
    switch (firstDigit) {
        case 1:
            firstDigit = "One";
            break;
        case 2:
            firstDigit = "Two";
            break;
        case 3:
            firstDigit = "Three";
            break;
        case 4:
            firstDigit = "Four";
            break;
        case 5:
            firstDigit = "Five";
            break;
        case 6:
            firstDigit = "Six";
            break;
        case 7:
            firstDigit = "Seven";
            break;
        case 8:
            firstDigit = "Eight";
            break;
        case 9:
            firstDigit = "Nine";
            break;
    }
} else {
    switch (firstDigit) {
        case 0:
            firstDigit = "Ten";
            break;
        case 1:
            firstDigit = "Eleven";
            break;
        case 2:
            firstDigit = "Twelve";
            break;
        case 3:
            firstDigit = "Thirteen";
            break;
        case 4:
            firstDigit = "Fourteen";
            break;
        case 5:
            firstDigit = "Fifteen";
            break;
        case 6:
            firstDigit = "Sixteen";
            break;
        case 7:
            firstDigit = "Seventeen";
            break;
        case 8:
            firstDigit = "Eighteen";
            break;
        case 9:
            firstDigit = "Nineteen";
            break;
    }
}

if (thirdDigit === 0) {
    if (secondDigit === 0) {
        if (firstDigit === 0) {
            number = "Zero";
        } else {
            number = firstDigit;
        }
    } else if (secondDigit === 1) {
        number = firstDigit;
    } else {
        number = secondDigit + " " + firstDigit;
    }
} else {//thirdDigit > 0
    if (secondDigit === 0) {
        if (firstDigit === 0) {
            number = thirdDigit;
        } else {
            thirdDigit + " and " + firstDigit;
        }
    } else if (secondDigit === 1){//secondDigit > 0
        number = thirdDigit + " and " + firstDigit;
    } else {
        if (firstDigit === 0) {
            number = thirdDigit + " and " + secondDigit;
        } else {
            number = thirdDigit + " and " + secondDigit + " " + firstDigit;
        }
    }
}