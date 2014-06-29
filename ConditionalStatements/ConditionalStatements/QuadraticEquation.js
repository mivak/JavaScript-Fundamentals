var a = 1,
    b = 3,
    c = -4,
    x,
    x1,
    x2,
    d;

d = b * b - (4 * a * c);

if (d < 0) {
    console.log("There are no real roots!");
} else if (d === 0) {
    x = -b / (2 * a);
    console.log("There is one real root x = " + x);
} else {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log("There are two real roots: x1 = " + x1 + " and x2 = " + x2);
}