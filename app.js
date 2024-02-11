// await fetch("https://jsonplaceholder.typicode.com/comments");  Need to explore

// const express = require("express") // commonJS -
// import express from "express"                                    // ESM
// 'use strict';
var nums1; // type of the variable

nums1 = 11n; // bigInt

var nums2 = 12.345;
console.log(typeof nums1); 

const p = 1 / 0;
console.log(p);
const h = "string" / 2;
console.log(typeof h);

let str1 = "Hey";

let str2 = "this is full stack course";

let str3 = `${str1} all ${str2}`;

console.log(str3);

let obj = null;

console.log(typeof (obj));

// const obj1 = {
//     name: {
//         firstName: "SS",
//         lastName:"PP",
//     },
//     address: {
//         city:null
//     }
// }
// {
//     "name.firstName": SS
// }

let age;

console.log(age);

const obj3 = {
    'key': 1,
    'key2': 2,
    'key3': function () {
        
    }
}
const uniqueKey = Symbol('store');
console.log(uniqueKey);
var age1 = 29;
// conditional statements
if (age1 > 29) {
    console.log("age greater than 25");
} else if (age1 > 25 && age1 <= 29) {
        console.log("age is in between 25 & 29")
}else{
    console.log("age less than 25");
}

// ternary operators
console.log(age1 > 29 ? "age greater than 25" : age1 > 25 && age1 <= 29 ? "age is in between 25 & 29" : "age less than 25");

const a = age1 > 29;

const b = age1 > 25 && age1 <= 29
console.log(!!age1);
var name = "sumit kapoor"
switch (true) {
    case age1 >= 29:
    case name:
        console.log("age greater than 25");
        break;
    case age1 > 25 && age1 <= 29:
        console.log("age is in between 25 & 29")
        break;
    case age1 === 29:
        console.log("age is 29");
        break;
    default:
        console.log("age less than 25");
}
// ES6 code
// nullish coescaling
const userAge = null ?? 30;
console.log("here",userAge);


//for
// for
// for(initialization; condition; increment/decrement)
let arr = ["John", "Larry", "Robert", "Misha"];

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// for of loop

for (let val of arr) {
    console.log(val);   
}

// for in loop

const details = {
    firstName: "Sumit",
    lastName: "Kapoor",
    age:29
}
// details.firstName;
// details["firstName"];
for (let key in details) {
    console.log(key,details[key]);
}
for (let key in arr) {
    console.log(key,arr[key]);
}

arr.forEach(function (value, index, arr) {
    console.log(value, index, arr);
    
});
const arr3 = [1,2,3,4,5]
const arr1 = arr3.map(item => item*4);
console.log(arr1);
let n = 0;
while (arr3.length > n) {
    console.log(arr3[n]);
    n++;
    // code to be executed
}
var i = 0;
do {
    console.log("executed value",arr3[i]);
    i++;
    // code to be executed
} while (arr3.length > 5)

// normal functions
// hoisted
function calculateSalary(...args) {
    // console.log(arguments);
    return args[0] + args[1] + args[2];
}

console.log(calculateSalary(10000, 5000, 2000));

// fat arrow functions


const getAverage = (nums1) => {
    let sum = 0;
    console.log(nums1);
    for (let i = 0; i < nums1.length; i++){
        sum += nums1[i];
    }
    return sum/nums1.length;
}

console.log(getAverage(arr3));

// anonymous function 
// function declaraton/ definition
const getNames = function (arr) {
    return arr.join(',');
}

getNames(arr); // invoke

// IIFE

(function (n) {
    let val = 0;
    for (let i = 0; i < n.length; i++){
        val += n[i];
    }
    console.log(val);
}([1, 2, 3, 4, 5]));
// React

(function () {
    
}(arr))

// useEffect - API

// higher order functions
// function hof()

// higher order function 
function greetName(cb) {
    // callback function.
    console.log(`My name is ${cb()}`);
}


function getName() {
    return "John Doe";
}

greetName(getName);

// hoisting - all the variables that you declare are moved to the top of the file.
// var, function
//  arrow function, let & const, anonymous function, IIFE X
// console.log(q);
const q =12;
// Memory management + Interpeted language + synchronus
// chrome - v8, firefox - spider monkey, 
// node, deno - 
window;
// compiled 

// // block scope
// const str4 = "fmjfdnv"
// {
//     var str4 = "fvkhdf";
// }
// console.log(str4);

// function test() {
//     var testing = "testing";
// }
// test();
// console.log(testing);

// variable shadowing
let demo1 = 12;
// In block scope you can shadow var type of keywords with let and const vice-versa is not allowed.
{
    const demo1 = 14; // not allowed
    console.log(demo1);
}
console.log(demo1);

let demo2 = 14;

function test12() {
    var demo2 = 12
    console.log(demo2);
}
test12();
console.log(demo2);


let demo3 = 12;

const test123 = () => {
    var demo3 = 14;
    console.log(demo3);
};
test123();
console.log(demo3);

// Object.hasOwnProperty()
const fsrnl = {
    "course gfg": "Intro to full-stack",
    strength: 35,
    instructor:"Sumit Kapoor"
}
console.log(Object.entries(fsrnl));

const mern_offline_batch = {};

Object.assign(mern_offline_batch, fsrnl);
console.log(mern_offline_batch);

/*
Create a deep copy of an object 
*/

let  data = {
    name: 'piyu',
    age: 31,
    address: {
      flat: 1888
    }
}

let data2 = data; // shallow copy



const arr4 = [1, 2, 3, 4, 5, 6];

const arr5 = [...arr4];
console.log('printing', arr5);

const data6 = { ...data }; 
data6.name = "Raghav";
console.log(data6, data);

const str34 = "John doe";

