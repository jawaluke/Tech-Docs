import { Calculation } from "../src/Calculation";

describe("Additon Operation",() =>{
    
    let calculator: Calculation;
    
    beforeAll(() => {
        calculator = new Calculation();
    })
    
    test("should add two number",()=> {
        let n1: number = 5;
        let n2: number = 4;
        let ans = calculator.addition(n1, n2);
        expect(ans).toBe(9);
    });

    test("should add two float/decimal", ()=> {
        let n1 = 5.5
        let n2 = 2.4
        let ans = calculator.addition(n1, n2);
        expect(ans).toBe(7.9)
    })

    test("should add two number array with equal length",() => {
        let n1 = [1, 2, 3];
        let n2 = [4, 5, 6];
        let ans = calculator.addition(n1, n2);
        expect(ans).toEqual([5, 7, 9])
    })

    test("should add two number array with different length",() => {
        let n1 = [1, 2];
        let n2 = [3, 4, 5];
        let ans = calculator.addition(n1, n2);
        expect(ans).toEqual([4, 6, 5]);
    })

    test("should add two number array with different length",() => {
        let n1 = [1, 2, 5];
        let n2 = [3, 4];
        let ans = calculator.addition(n1, n2);
        expect(ans).toEqual([4, 6, 5]);
    })
    
    test("should add two empty number array and return empty array", () => {
        let n1: number[] = [];
        let n2: number[] = [];
        let ans = calculator.addition(n1, n2);
        expect(ans).toEqual([]);
    })

    test("should add two string", () => {
        let n1 = "hello";
        let n2 = "fucker";
        let ans = calculator.addition(n1, n2);
        expect(ans).toBe("hellofucker")
    })

    test("should add two string array with equal length",() => {
        let n1 = ['a', 'b', 'c'];
        let n2 = ['d', 'e', 'f'];
        let ans = calculator.addition(n1, n2)
        console.log(ans)
        expect(ans).toEqual(['ad', 'be', 'cf'])
    })

    test("should add two string array with different length",() => {
        let n1 = ['a', 'b', 'c'];
        let n2 = ['d', 'e'];
        let ans = calculator.addition(n1, n2)
        expect(ans).toEqual(['ad', 'be', 'c'])
    })

    test("should add two string array with different length",() => {
        let n1 = ['a', 'b'];
        let n2 = ['d', 'e', 'f'];
        let ans = calculator.addition(n1, n2)
        expect(ans).toEqual(['ad', 'be', 'f'])
    })

    test("should multiply two number",()=> {
        let n1: number = 5;
        let n2: number = 4;
        let ans = calculator.multiplication(n1, n2);
        expect(ans).toBe(20);
    });

    test("should multiply two number array values", () => {
        let n1 = [1, 2, 3];
        let n2 = [2, 4, 5];
        let ans = calculator.multiplication(n1, n2);
        expect(ans).toEqual([2, 8, 15]);
    })

    test("should multiply two number array with different length", () => {
        let n1 = [3];
        let n2 = [10, 2 , 4];
        let ans = calculator.multiplication(n1, n2);
        expect(ans).toEqual([30, 0, 0]);
    })

    test("should multiply two number array with different length", () => {
        let n1 = [6, 2 , 4];
        let n2 = [9, 12];
        let ans = calculator.multiplication(n1, n2);
        expect(ans).toEqual([54, 24, 0]);
    })

    test("should multiply string and number", () => {
        let n1 = "hello";
        let n2 = 3;
        let ans = calculator.multiplication(n1, n2);
        expect(ans).toBe("hellohellohello")
    })

    test("should multiply string and number", () => {
        let n1 = "hello";
        let n2 = 0;
        let ans = calculator.multiplication(n1, n2);
        expect(ans).toBe("")
    })

    test("should multiply string and number array", () => {
        let n1 = ["a", "b", "c", "d"];
        let n2 = [2, 4, 6, 8]
        let ans = calculator.multiplication(n1, n2);
        expect(ans).toEqual(["aa", "bbbb", "cccccc", "dddddddd"])
    })

    test("should multiply string and number array with different length", () => {
        let n1 = ["a", "b", "c", "d"];
        let n2 = [2, 4, 6, 8, 2]
        let ans = calculator.multiplication(n1, n2);
        expect(ans).toEqual(["aa", "bbbb", "cccccc", "dddddddd", ""])
    })

    test("should multiply string and number array with different length", () => {
        let n1 = ["a", "b", "c", "d", "e"];
        let n2 = [2, 4, 6, 8]
        let ans = calculator.multiplication(n1, n2);
        expect(ans).toEqual(["aa", "bbbb", "cccccc", "dddddddd", ""])
    })

    test("should divide two number",()=> {
        let n1: number = 15;
        let n2: number = 5;
        let ans = calculator.division(n1, n2);
        expect(ans).toBe(3);
    });

});