const close= document.querySelector(".close");
const nav= document.querySelector(".button");
const changeWidth = document.querySelector('.nav-menu');
const blur= document.querySelector('.blur')
close.addEventListener('click', ()=>{
changeWidth.classList.toggle('visible') ; 
blur.classList.toggle('move');

})

nav.addEventListener('click', ()=>{
    changeWidth.classList.toggle('visible') ; 
    blur.classList.toggle('move');

})