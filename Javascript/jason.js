'use strict';
// JSON
// JavaScriot Object Notation

// 1. Object to JSON
// stringify(obj)
let json=JSON.stringify(true);
console.log(json);

json=JSON.stringify(['apple','banana']);
console.log(json);

const panda={
    name='fubao',
    color:white,
    size=null,
    birthDate= new  Date(),
    symbol:  Symbol('id'), //json포함안됨
    jump:()=>{
        console.log(`${name} can jump!`);
    }, //함수 json 포함안됨

};
json=JSON.stringify(panda);
console.log(json);

json=JSON.stringify(panda['name','color','size']);
console.log(json);

json=JSON.stringify(panda,(key,value)=>{
    console.log( `key: ${key}, value:${value}`);
    return key==='name'? 'aibao':value;
});
console.log(json);
// 2.JSON to Object
// parse(json)
console.clear();
json=JSON.stinrgify(rabbit);
console.log(json);
const obj=JSON.parse(json,(key,value)=>{
    console.log(`key:${key},value:${value}`);
    return key==='birthDate' ?new Date(value) :value;

});
console.log(obj);
console.log(obj.birthDate.getDate());
