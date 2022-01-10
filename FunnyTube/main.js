const moreBtn=document.querySelector('.info .metadata .titleandButton .more');
const title=document.querySelector('.info .metadata .titleandButton .title');
moreBtn.addEventListener('click',()=>{
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
})
