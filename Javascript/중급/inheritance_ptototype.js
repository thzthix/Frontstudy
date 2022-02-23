const car={
    wheels:4,
    drive(){
        console.log("drive...");
    }
};

const bmw={
    color:"red",
    navigation:1,
};

const audi={
    color:"blue"
};

bmw.__proto__=car;  //bmw는 car의 상속
benz.__proto__=car;
audi.__proto__=car;

const x5={
    color:"white",
    name:"x5",
};

x5.__proto__=bmw;
console.log(x5.navigation);
  //prototype chain

for(p in x5){ //상속된것도 나옴
    if(x5.hasOwnproperty(p)){  //직접 가지고있는것만 나옴 상속된거 안나옴
    console.log(p);}    
}

Object.keys(x5); Object.values(x5); //상속된건 안나옴

/**생성자함수 이용 */
// Bmw.prototype={
//     constructor:Bmw,
//     wheel:4,
//     drive() {
//         console.log("drive...");
//     },
//     navigation:1,
//     stop(){
//         console.log("STOP!");
//     },

// }

const Bmw=function(color){
    this.color=color;

};

Bmw.prototype.wheels=4;
Bmw.prototype.drive=function(){
    console.log("drive...");
};
Bmw.prototype.navigation=1;
Bmw.prototype.stop=function(){
    console.log("STOP!");
}

const x6=new Bmw("red");
const x7=new Bmw("blue"); //x6.__proto__=car;

console.log(z4 instanceof Bmw); //생성자가 객체를 만들면 인스턴스
console.log(z4.constructor===Bmw);  

const Bmw=function(color){
    const c=color;
    this.getColor=function(){
        console.log(c);
    }

};
const x8=new Bmw("pink");  //색을 얻기만 하고 바꿀 수 없음
