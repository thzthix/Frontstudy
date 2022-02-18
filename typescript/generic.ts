// Generic :클래스나 함수를 다양한 타입으로 재사용할 수 있다.
function getSize <T>(arr:T[]):number{
    return arr.length;
}

const arr1=[1,2,3];
getSize<number|string> (arr1); //특정 type으로 강제하고 싶을 때

const arr2=["a","b","c"];
getSize<string>(arr2);

const arr3=[false,true,true];
getSize<boolean>(arr3);

const arr4=[{},{},{name:"Tim"}];
getSize<object>(arr4);

interface Mobile<T>{
    name:string;
    price:number;
    option:T;
}

const m1:Mobile<object>={
    name:'s21',
    price:1000,
    option:{
        color:'red',
        coupon:false,
    },
};
// const m1:Mobile<{color:string;coupon:boolean}>={ //option형태가 정해져 있다면
//     name:'s21',
//     price:1000,
//     option:{
//         color:'red',
//         coupon:false,
//     },
// };

const m2:Mobile<string>={
    name:"s20",
    price:900,
    option:"Air",
};

interface User{
    name:string;
    age:number;
}

interface Car{
    name:string;
    color:string;
}

interface Book{
    price:number;
}

const user:User={name:'fubao',age:1};
const car:Car={name:'fubaocar',color:"white"};
const book:Book={price:3000};

function showName <T extends {name:string}>(data:T) :string{
    return data.name;
} //data에 name을 장담할 수 없음

showName(user);
showName(car);
// showName(book); error
