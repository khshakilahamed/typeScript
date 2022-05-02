
// --------- signature of a function ------
// let myFunc:(x: string, y: string) => void;
let add:(x: number, y: number) => number;

let calculation:(x: number, y: number, z:string) => number;

let userDetail: (id: number | string, userInfo:{
    name:string,
    age: number
}) => void;


// --------- function according to signature ------
add = (a: number, b: number) => {
    return a + b;
}

calculation = (a:number, b:number, c:string) =>{
    if(c === 'add'){
        return a + b;
    }
    else{
        return a-b;
    }
}

// console.log(calculation(5, 6, 'minus'));

userDetail = (id: number | string, userInfo:{
    name:string,
    age:number
}) =>{
    console.log("hello")
}