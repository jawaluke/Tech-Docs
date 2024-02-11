export class Calculation {

    addition(n1: number, n2: number): number {
        return n1 + n2;
    }

    multiplication(n1: number, n2: number): number {
        return n1 * n2;
    }

    division(n1: number, n2: number): number {
        return n1 / n2;
    }
}

var cal = new Calculation();
console.log(cal.addition(2,3));

console.log(cal.multiplication(2,3));