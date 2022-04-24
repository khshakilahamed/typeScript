const a = "Hello World";

// string, number, Array, null, undefined, boolean, unknown 
// any

function getLowerCase(str:string){
    return str.toLowerCase();
}

console.log(getLowerCase("Hello"));
console.log(getLowerCase(""));
// console.log(getLowerCase(23 as string));

// const b: number = "2ll";
const b: number = 211;


function add(number1: number, number2: number): number{
    return number1 + number2;
}

const subtract = (number1:number = 23, number2:number): number => {
    return number1+number2;
}

add(2, 3);
add(34, b);

subtract(2, 43);



// Array
const array2: Array<number | string> = [123, 234, "shakil"];
const arr: number[] = [123, 324, 2345];
const arr1: string[] = ["123", "324", "2345"];


type numberAndString = number | string;

const id: numberAndString = '23';



// interface 
interface iPerson{
    name: string;
    age: number;
    hobby?: string; // optional
};

const person1: iPerson = {
    name: "shakil",
    age: 23,
    hobby: "Programming",
};

const person2:iPerson = {
    name:"Jahirul",
    age: 25,
};


const personArr:iPerson[] = [
    person1,
    person2,
]

// const personArr:Array<iPerson> = [
//     person1,
//     person2,
// ]


// Enums 
enum Colors{
    color1= "#ededed",
    color2 = "#ededef",
    color3  = "#ededee",
}

// console.log(Colors.color1);


//  Generic ==> 
// function _concat<T>(a: T, b: T){
//     return a + b;
// }

// _concat<number>(2, 3);
// _concat<string>("Kh. ", "Shakil");