// let myFunc: Function;

// myFunc = () =>{
//     console.log("Hello")
// }

// ---------- void type function---------- 
const myfunc = (a: string, b:string, c:string = "10") =>{
    // c?:string --> make it is as an optional parameter
    console.log(c);
    console.log(`Hello ${a} ${b}`);
}

// myfunc("3", "4", "false");


// --------- return type function  ---------
const myfunc2 = (a: number, b:number, c:string = "10"): number =>{
    return a + b; 
}

myfunc2(3, 4, "false");