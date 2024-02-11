"use strict";
class Calculation {
    addition(n1, n2) {
        return n1 + n2;
    }
    multiplication(n1, n2) {
        return n1 * n2;
    }
}
var cal = new Calculation();
console.log(cal.addition(2, 3));
console.log(cal.multiplication(2, 3));
