/**
 * call,apply,bind:
 * 함수 호출 방식과 관계없이 this를 지정할 수 있음
 */
const fubao={
    name:"fubao",
};
const aibao={
    name:"aibao",
};
function showThisName(){
    console.log(this.name);
}
showThisName.call(fubao); //fubao

function update(birthYear,occupation){
    this.birthYear=birthYear;
    this.occupation=occupation;
};
update.call(fubao,2020,"baby panda");
console,log(fubao);

/**apply
 * apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같다.
 * call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받는다.
 * 
 */
update.apply(fubao,[2020,"baby panda"]);
console.log(fubao);

const nums=[3,10,1,6,4];
const minNum=Math.min(...nums);
const minNum=Math.min.apply(null,nums); //Math는 this가 필요하지 않아서 아무거나 넣음
const minNum=Math.min.call(...nums);

/**bind: 함수의 this값을 영구히 바꿀 수 있습니다. */

const FUBAO={
    name:fubao,
};

function update(birthYear,occupation){
    this.birthYear=birthYear;
    this.occupation=occupation;
}

const updateFUBAO=update.bind(fubao);
updateFUBAO(2020,"BABY");
console.log(FUBAO);

const user={
    name:"fubao",
    showName:function(){
        console.log(`hello,${this.name}`);
    },

};

user.showName();
let fn=user.showName();
//fn(); //hello, 
fn.call(user);
fn.apply(user);
fn();

let bouncFn=fn.bind(user);
bouncFn();

