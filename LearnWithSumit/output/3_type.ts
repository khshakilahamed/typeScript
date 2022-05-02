// video link- https://www.youtube.com/watch?v=zPxvFjNQN20&list=PLHiZ4m8vCp9PgOOjdyNpc6AoBmKNrp_u3&index=3

let playerName = "mashrafi";
let age = 35;

console.log(playerName);

// playerName = 34; // can not changed the value from string to number after declaration with asignment.
// console.log(playerName);

age = 30; // we change change value with same datatype.

console.log(age);

// function
function multiply(a: number, b:number){
    return a + b;
}

console.log(multiply(3, 4));

// array
let fruits = ['apple', 'banana', 'orange'];
let mixed = ['apple', 3, true];

// fruits.push(34); // if I push an array, typescript provides an error. cause, typescript think that the array is a string type array.

fruits.push('pineapple');


// Object
let person = {
    name: 'Mashrafi',
    age: 35,
    isCaptain: true,
};

// person.name = 43; it through error for the given value is number

person.name = 'shakil';

console.log(person);