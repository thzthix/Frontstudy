// forEach
let arr=["aibao","fubao","lebao"];
arr.forEach((name,index)=>{
    console.log(`${name+1},${name}`);
});

// find/findIndex
let arr=[1,2,3,4,5];
const result=arr.find((item)=>{
    return item%2===0;
});
const result2=arr.filter((item)=>{
    return item%2===0;
}); 
console.log(result); //2
console.log(result1); //[2,4,6]

let userList=[
    {name:"fubao",age:1},
    {name:"aibao",age:5},
    {name:"lebao",age:6},
];
userList.find(()=>{
    if(userList.age<2){
        return true;
    }else{
        return false;
    }
});
console.log(result);

// user.map():함수를 받아 특정 기능을 수행하고 새로운 배열을 반환
let userList2=[
    {name:"fubao",age:1},
    {name:"aibao",age:5},
    {name:"lebao",age:6},
];

let newUserList=userList2.map((user,index)=>{
    return Object.assign({},user,{
        id:index+1,
        isAdult:user.age>19,
    });
});
console.log(newUserList);   

// join,split

let arr=["안녕","나는","푸바오야"];
let result=arr.join();
console.log(result); //안녕,나는,푸바오야
let str="안녕,나는,푸바오야"; //["안녕","나는","푸바오야"]
let result2=arr.spilit(",");
console.log(result2); 

// Array.isArray 자바스크립트는 배열도 객체영역이라 객체와 typedof로 구분할 수 없음
let user={
    name:"fubao",
    age:'1',
}
let userlist=["fubao","aibao","lebao"];

console.log(typeof user); //object
console.log(typeof userlist); //object
console.log(Array.isArray(user)); //false
console.log(Array.isArray(userList)); //true
