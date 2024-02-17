"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculation = void 0;
class Calculation {
    addition(n1, n2) {
        if (Array.isArray(n1) && Array.isArray(n2)) {
            return this.addArray(n1, n2);
        }
        return this.addValue(n1, n2);
    }
    addArray(n1, n2) {
        let result = [];
        console.log(Math.max(n1.length, n2.length), n1.length, n2.length);
        for (let i = 0; i < Math.max(n1.length, n2.length); i++) {
            if (typeof n1[i] == 'number' || typeof n2[i] == 'number') {
                result.push(this.addValue((n1[i] || 0), (n2[i] || 0)));
            }
            else {
                result.push(this.addValue((n1[i] || ''), (n2[i] || '')));
            }
        }
        return result;
    }
    addValue(n1, n2) {
        if (typeof n1 === 'number' && typeof n2 === 'number') {
            return (n1 + n2);
        }
        else {
            return (String(n1) + String(n2));
        }
    }
    multiplication(n1, n2) {
        return n1 * n2;
    }
    division(n1, n2) {
        return n1 / n2;
    }
}
exports.Calculation = Calculation;
var cal = new Calculation();
console.log(cal.addition(2, 3));
console.log(cal.multiplication(2, 3));
