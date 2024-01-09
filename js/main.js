// function methodName(){
// Command

// return (optional)
// }

// function consoleTest(){
//     console.log("Test");
// }

// consoleTest();

//parametr gonderme
// function (x, y)

// function check(value){

//     let result = value.replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase();

//     return result;
// }

// console.log(check("$GeR$_maNy!"));

// function test(){
//     function nested(){
//         console.log("nested");
//     }
// }

// function func1(param1){

//     function func2(param2){

//          let p = param2.toLowerCase();

//          function func3(param3){
//             return param3.replaceAll(" ", "-").replaceAll("?", "_");
//          }

//          func3(p);
//     }

//     return func2(param1);
// }

// console.log(func1("S A l?aM"));

// -------------------------------------------------

// anonim function
// setTimeout(function(){
//     console.log("Salam.");
// }, 1000);

// const square = (x) => x**2;

// console.log(square(5));

// const numbers = [1, 2, 3, 4, 5];
// const square = numbers.map((number) => number ** 2);

// console.log(square);

// -------------------------------------------------

// High Order Functions - basqa funksiyani parametr kimi funksiya icerisine oturmekdir.

// const numbers = [1, 2, 3, 4, 5];

// const square = (num) => num.map((number) => number ** 2);

// function makearray(number, operation) {
//   let result = [];

//   result.push(operation(number));

//   document.write(result);
// }

// makearray(numbers, square);

// function func1(param1){

//     function func2(param2){

//          let p = param2.toLowerCase();

//          function func3(param3){
//             return param3.replaceAll(" ", "-").replaceAll("?", "_");
//          }

//          func3(p);
//     }

//     return func2(param1);
// }

// const replaceSign = (str) => str.replaceAll("$", "").replaceAll("?", "");
// const lowerCase = (caseStr) => caseStr.toLowerCase();

// function end(str, operation){

//     let result = operation(str);
//     let resultEnd = replaceSign(result);

//     document.write(resultEnd);
// }

// const value = "A?l$I";

// end(value, lowerCase);