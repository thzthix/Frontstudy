// let vs const vs var
// var는 한번 선언된 변수를 다시 선언할 수 있다.
// var는 선언하기 전에 사용할 수 있다.

// 호이스팅:스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동
// let과 const는 호이스팅 시 TDZ(Temporal Dead Zone)의 영향을 받는다.

// console.log(name) TDZ 사용 불가
const name="fubao"; //변수 선언 및 할당
console.log(name); //사용 가능

let age=30;
function showAge(){
    console.log(age); //TDZ
    // let age=20; error block단위로 호이스팅이 일어나
}
showAge();

//변수의 생성과정
// var 1.선언 및 초기화단계 (초기화단계: undefined를 할당해주는 단계)
//     2. 할당단계

// let 1. 선언단계
//     2. 초기화단계
//     3. 할당단계

// const 1.선언+초기화+할당


// 스코프
//var:함수 스코프(function-scoped)

// let,const:블록 스코프(block-scoped)
