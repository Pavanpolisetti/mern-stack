'use srict'
//1.variable Declaration and intailization

let myInteger = 42;
let myFloat = 3.14;
let myChar = 'A';
let myString = "Hello, world!";
let myBoolean = true;
console.log("Integer value: " + myInteger);
console.log("Float value: " + myFloat);
console.log("Character value: " + myChar);
console.log("String value: " + myString);
console.log("Boolean value: " + myBoolean);

//2.Type conversion

// Converting integer to float
let intNum = 10;
let floatNum = intNum; 
console.log("Integer to float:", floatNum);

// Converting float to integer
floatNum = 15.5;
intNum = floatNum; 
console.log("Float to integer:", intNum);

// Converting string to integer
let strNum = "20";
intNum = parseInt(strNum); 
console.log("String to integer:", intNum);

// Converting integer to string
intNum = 25;
strNum = intNum.toString(); 
console.log("Integer to string:", strNum);
console.log
