## Design Pattern
**- In software Engineering, Design pattern is a general repeatable solution to commonly occuring problem in Software Design.**

**- Design pattern isn't a finished design that can directly transform into code. it is a description or Template on how to solve a problem that can be used in many different situations.**

### Uses:
- Code Readability.
- It can speed up development process by providing testen and proven development paradigms.

## Creational Design Pattern:
**- This pattern is all about class instantiation.**

## Singleton:
**- Object can only be instantiated once.**

**- Useful for global Object that accessed from anywhere in the application.**

### Example(Real use):
- JDBC connection to database (we don't want create class everytime on each service).
  

### Code: 
- make constructor as a private to prevent new object
- Don't forget to use 'static' member.
- use static method to get instance.

```
#Typescript
    class Pen {
        static penInstance: Pen;
        isrefill: boolean;
    
        constructor() {
            this.isrefill = true; 
        }
    
        canWrite(): string {
            return this.isrefill? "yes": "no";
        }
    
        static getInstancePen() {
            if(!Pen.penInstance) {
                Pen.penInstance = new Pen();
            }
            return Pen.penInstance;
        }
    }
    
    
    let p1: Pen = Pen.getInstancePen();
    console.log(p1.canWrite());
    p1.isrefill = false;
    
    let p2: Pen = Pen.getInstancePen();
    console.log(p2.canWrite());
    console.log(p1.canWrite());
```

```
# Java
    class Pen {
        public Boolean isRefill;
        static Pen penInstance;
        
        Pen() {
            this.isRefill = true;
        }
        
        String canWrite() {
            return this.isRefill? "yes": "no";
        }
        
        static Pen getPenInstance() {
            if(Pen.penInstance == null){
                Pen.penInstance = new Pen();
            }
            return Pen.penInstance;
        }
    }
    class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Try programiz.pro");
            Pen p1 = Pen.getPenInstance();
            System.out.println(p1.canWrite());
            p1.isRefill = false;
            
            Pen p2 = Pen.getPenInstance();
            System.out.println(p2.canWrite());
            System.out.println(p1.canWrite());
        }
    }
```
