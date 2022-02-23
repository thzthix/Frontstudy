/**
 * destructing assignment(구조분해 할당):
 * 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식
 */
let user=['fubao','aibao','lebao'];
let [user1,user2,user3]=users;
let [user4,,user5]=users;
console.log(user4); //fubao
console.log(user5); //lebao
let [a=1,b=2,c=3]=[1,2]; //기본값
// 바꿔치기
let a=1;
let b=2;
[a,b]=[b,a];

//갹체구조분해
let userr={name:"fubao",age:1};
let {name,age}=user;  //let name=userr.name; let age=userr.age; 
let {age,name}=user;  //let name=userr.name; let age=userr.age; 

//새로운 변수 이름으로 할당
let {name:userName, age:userAge}=user; 
let {name,age,gender="F"}=user; //기본값
