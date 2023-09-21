const threedots =document.querySelector(".three-dots");
const container=document.querySelector('.container');

threedots.addEventListener('click',()=>{
    container.style.width='50vw';
})

const cut=document.querySelector('.cut');
cut.addEventListener('click',()=>{
    container.style.width='0vw';
})