const str35 = [...str34];
console.log(str35);

const data7 = { ...data6, sirName: "arora" };
console.log(data7);

function getSum(a,b,...rest) {
    console.log(a, b, rest);
}


getSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(this);

function getSum12() {
    console.log(this,this.name,arguments); // window
}

const explicitBinding = getSum12.bind(data6, 1, 2, 3, 4, 5);
console.log(explicitBinding());
getSum12.call(fsrnl, 1, 2, 3, 4, 5);
getSum12.apply(mern_offline_batch, [1,2,3,4,5,6])

const getSum123 = () => {
    console.log(this);
}

getSum123();

(function(){
    console.log(this);
}())
// shallow copy and deep copy in javascript

// call, apply & bind - explicit binding
// default binding
// implicit binding
// new 
// explicit binding - call, apply & bind



let user = {
    name: "John",
    surname: "Smith",

    // ES6 
    set fullName(value) {
        console.log("value",value);
      [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };

  let admin = {
    __proto__: user,
    isAdmin: true
  };

  console.log(admin.fullName); // get
console.log(admin.__proto__);

  admin.fullName = "Alice Cooper"; // set operation

  console.log(admin.fullName);
  console.log(user.fullName);

// class User {
//     constructor() {
          
//       }
//   }


// custom map method

// reduce
// concat
// JSON.superStringify()
// polyfill of map
Array.prototype.myMap = function (cb) {
    let output = [];
    for (let i = 0; i < this.length; i++){
        output.push(cb(this[i]));
    }
    return output;
}

Array.prototype.filter = function (cb) {
    console.log("Inside custom filter")
    let output = [];
    for (let i = 0; i < this.length; i++){
        if (cb(this[i])) {
            output.push(this[i]);
        }
    }
    return output;
}
const mapArr = [1, 2, 3, 4, 5];
const mapArr1 = mapArr.map((item) =>item*2)
console.log(mapArr1)
// map
const mapArr2 = mapArr.myMap((item) => (
   item*2
))
console.log(mapArr2)
const filterArr = mapArr.filter((item) => item%2 === 0)
console.log(filterArr);

// let flattenArr = [1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]];
// const output3 = [];
// function flattenWrapper() {
//     const output2 = [];
//    return implementFlatArr = (arr) => {
//         for (let i = 0; i < arr.length; i++) {
//             if (Array.isArray(arr[i])) {
//                 implementFlatArr(arr[i]);
//             } else {
//                 output2.push(arr[i]);
//             }
//         }
//        return output;
//     }
// }
// // const value = flattenWrapper();
// value();

//sum(1,2,3)(4,5,6)(7,8,9)...()

// 1+2+3+4


class MERN {
    constructor(a,b) {
        this.firstName = a;
        this.lastName = b;
    }

    getName() {
        console.log(this);
        return `${this.firstName} ${this.lastName}`
    }

    setName(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
}
// Inheritance in JS
class WebFundamentals extends MERN {
    constructor(fName, lName) {
        super(fName, lName);
    }
    
}

// const mern = new MERN("john", "smith")

// console.log(mern.getName());

const WebFundamental = new WebFundamentals("Networking", "Operating System");

console.log(WebFundamental.getName());


const outerFunction = () => {
    let a = 12;
    let b = 14;
    return function(){
        console.log(a, b);
    }
}

const outerFn = outerFunction();
outerFn();

console.log("A");

setTimeout(() => {
    console.log("after a delay of 1sec");
}, 1000);  // Macrotask queue

setTimeout(() => {
    console.log("after a delay of 0sec");
}, 0); 

const promise = new Promise((resolve, reject) => {
    resolve("I am resolved");
});

promise.then((response) => console.log(response)); // Microtask queue

console.log("D");

// pending, fulfilled, rejected

const response = fetch("https://jsonplaceholder.typicode.com/posts").then((results) => {
    results.json().then((response) => {
        console.log(response);
    })
}).catch((err)=> console.log(err));
console.log(response);


fetch("https://jsonplaceholder.typicode.com/posts").then((results) => {
    return results.json()
}).then((response) => {
    console.log(response);
}).catch((err) => console.log(err));


const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I am resolve1");
    },5000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("I am resolved 2");
    },2000)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("I am resolved 3");
    },1000)
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("I am resolved 4");
    },0)
})

const all = Promise.all([promise1, promise2, promise3, promise4]);

all.then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err);
})





// polyfill of promise.all

const promiseAll = (promises) => {
    let output = [];
    let counter = 0;
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++){
            promises[i].then((response) => {
                output[i] = response;
                counter++;
                if (counter === promises.length) {
                    resolve(output);
                }
            }).catch((err) => {
                reject(err); // rejection over here.
            })
        }
    })
}


promiseAll([promise1, promise2, promise3, promise4]).then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err);
})


const any = Promise.any([promise1, promise2, promise3, promise4]);

any.then((results) => {
    console.log("here",results);
}).catch((err) => {
    console.log(err);
})


// Promise.all - Polyfills

// Promise.any

// Promise.race

    
// callback hell


// A,D, I am resolved, after a delay of 1sec.


const arr45 =[
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'
    
]
    
    const res = arr45.reduce((acc,item)=> item in acc ? {...acc, [item]: acc[item]+1} : {...acc, [item]:1}, {})
console.log(res)
    

const res2 = arr45.reduce(function (acc, item) {
    if (item in acc) {
        console.log(acc);
        return {
            ...acc,
            [item]: acc[item]+1
        }
    } else {
        return {
            ...acc,
            [item]: 1
        }
    }
},{})

console.log(res2);




// async-await

const z = async () => {
    
}


const l = async function () {

} 

    (async function() {
    
}())

async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await response.json();
    console.log(data);
    console.log("A");

}

getData();