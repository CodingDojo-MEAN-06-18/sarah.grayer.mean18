const myNum: number = 5;
const myString: string = "Hello Universe";
const myArr: Array<number> = [1, 2, 3, 4];

let myObj: {[key: string]: (string | number)} = { Name: "Bill" };

let anythingVariable: any = "Hey";
anythingVariable = 25;

const arrayOne: Array<boolean> = [true, false, true, true];
const arrayTwo: Array<any> = [1, 'abc', true, 2];

myObj = { x: 5, y: 10 };


class MyNode{
    private _priv: number;

    constructor(public val: number) { }

    doSomething(): void{
        this._priv = 10;
    }
}

const myNodeInstance: MyNode = new MyNode(1);

console.log(myNodeInstance.val);

function myFunction(): void{
    console.log("hello world");
    return;
}

function sendingErrors(): never{
    throw new Error("Error message");
}
