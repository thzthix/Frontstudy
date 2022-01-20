'use strict';
// async&await
// clear stle of using promise:)
// 1.async
async function fetchUser() {
    return 'fubao';
}
const user=fetchUser();
user.then(console.log);
console.log(user);

// await 💫
function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
async function getApple(){
    await delay(2000);
    throw 'error';
    return '🍎';
}
async function getBanana(){
    await delay(3000);
    return '🍌';
}
async function pickFruits(){
    const applePromise=getApple();
    const bananaPromise=getBanana();
    const apple=await applePromise;
    const banana=await bananaPromise;
    
    return `${apple}+${banana}`;
    
}
pickFruits().then(console.log);

// 3.userful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(),getBanana()])
    .then(fruits=>fruits.join('+'));
}
pickAllFruits().then(console.log);

function pickOnlyone(){
    return Promise.race([getApple(),getBanana()]);

}
pickOnlyone().then(console.log);