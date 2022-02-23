/**
 * closure
 * :함수와 렉시컬 환경의 조합
 * 함수가 생성될 당시의 외부 변수를 기억
 * 생성 이후에도 계속 접근 가능
 */
function makeAdder(x){
    return function(y){
        return x+y;
    }
}
const add3=makeAdder(3);
console.log(add3(2)); //5 add3함수가 생성된 이후에도 상위함수인 makeAdder의 x에 접근가능
const add10=makeAdder(10);
console.log(add10(5)); ///5
console.log(add3(1)); //4

//은닉화
function makeCounter(){
    let num=0;
    return function(){
        return num++;
    }
}
let counter=makeCounter();
console.log(counter()); //0
console.log(counter()); //1
console.log(counter()); //2
