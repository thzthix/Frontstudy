function sendGreeting(message:string,userName='aibao'):void{ //기본 매개변수(default parameter) 
    console.log(`${message},${userName}`);
}
const ArrowsendGreeting=(message:string,userName='aibao'):void=>{ //화살표함수
    console.log(`${message},${userName}`);
}
sendGreeting('Hello','Fubao');
//typescript는 모든 매개변수가 필요하다고 가정
//Optional parameter(선택적 매개변수):있어도,없어도 될 때 userName?=string
//Optional parameter은 필수 매개변수 뒤에 위치:하나가 되면 그 뒤도 다 optional parameter가 되어서
sendGreeting('Hello');
