//ES2021
// String.repalceAll
const str1="I'm [fubao].this is aibao's[bamboo]";
console.log(str1.replaceAll("[","~").replaceAll("]","~"));
//I'm ~fubao~.this is aibao's ~bamboo~.


// Promise.any:프로미스 중에 가장 먼저 이행된 객체 반환
const rejPromise=new Promise((res,rej)=>{
    setTimeout(()=>{
        rej("fail...");
    },1000);
});
const resPromise=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("success");
    },2000);
});

Promise.race([rejPromise,resPromise])
    .then(()=>console.log("성공"))
    .catch(e=>{console.log(e)}); //fail...

Promise.any([rejPromise,resPromise])
    .then(()=>console.log("성공"))
    .catch(e=>console.log(e));  //성공


//Logical assignment Operators (논리 병합 연산자)
function add(num1,num2){
    //num1=num1||0;
    num1||=0;
    num2||0;
    console.log(num1+num2);
}
// name=name&&`Hello ${name}`;
name&&=`Hellp ${name};`

// name=name??"FUBAO";
name??="FUBAO";


/**
 * ||:앞의 값이 falsy이면 뒤의 값
 * ??:앞의 값이 null이나 undefined면 뒤의 값
 *
 */


// Numeric seperators
let billion=1_000_000_000 //10억


// WeakRef=weak reference:약한 참조=가비지 컬렉터 대상
class MyCache{
    constructor(){
        this.cache={}
    }
    add(key,obj){
        this.cache[key]=new WeakRef(obj)
    }
    get(key){
        let cachedRef=this.cache[key].deref() //접근
        if(cachedRef){
            return cachedRef
        }else{
            return false;
        }
    }

}
