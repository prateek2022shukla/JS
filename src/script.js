//   Task -1 

//Single Line Comment //


/* Multiple 
lines
comment  */


//   Task-2

var myName;

// Task -3

var a;
var a = 7;

// Task - 4

var x;
x = 7;
var y;
y = x;

// Task - 5

var b = 55;

//Task - 6

var myFirstName = "Prateek";
var myLastName = "Shukla";

//Task - 7 
var p = 5;
var q = 10;
var r = "I am a";


p = p + 1;
q = q + 5;
r = r + " String!";



// Task - 8

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Task 9 
let catName = "Oliver";
let catSound = "Meow!";

//Task 10
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

//Task 11
const sum = 10 + 10;

//Task 12
const difference = 45 - 33;

//Task 13
const prod = 8*10;


//Task 14
const quotient = 66 / 33;

//Task 15
const remainder = 10%8;


//Task 16

let e = 3;
let f = 17;
let g = 12;

e += 12;
f += 9 ;
g += 7;



//Task 17

let h = 3;
let i = 17;
let j = 12;

h += 12;
i += 9 ;
j += 7;


//Task 18

let k = 5;
let l = 12;
let m = 4.6;

k *=5;
l *= 3;
m *= 10 ;


//Task 19

let s = 48;
let t = 108;
let u = 33;

s /= 12;
t /= 4;
u /= 11;

//Task 20

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 

//Task 21

const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';

//Task 22

const myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine"; 

//Task 23
const myStr4 = "This is the start. " + "This is the end.";

//Task 24

let myStr5 = "This is the first sentence.";

myStr5 += " This is the second sentence."

//Task 25

const myName2 = "Prateek";
const myStr6 = "My name is "+ myName2 + " and I am well!";

//Task 26

const someAdjective = "javaScript";
let myStr7 = "Learning to code is ";
myStr7  += someAdjective ;

//Task 27

let lastNameLength = 0;
const lastName2 = "Lovelace";
lastNameLength = lastName2.length;

//Task 28

let firstLetterOfLastName = "";
const lastName3 = "Lovelace";


firstLetterOfLastName = lastName3[0]; 

//Task 29

const lastName4 = "Lovelace";
const thirdLetterOfLastName = lastName4[2]; 

//Task 30

const lastName5 = "Lovelace";

const lastLetterOfLastName = lastName5[lastName5.length-1]; 

//Task 31 

const lastName6 = "Lovelace";
const secondToLastLetterOfLastName = lastName6[lastName6.length-2]; 

//Task 32 

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks =  myNoun + " " + myAdjective + " "+ myVerb + " " + myAdverb ;

//Task 33

const myArray = ["Hello" ,  1];

//Task 34
const myArray2 = [["Bulls", 23], ["White Sox", 45]];

//Task 35
const myArray3 = [50, 60, 70];
const myData2 = myArray3[0];

//Task 36

const myArray4 = [18, 64, 99];
myArray4[0] = 45;


//Task 37
const myArray5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData3 = myArray5[2][1];

//Task 38

const myArray6 = [["John", 23], ["cat", 2]];
myArray6.push(["dog", 3]);

//Task 39

const myArray7 = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray7.pop();

//Task 40

const myArray8 = [["John", 23], ["dog", 3]];
const removedFromMyArray8 = myArray8.shift();

//Task 41

const myArray9 = [["John", 23], ["dog", 3]];
myArray9.shift();
myArray9.unshift(["Paul", 35]);


//Task 42
const myList = [["one", 1], ["two", 2], ["three", 3], ["four", 4], ["five", 5]];

//Task 43
function reusableFunction(){
    console.log("Hi World")
} 

reusableFunction();


//Task 44
function functionWithArgs(a , b){
    console.log(a+b);
  }
  
  functionWithArgs(1,2);
  functionWithArgs(7,9);

//Task 45

  function timesFive(a){
    return (5*a);
  }
  timesFive(5);
  timesFive(2);
  timesFive(0);
  

//Task 46  

// Declare the myGlobal variable below this line
let myGlobal;
myGlobal = 10;

function fun1() {
 
   oopsGlobal = 5;
}

let myGlobal2;
myGlobal2 = 10;

function fun1() {
 
   oopsGlobal = 5;
}


function fun2() {
  var output = "";
  if (typeof myGlobal2 != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal2 != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
 


//Task 47 

function myLocalScope() {
    var myVar;
  
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
//   console.log('outside myLocalScope', myVar);



//Task 48

 
 const outerWear = "T-Shirt";

 function myOutfit() {
    var outerWear = "sweater"
    return outerWear;
 }
 
 myOutfit();    

//Task 49

let sum3 = 0;
function addThree() {
  sum3 = sum3 + 3;
}

function addFive(){
  sum3 += 5;
}
addThree();
addFive();

//Task 50

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);

//Task 51
function nextInLine(arr, item) {

  arr.push(item);  
  return arr.shift();  
}

const testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Task 52

function welcomeToBooleans() {
  
  return true; 
}

//Task 53

function trueOrFalse(wasThatTrue) {
    if(wasThatTrue){
    return "Yes, that was true";
  }
  else{
    return "No, that was false";
  }

}

//Task 54

function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  else{
    return "Not Equal";
    }
}

testEqual(10);

//Task 55
// Setup
function testStrict(val) {
  if (val===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);


//Task 56

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");


//Task 57

// Setup
function testNotEqual(val) {
  if (val!=99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

//Task 58 
// Setup
function testStrictNotEqual(val) {
  if (val!==17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

//Task 59

function testGreaterThan(val) {
  if (val>100) {  // Change this line
    return "Over 100";
  }

  if (val>10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);


//Task 60
function testGreaterOrEqual(val) {
  if (val>=20) {  // Change this line
    return "20 or Over";
  }

  if (val>=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

//Task 61
function testGreaterOrEqual(val) {
  if (val>=20) {  // Change this line
    return "20 or Over";
  }

  if (val>=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);