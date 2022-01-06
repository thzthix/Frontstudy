var Links={
  setcolor:function(color){
    // var alist=document.querySelectorAll('a');
    // var spans=document.querySelectorAll('span');
//     var i=0;
//     while(i<alist.length){
//       alist[i].style.color=color;
//       i=i+1;
//   }
//   i=0;
//   while(i<spans.length){
//     spans[i].style.color=color;
//     i=i+1;
// }
$('a').css('color',color);
$('span').css('color',color);
}}


var Body={
  setColor:function (color){
    // document.querySelector('body').style.color=color;
    $('body').css('color',color);
  },
  SetBackgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor',color);
  }
}


function nightDayHandler(self){

if(self.value==='night'){
Body.SetBackgroundColor('black');
Body.setColor('white');
self.value='day';
Links.setcolor('powderblue');


}

else{
Body.SetBackgroundColor('white');
Body.setColor('black');
self.value='night';
Links.setcolor('blue');}
}
