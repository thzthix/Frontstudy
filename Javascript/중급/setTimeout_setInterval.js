/**
setInterval:함수를 반복적으로 실행
clearInterval:스케쥴링 취소 */

let num=0;
function showTime(){
    console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다`);
    if(num>5){
        clearInterval(tid);
    }
}
const tid=setInterval(showTime,1000);
