//async: 프로미스를 반환 .then 사용보다 가독성이 좋아짐
async function getName(){
    return Promise.resolve("FUBAO");
    //throw new Error("err...");
}

getName.then((name)=>{
    console.log(name);
});

//await: async함수 내에서만 사용가능 getName의 resolve를 기다렸다가 result에 넣는다
async function showName(){
    const result=await getName("FUBAO");
    console.log(result);
}

console.log("시작");
showName();

const f1=()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("1번 주문 완료");
        },1000);
    });
}
const f2=(message)=>{
    console.log(message);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("2번 주문 완료");
        },3000);
    });
}
const f3=(message)=>{
    console.log(message);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("3번 주문 완료");
        },2000);
    });
}

console.log("시작");
async function order(){
    try{
    // const result1=await f1();
    // const result2=await f2(result1);
    // const result3=await f3(result2);
    // console.log(result3);
    const result=await Promise.all([f1(),f2(),f3()]).then((res)=>{});
    console.log(result);
    }catch(e){
        console.log(e);
    } 
    console.log("종료");
}
order();
