let someValue:any=5;  //any type:어떤 타입이든 모두 ok
someValue='hello';
let price:number|string=5;//union type: 제한된 타입들을 동시에 지정 하고 싶을때
price='string';
type StrOrNum=number|string;//Type Aliases: type keyword를 이용해 새로운 type을 선언하는것
let totalCost:number;
let orderID:StrOrNum;
const calculateTotalCost=(price:StrOrNum,qty:number):void=>{};
const findOrderID=(costomer:{
    costomerId:StrOrNum,
    name:string,
},produceId:StrOrNum):StrOrNum=>{return orderID;}
type StringOrNum=string|number;
let itemPrice:number;
const setItemPrice=(price:StringOrNum):void=>{
    //price가 string일 수도 , number일 수도 있기 때문에
    // Type Guard:union type을 사용할 때 typeof operator을 이용하여 코드 검증을 수행하는 것
    if(typeof price==='string'){
        itemPrice=0;
    }else{
        itemPrice=price;
    }
};
setItemPrice(50);
