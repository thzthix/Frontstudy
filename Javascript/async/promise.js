'use strict';
// Promise is a JavaScript Object for asynchronous operation.
// State:pending->fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executer runs automatically.
const promise=new Promise((resolve,reject)=>{
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(()=>{
        // resolve('fubao');
        reject(new Error('no network'));
        },2000);

});

// 2. Consumers:then, catch, finally
promise 
    .then(value=>{
        console.log(value);
    })
    .catch(error=>{
        console.log(error);
    })
    .finally(()=>{
        console.log('finally');
    });

 //3. Promise chaining
const fetchNumber=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(1),1000);
}); 
fetchNumber
    .then(num=>num*2)
    .then(num=>num*3)
    .then(num=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>resolve(num-1),1000);
        });
    })
    .then(num=>console.log(num)); //5 (2s)

    // 4. Error Handling
    const getHen=()=>
        new promise((resolve,reject)=>{
            setTimeout(()=>resolve('🐔'),1000);
        });
    const getEgg=hen=>
        new Promise((resolve,reject)=>{
            setTimeout(()=>resolve(`${hen}=>🥚`),1000);

        });
    const cook=egg=>
        new Promise((resolve,reject)=>{
            setTimeout(()=>reject(new Error(`${egg}=>🍳`)));
        });
    getHen()
        .then(getEgg)
        .catch(error=>{
            return '🥑';
        })
        .then(cook)
        .then(console.log);    //20:33