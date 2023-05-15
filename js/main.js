
// ? Task #1
// ? H4ck3r Sp34k

// function hackerSpeak(str) {
//     return str.replaceAll("a", "4").replaceAll("e", "3").replaceAll("i", "1").replaceAll("o", "0").replaceAll("s", "5")
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let myInp = document.querySelector(".inp");
//     let myResult = document.querySelector(".result");

//     myResult.innerHTML = hackerSpeak(myInp.value);
// }

// ? Task #2
// ? Sum of Polygon Angles

// function sumPolygon(n) {
//     return (n - 2) * 180;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let myInp = document.querySelector(".inp");
//     let myResult = document.querySelector(".result");

//     myResult.innerHTML = sumPolygon(myInp.value);
// }

// ? Task #3
// ? Case Insensitive Comparison

// function match(s1, s2) {
// 	let regex = /[a-z]/gi;
// 	return s1.match(regex) == s2.match(regex)
// }

// ? Task #4
// ? Concatenating First and Last Character of a String

// function firstLast(name) {
//     return name[0].concat(name.slice(-1))
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let myInp = document.querySelector(".inp");
//     let myResult = document.querySelector(".result");

//     myResult.innerHTML = firstLast(myInp.value);
// }

// ? Task #5
// ? Less Than, Greater Than

// function arrBetween(num1, num2, arr) {
//     let myArr = arr.filter(elem => elem > num1 && elem < num2);
//     return myArr;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let secondInp = document.querySelector(".inp2");
//     let thirdInp = document.querySelector(".inp3");
//     let myResult = document.querySelector(".result");

//     let myArr = thirdInp.value.trim().split(" ");
//     myResult.innerHTML = arrBetween(firstInp.value, secondInp.value, myArr);
// }

// ? Task #6
// ? Convert All Array Items to String

// function parseArray(arr) {
//     let newArr = arr.map(elem => elem.toString())
//     return newArr
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let myInp = document.querySelector(".inp");
//     let myResult = document.querySelector(".result");

//     myResult.innerHTML = parseArray(myInp.value.trim().split(" "));
// }

// ? Task #7
// ? Largest Numbers

// function largestNumbers(n, arr) {
//     return arr.sort().slice(-n);
// }

// ? Task #8
// ? Recursion: Sum

// function sum(n) {
//     if (n === 1)
//         return 1;
//     return n + sum(n - 1);
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let myInp = document.querySelector(".inp");
//     let myResult = document.querySelector(".result");

//     myResult.innerHTML = sum(myInp.value);
// }

// ? Task #9
// ? Reverse and Capitalize

// function reverseCapitalize(str) {
//     let arr = [];
//     return arr = str.split('').reverse().join('').toUpperCase()
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let myInp = document.querySelector(".inp");
//     let myResult = document.querySelector(".result");

//     myResult.innerHTML = reverseCapitalize(myInp.value);
// }