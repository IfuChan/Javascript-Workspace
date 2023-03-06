function add(){
    let num1=document.getElementById("num1").valueAsNumber;
    let num2=document.getElementById("num2").valueAsNumber;
    let result=num1+num2;
    document.getElementById("result").textContent="Result: "+result;

}

function subtract(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let result=num1-num2;
    document.getElementById("result").textContent="Result: "+result;

}

function Divide(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let result=num1/num2;
    document.getElementById("result").textContent="Result: "+result;

}

function Multiply(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let result=num1*num2;
    document.getElementById("result").textContent="Result: "+result;

}


