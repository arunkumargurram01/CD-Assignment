
//alert()
function fun1(){
    var x=document.getElementById("num1").textContent;
    //var x=document.getElementById("num").textContent;
    var y=document.getElementById("div1").innerHTML += x;
    
}
function fun2(value){
    var x=document.getElementById("num2").textContent;
    //alert("working")
    if(x=="2"){
         var y=document.querySelector("#div1").innerHTML += x;
    }
    else{
        alert("not working")
    }
}

function fun3(){
    var x=document.getElementById("num3").textContent;
    var y=document.getElementById("div1").innerHTML += x;
    
}
function fun4(){    
var x=document.getElementById("num4").textContent;
if(x=="4"){
    var y=document.querySelector("#div1").innerHTML += x;
}
else{
    alert("not working")
}

}
function fun5(){
    var x=document.getElementById("num5").textContent;
    if(x=="5"){
        var y=document.querySelector("#div1").innerHTML += x;
    }
    else{
        alert("not working")
    }
}
function fun6(){
    var x=document.getElementById("num6").textContent;
    if(x=="6"){
        var y=document.querySelector("#div1").innerHTML += x;
    }
    else{
        alert("not working")
    }
}

function fun7(){
    var x=document.getElementById("num7").textContent;
    //alert(x)
    if(x=="7"){
        var y=document.querySelector("#div1").innerHTML += x;
    }
    else{
        alert("not working")
    }
}

function fun8(){
    var x=document.getElementById("num8").textContent;
    if(x=="8"){
        var y=document.querySelector("#div1").innerHTML += x;
    }
    else{
        alert("not working")
    }   
}

function fun9(){
    var x=document.getElementById("num9").textContent;
    if(x=="9"){
        var y=document.querySelector("#div1").innerHTML += x;
    }
    else{
        alert("not working")
    }   
}

function fundp(){
    var x=document.getElementById("num.").textContent;
    if(x=="."){
        var y=document.querySelector("#div1").innerHTML += x;
    }
    else{
        alert("not working")
    }
}
function fun0(){
    var x=document.getElementById("num0").textContent;
    var y=document.querySelector("#div1").innerHTML += x;
}
// calculator operations code
function dev(){    
    var x=document.getElementById("dev").innerText;
    var y= document.querySelector("#div1").innerHTML += x;
}
function sum(){
    var x=document.getElementById("sum").innerText;
    var y= document.querySelector("#div1").innerHTML += x;
}
function mul(){
    var x=document.getElementById("mul").innerText;
    var y= document.querySelector("#div1").innerHTML += x;
}
function sub(){
    var x=document.getElementById("sub").innerText;
    var y= document.querySelector("#div1").innerHTML += x;
}

function cancel(){
    var a = "";
    //var b= document.getElementById("div1").innerHTML = a;
    var c=document.getElementById("div1").innerHTML = a;
    
}
function eql(){

var x=document.querySelector("#div1").innerText;
if(x==''){
var z=document.querySelector("#div1"). innerHTML= "0";
}
else{
var y = eval(x);
document.getElementById("div1").innerHTML= eval(x);
}
}