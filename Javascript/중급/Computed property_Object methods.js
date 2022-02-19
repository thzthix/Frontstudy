// computed property
let n="name";
let a="age";

const user={
    [n]:'fubao',
    [a]:30,
    [1+4]:5,
};
cnosole.log(user);

function makeObj(key,obj){
    return{
        [key]:ValidityState,
    };
}

const obj=makeObj("나이",1);
console.log(obj);

// 객체 복사
const user={
    name:"fubao",
    age:1,
};
const user2=Object.assign({},user);
user.name="aibao";
console.log(user2); //aibao
console.log(user1); //fubao

// 키값을 배열로 반환
const result=Object.keys(user);
console.log(result);

// 값을 배열로 반환
const res=Object.values(user);
console.log(res);

// 둘다 반환(배열안에 각각 배열로 반환됨)
const r=Object.entries(user);
console.log(r);

// 배열을 object로
let arr=[
    ["mon","월"],
    ["tue","화"]
]

const result=Object.fromEntries(arr);
