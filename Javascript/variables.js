//javascript is very flexible
//flexible===dangerous
//added ECMAScript 5
// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
'use strict'; 

// 2.variable, rw(read/write)
// let (added in ES6)
let globalName='globalname';
{
let name='fubao';
console.log(name);
name='hello';
console.log(globalName);
}
console.log(globalName);
// var(don't ever use this!)
// var hoisting (move declaration from bottom to top)
//has no block scope
{age=4;
var age;}
console.log(age);

//3.Constant r(read only)
// favor immutaable data type always for a few reasons:
// -security
// -thread safety
// -reduce human mistakes
const dayInWeek=7;
const masNumber=5;
//Note 
// Immutable data types:primitive types. frozen objects(i.e. object.freeze())
// Mutable data types:all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// -security
// -thread safety
// -reduce human mistakes
//4. variable types
// primitive, single item: number,string,boolean,null,undefiedn,symbol
//object,box,container
//function, first-class function

const count=17;
const size=17.1;
console.log('value: ${count},type:${typeof count}');
console.log('value: ${size},type:${typeof size}');

//number-speicla numeric values:infinity, -infinity, NaN
const infinity=1/0;
const negativeInfinity=-1/0;
const nAn='not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt(fairly new,don;t use it yet)
const bigInt=12345678901234567890n; //over -2**532**53
console.log('value: ${bigInt},type:${typeof bigInt}');

//string
const char='c';
const fubao='fubao';
const greeting='baby'+fubao;
console.log('value: ${greeting},type:${typeof greeting}');
const helloaibao='hi ${fubao}' //template literals (string);
console.log('value: ${helloaibao},type:${typeof helloaibao}');
//boolean
//false:0,null,undefined,NaN,''
//true: any other value
const canRead=true;
const test=3<1; //false;
console.log('value: ${canRead},type:${typeof canRead}');
console.log('value: ${test},type:${typeof test}');

//null
let nothing=null;
console.log('value: ${nothing},type:${typeof nothing}');

//undifined
let x;
console.log('value: ${x},type:${typeof x}');

//symbol, create unique identifiers for objects
const symbol1=Symbol('id');
const symbol2=Symbol('id');
console.log(symbol1==symbol2); //false

const gSymbol1=Symbol.for('id');
const gSymbol2=Symbol.for('id');
console.log(gSymbol1===gSymbol2); //true
console.log('value: ${symbol1.description},type: ${typeof gSymbol1}');
//object, real-life object, data structure
const fubao={name: 'fubao',age:1};
fubao.age=2;
//5. Dynamic typing:dynamically typed language
let text='hello';
console.log(text.charAt(0));  //h
console.log('value: ${text},type:${typeof text}');
text=1;
console.log('value: ${text},type:${typeof text}');
text='7'+5; //string
console.log('value: ${text},type:${typeof text}');
text='8'/'2'; //number
console.log('value: ${text},type:${typeof text}');
//console.log(text.charAt(0)); error
