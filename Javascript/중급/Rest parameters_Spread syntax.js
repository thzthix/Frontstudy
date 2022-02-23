/**
 * 나머지 매개변수
 * 전달받은 모든 수를 더해야함
 * user객체를 만들어 주는 생성자 함수를 만들겁니다.
 * 가장 마지막에 위치
 */
function add(...numbers){
    let result=numbers.reduce((prev,cur)=>{
        prev+cur;
    });
    console.log(result);
}
add(1,2,3);
add(1,2,3,4,5,6,7,8,9,10);

function User(name,age,...skills){
    this.name=name;
    this.age=age;
    this.skills=skills;
}
const fubao=new User("fubao",1,"워토우","대나무","당근");

/**
 * 전개 구문
 * arr1을 [4,5,6,1,2,3]으로
 */
let arr1=[1,2,3];
let arr2=[4,5,6];

arr1=[...arr2,...arr1];
console.log(arr1);

let user={name:"fubao"};
let info={age:1};
let food=["bamboo","carrot"];
let panda=["aibao","lebao"];

user={
    ...user,
    ...info,
    skills:[...food,...panda],
};

console.log(user);
