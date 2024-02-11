import { Calculation } from "../src/Calculation";

describe("Additon Operation",() =>{
    
    let calculator: Calculation;
    
    beforeAll(() => {
        calculator = new Calculation();
    })
    
    test("should add two number",()=> {
        let n1: number = 5;
        let n2: number = 4;
        let ans = calculator.addition(n1,n2);
        expect(ans).toBe(9);
    });

    test("should multiply two number",()=> {
        let n1: number = 5;
        let n2: number = 4;
        let ans = calculator.multiplication(n1,n2);
        expect(ans).toBe(20);
    });

});