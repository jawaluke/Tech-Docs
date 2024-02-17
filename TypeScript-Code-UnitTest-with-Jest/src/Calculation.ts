export class Calculation {

    addition(n1: number, n2: number): number;
    addition(n1: number[],n2: number[]): number[];
    addition(n1: string, n2: string): string;
    addition(n1: string[], n2: string[]): string[];
    
    addition(n1: number | string | (number | string)[], n2: number | string | (number | string)[]) : number | string | (number | string)[] {
        if(Array.isArray(n1) && Array.isArray(n2)) {
            return this.addArray(n1, n2);
        }  
        return this.addValue(n1 as (number | string), n2 as (number | string));         
        
    }
    private addArray<T extends number | string>(n1: T[], n2: T[]): T[] {
        let result  = [];
            for(let i =0 ; i < Math.max(n1.length, n2.length); i++) {
                if(typeof n1[i] == 'number' || typeof n2[i] == 'number') {
                    result.push(this.addValue((n1[i] || 0) as T, (n2[i] || 0) as T));
                }
                else {
                    result.push(this.addValue((n1[i] || '') as T, (n2[i] || '') as T));
                }
            }
        return result;
    }

    private addValue<T extends number | string>(n1: T, n2: T): T{
        if(typeof n1 === 'number' && typeof n2 === 'number') {
            return <T>(n1 + n2);
        }
        else {
            return <T>(String(n1) + <T> String(n2));
        }       
    }

    multiplication(n1: number, n2: number): number;
    multiplication(n1: number[], n2: number[]): number[];
    multiplication(n1: string, n2: number): string;
    multiplication(n1: string[], n2: number[]): string[];
    multiplication(n1: number | string | (number | string)[], n2: number | string | number[]): number | string | (number | string)[] {
        if(Array.isArray(n1) && Array.isArray(n2)) {
            return this.multiplyArray(n1, n2);
        }
        
        return this.multiplyValue(<number | string> n1, <number> n2);
    }

    private multiplyArray<T extends number | string, K extends number>(n1: T[], n2: K[]): T[] {
        let result: T[] = [];
        for(let i = 0; i < Math.max(n1.length, n2.length); i++) {
            if((typeof n1[i] == 'string' || this.isStringArray(n1)) && typeof n2[i] == 'number') {
                result.push(this.multiplyValue((n1[i] || '') as T , (n2[i] || 0) as K));
            }
            else {
                result.push(this.multiplyValue((n1[i] || 0) as T , (n2[i] || 0) as K));
            }
        }
        return result;
    }

    private multiplyValue<T extends number | string, K extends number>(n1: T, n2: K): T {
        console.log("multiplyValue: ",n1, n2);
        if(typeof n1 === 'number' && typeof n2 === 'number') {
            return <T> (Number(n1) * Number(n2));
        }
        let result: string = ''
        for(let i = 0; i < n2; i++) {
            result = result + n1;
        }
        return <T> result;
    }

    private isStringArray<T>(n1: T[]) : boolean {
        return n1.every((val) => typeof val == 'string')
    }

    division(n1: number, n2: number): number {
        return n1 / n2;
    }
}

var cal = new Calculation();
console.log(cal.addition(2,3));

console.log(cal.multiplication(2,3));
