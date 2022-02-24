/**Generator
 * :제너레이터는 다른 작업을 하다가 다시 돌아와서
 * next()해주면 진행이 멈췄던 부분부터 이어서 실행 (ex Redux Saga)
 */
function*fn(){
    try{
    console.log(1);
    yield 1;  //value
    console.log(2);
    yield 2;
    console.log(3);
    console.log(4);
    yield 3;
    return "finish";
}catch(e){
    console.log(e);
}

}

const a = fn();
/**console
 * a.next()  //{value:1,done:false}
 * a.next()  //{value:2, done:false}
 * a.next()  //{value:3, done:false}
 * a.next()  //{value:undefined, done:true}
 */

//return(),throw: dine을 true로 바꿈

/**Generator=:iterable,iterator
 * iterable
 * -Symbol.iterator메서드가 있다.
 * Symbol.iterator는 iterator를 반환해야 한다.
 * 
 * iteratora
 * -next메서드를 가진다.
 * -next메서드는 value와 done속성을 가진 객체를 반환한다.
 * 작업이 끝나면 done은 true가 된다.
 */

//iterable은 for of를 사용할 수 있다.
for(let num of a){
    console.log(num);
}

//next()에 인수 전달
function* fn(){
    const num1=yield "첫번째 숫자를 입력해주세요";
    console.log(num1);

    const num2=yield "두번째 숫자를 입력해주세요";
    console.log(num2);

    return num1+num2;
}
const a=fn();
a.next();
a.next(2);
a.next(3); //{value:6, done:true;}

//값을 미리 만들어 주지 않음=>메모리 관리에 효울적 ,필요한 값만 그때그때 생성
function* fn(){
    let index=0;
    while(true){
        yield index++;
    }
}

const a=fn();


//yield*을 이용

function* gen1(){
    yield "w";
    yield "o";
    yield "r";
    yield "l";
    yield "d";
}

function* gen2(){
    yield "hello,";
    yield* gen1();
    yield "!";
}
console.log(...gen2()); //...:반복 가능한 모든 객체에서 사용 가능
//hello, w o r l d !
