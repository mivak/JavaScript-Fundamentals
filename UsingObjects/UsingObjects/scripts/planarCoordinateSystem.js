var a = Point(1, 1),
    b = Point(1, 3),
    ab = Line(a, b),
    bc = Line(Point(1, 3), Point(2, 2)),
    ca = Line(Point(2, 2), Point(1, 4));

function Point(x, y) {
    return { X: x, Y: y };
}

function Line(pointOne, pointTwo) {
    return { P1: pointOne, P2: pointTwo, Length: CalclulateDistance(pointOne, pointTwo) };
}

function CalclulateDistance(pointOne, pointTwo) {
    return (Math.sqrt((pointTwo.X - pointOne.X) * (pointTwo.X - pointOne.X) + (pointTwo.Y - pointOne.Y) * (pointTwo.Y - pointOne.Y)));
}

function CanFormTriangle(lineOne, lineTwo, lineThree) {
    if (((lineOne.Length + lineTwo.Length) > lineThree.Length) &&
        ((lineOne.Length + lineThree.Length) > lineTwo.Length) &&
        ((lineThree.Length + lineTwo.Length) > lineOne.Length)) {
        return true;
    }

    return false;
}

if (CanFormTriangle(ab, bc, ca)) {
    jsConsole.writeLine("They can form a triangle!");
} else {
    jsConsole.writeLine("They can not form a triangle!");
}