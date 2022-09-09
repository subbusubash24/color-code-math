// Math.round
// Math.round(4.6);
// console.log(Math.round(4.6));
// console.log(Math.round(4.5));
// console.log(Math.round(4.4))

// Math.ceil rounded up to its nearest number
// console.log(Math.ceil(4.9));
// console.log(Math.ceil(4.2));
// console.log(Math.ceil(-4.9));

// Math.floor rounded down to its nearest number
// console.log(Math.floor(4.9));
// console.log(Math.floor(4.2));
// console.log(Math.floor(-4.9));

// Math.trunc returns the integer part of x
// console.log(Math.trunc(4.9));
// console.log(Math.trunc(4.5));
// console.log(Math.trunc(5.9));

// Math.sign
// console.log(Math.sign(10));
// console.log(Math.sign(-10));
// console.log(Math.sign(0));

// Math.pow
// console.log(Math.pow(4,5));
// console.log(Math.pow(8,2));
// console.log(Math.pow(5,3));

// Math.abs
// console.log(Math.abs(-6.8));
// console.log(Math.abs(6.8));
// console.log(Math.abs(-5.8));


// Math.min and Math.max
// console.log((Math.min(1, 450, 90, 50, -16, -500)));

// console.log((Math.max(1, 350, 90, 50, -16, -500)));

// Math.random

// console.log(Math.random()*6);



let button=document.querySelector(".btn");
let box=document.querySelector(".box");
button.addEventListener("click",()=>{
    let x=Math.floor(Math.random()*256);
    let y=Math.floor(Math.random()*256);
    let z=Math.floor(Math.random()*256);
    let clr= "rgb("+ x + "," + y + "," + z +")";
    console.log(clr);
    box.style.backgroundColor=clr;
    
    

})
         
























