// let myPoint=3;

// function add3Points(){
//     myPoint+=3;
// }
// function remove1Point(){
//     myPoint-=1;
// }
// console.log("Initially: "+myPoint);
// add3Points();
// add3Points();
// add3Points();
// remove1Point();
// remove1Point();
// console.log("Finally: "+myPoint);
function randomNumber(){ return Math.floor(Math.random()*100)+1;}
let num=document.getElementById("num");
for(let i=0;i<100;i++){
    num.innerHTML+= i+1+": " + randomNumber() +"<br>";
}