var x=document.getElementById("count");
var y=document.getElementById("msg");
let count=0;
var welcome="Hi, welcome to this shitty website!"
function setZero(){
    y.textContent=welcome;
    x.textContent=count;
}
function increment(){
    count=count+1;
    x.textContent=count;
}
function save(){
    var z=document.getElementById("save");
    z.textContent+=count+" - ";
    count=0;
    x.textContent=count;
}
