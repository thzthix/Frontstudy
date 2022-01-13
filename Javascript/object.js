'use strict';
// Objects
// one of the Javascript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in Javascript are instances of object.
// object={key:value};
const obj1={}; //'object literal' syntax
// const obj2=new Object(); 'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const fubao={name:'fubao',age:1};
print(fubao);

// with Javascript magic(dynamically typed language)
// canadd properties later
fubao.hasJob=true;
console.log(fubao.hasJob);

// can delete properties later
delete fubao.hasJob;
console.log(fubao.hasJob);

// 2.Computed properties
// key should be alwayes string
// (실시간으로) key값 뭐 받을지 모를때
console.log(fubao.name);
console.log(fubao['name']);
fubao['hasJob']=true;
console.log(fubao.hasJob);

function peintValue(obj,key){
    console.log(obj[key]);
}
printValue(fubao,'name');
printValue(fubao,'age'); 

// 3. Property value shorthead
const person1={name='fubao',age=1};
const person2={name='aibao',age=5};
const person3={name='lebao',age=6};
const person4=new Person('FUBAO',2);
console.log(person4);
// 4.Constructor function
function Person(name,age){
    // this={};
    this.name=name;
    this.age=age;
    // return this;
}
// 5. in operator: property existence check(key in obj)
console.log('name'in fubao);
console.log('age' in fubao);
console.log('random' in fubao);
console.log(fubao.random); //undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for(key in fubao){
    console.log(key); 
}

// for (value of iterable)
const array=[1,2,4,5];
for(value of array){
    console.log(value);
}
// 7. Fun cloning
// Object.assign(dest,[obj1,obj2.obj3...])
const user={name:'fubao',age:'1'};
const user2=user;
user2.name=aibao;
console.log(user);

// old way
const usser3={};
for(key in user){
    user3[key]=user[key];
}
console.log(clear);
console.log(user3);

const user4=Object.assign({},user);
console.log(user4);

// another example
const fruit1={color:'red'};
const fruit2={color:'blue',size:'big'};
const mixed=Object.assign({},fruit1,fruit2);
console.log(mixed.color); //blue
console.log(mixed.size);