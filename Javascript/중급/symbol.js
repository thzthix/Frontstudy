// 다른 개발자가 만들어 놓은 객체
const user={
    name:"fobao",
    age:30,
};

// 내가 작업
// user.showName=function(){};
const showName=Symbol("show name");
user[showName]=function(){
    console.log(this.name);
};
user[showName]();
// 사용자가 접속하면 보는 메세지
for(let key in user){
    console.log(`Her ${key} is ${user[key]}.`);
}

// Symbol.for():전역 심볼
// 하나의 심볼만 보장받을 수 있음
// 없으면 만들고, 있으면 가져오기 때문
// symbol함수는 매번 다른 symbol값을 생성하지만,
// symbol.for메소드는 하나를 생성한 뒤 키를 통해 캍은 심볼을 공유

const id1=Symbol.for('id');
const id2=Symbol.for('id');
id===id2; //true
Symbol.keyFor(id1);  //"id"
