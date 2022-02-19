// keyof

interface User{
    id: number;
    name: string;
    age:number;
    gender:"m"|"f";
}

type UserKey=keyof User; //'id'|'name','age','gender'
const a:UserKey="age";

//Partial<T>

// interface User{
//     id?:number;
//     name?:string;
//     age?:number;
//     gender?:"m"|"f";
// }
let admin:Partial<User>={
    id:1,
    name:"Fubao",
    //job=""
};

// Required<T> 모든 프로퍼티를 필수로 바꿈

interface Usr{
    id: number;
    name: string;
    age?:number;
}

let ad:Required<Usr>={
    id:1,
    name:"fubao",
    age:1,
}

// Readonly<T> 읽기 전용으로 바꾸기
interface Us{
    id:number;
    name:string;
    age?:number;
}

let usr1: Readonly<Us>={
    id:1,
    name:"fubao",
};

// usr1.id=2; error

// Record<K,T> KEY,TYPE

type Grade="1"|"2"|"3"|"4";
type Score="A"|"B"|"C"|"D"|"F";

const score:Record<Grade,Score>={
    1:"A",
    2:"C",
    3:"B",
    4:"D",
};

interface U{
    id:number;
    name:string;
    age:number;
}

function isValid(user:U){
    const result:Record<keyof U,boolean>={
        id:user.id>0,
        name:user.name!=="",
        age:user.age>0,
    };
    return result;
}

// Pick<T,K> 특정 프로퍼티 고르기
interface AU{
    id:number;
    name:string;
    gender:"M"|"W";
}

const aD1:Pick<User,"id"|"name">={
    id:0,
    name:"fubao",
};

// Omit<T,K>

const aD2:Omit<User,"age"|"gender">={
    id:0,
    name:"fubao"
};

// Exclude<T1,T2> T1에서 T2와 겹치는 type 제거

type T1=string|number|boolean;
type T2=Exclude<T1,number|boolean>;

//NonNullable null, undefined 제거한 type 생성

type T3=string|null|undefined|void;
type T4=NonNullable<T1>;
