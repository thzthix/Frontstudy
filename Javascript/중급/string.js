let list=[
    "01.fubao",
    "02.aibao",
    "03.lebao"
];
let newList=[];

for(let i=0;i<list.length;i++){
    newList.push(list[i].slice(4));
}

console.log(newList);

//금칙어:푸바오
function hasFubao(str){
    if(str.includes('푸바오')){ //if((str.indexOf('푸바오')>-1)
        
        console.log('금칙어가 있습니다.');
    }else{
        console.log('통과');
    }
}
hasFubao('사나운 판다 푸바오');
