// //number
// const num = 14;
// console.log(typeof data);

// //string
// const name = "gogula";
// console.log(typeof name);

// //boolean
// const flag = true;
// console.log(typeof flag);

// //null
// const daba = null;
// console.log(daba);
// console.log(typeof daba);

// //undefined
// var data;
// console.log(data);

// var data1 = undefined;
// console.log(data1);
// console.log(typeof data1);

// //1.M<N ==> m%n ->[ex:2%10=2] 2.m==n ==> m%n -> 0 3.m>n ==>m%n -> ans range[0 to n-1]

// //operators
// a = 2;
// b = 4;
// console.log(a + b, a - b, a * b);

// //
// num1 = 10;
// num2 = 10;
// console.log(num1 == num2);
// console.log(num1 === num2);

// // let age = 21;
// // if(age>=21){
// //     console.log("Welcome to pub! Enjoy your drink")
// // }

// // else if(age>=18 && age<21)
// // {
// //     console.log("Welcome to pub! Just Enjoy")
// // }

// // else{
// //     console.log("hey kiddo! go home and drink milk")
// // }

// let age = 10;
// console.log(age > 21 ? "pub" : "home");

// let i = 50;
// for (i; i <= 100; i++) {
//   console.log(i);
// }

// let s = 0;
// while (s <= 10) {
//   console.log(s);
//   s++;
// }

// for (let j = 0; j <= 10; j++) {
//   console.log("2 * ", j, "=", 2 * j);
// }

//function functionname(parameters){
//functionbody
//code to be executed
//}

// function OG(Snacks) {
//   console.log("Water cane");
//   console.log("Milk");
//   console.log("Bring", Snacks);
// }
// let biscuit = "oreo";?
// OG(biscuit);

// function Welcome(message, name) {
//   console.log(message, ",", name);
// }

// var mess = "welcome to the class";
// var nm = "gogula";
// Welcome(mess, nm);

//named function
// function add(num1, num2) {
//   return num1 + num2;
//   console.log("Hey Hello"); //this statement will not work because whenever the return keyword is used in the function then it will go to main statement after the return
// }

// let result = add(5, 5);
// console.log(result);

// an
// function expression
// let fun = function () {
//   console.log("hello world");
// };
// fun();

//arrow function
// let data = () => console.log("hey");

// data();

let age = 10;
console.log(
  age > 21
    ? "enjoy the drink"
    : age > 18 && age <= 21
    ? "just enjoy no drink"
    : "go home"
);

// let day = monday;
// if (day="monday"){
//     console.log("welcome monday");
// }
// else if(day="")
