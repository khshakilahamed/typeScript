var a = "Hello World";
// string, number, Array, null, undefined, boolean, unknown 
// any
function getLowerCase(str) {
    return str.toLowerCase();
}
console.log(getLowerCase("Hello"));
console.log(getLowerCase(""));
// console.log(getLowerCase(23 as string));
// const b: number = "2ll";
var b = 211;
function add(number1, number2) {
    return number1 + number2;
}
var subtract = function (number1, number2) {
    if (number1 === void 0) { number1 = 23; }
    return number1 + number2;
};
add(2, 3);
add(34, b);
subtract(2, 43);
// Array
var arr = [123, 324, 2345];
var arr1 = ["123", "324", "2345"];
var id = '23';
var person = {
    name: "shakil",
    age: 23,
    hobby: "Programming"
};
var person2 = {
    name: "Jahirul",
    age: 25
};
// Enums 
var Colors;
(function (Colors) {
    Colors["color1"] = "#ededed";
    Colors["color2"] = "#ededef";
    Colors["color3"] = "#ededee";
})(Colors || (Colors = {}));
console.log(Colors.color1);
