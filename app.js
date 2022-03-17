const turn = document.querySelector('button.turn')
const rotate = document.querySelector('button.rotate')
let r = document.querySelector(":root");

let turned = false
turn.addEventListener('click',()=>{
    if(!turned){
        r.style.setProperty('--flippingV', '180deg');
        turned = true;
    }else{
        r.style.setProperty('--flippingV', '0deg');
        turned = false;
    }
})
let rotated = false
rotate.addEventListener('click',()=>{
    if(!rotated && turned){
        r.style.setProperty('--flippingH', '180deg');
        rotated = true;
    }else{
        r.style.setProperty('--flippingH', '90deg');
        rotated = false;
    }
})