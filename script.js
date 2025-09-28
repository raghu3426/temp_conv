let num=document.getElementById("num");
let Fahrenheit=document.getElementById("Fahrenheit");
let Celsius=document.getElementById("Celsius");
let result=document.getElementById("result");
let temp;

function tempconv(){
    if(Fahrenheit.checked){
        temp=Number(num.value);
        temp=(temp*9/5)+32;
        result.textContent=temp;
    }
    else if(Celsius.checked){
        temp=Number(num.value);
        temp=(temp-32)*5/9;
        result.textContent=temp;
    }
    else{
        result.textContent="select anyone";
    }
}