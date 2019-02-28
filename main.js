// function getPrice(price) {
//     return price.value || 0;
// }
// function multiplication(i){
//     var a=document.getElementById("Price"+i).value
//         p=a*document.getElementById("numberp"+i).value
//         document.getElementById("totalPrice"+i).textContent=p;
// }

function multiplication1(){
    var a=document.getElementById("Price1").textContent;
    var p=document.getElementById("numberp1").value;
    var c=a*p;
    // console.log(c);
    document.getElementById("totalPrice1").textContent=c;
    // console.log(a)
}

function multiplication2(){
    var a=document.getElementById("Price2").textContent;
    var p=document.getElementById("numberp2").value;
    var k=a*p;
    console.log(k);
    document.getElementById("totalPrice2").textContent=k;
    // console.log(a)
}

function multiplication3(){
    var a=document.getElementById("Price3").textContent;
    var p=document.getElementById("numberp3").value;
    var c=a*p;
    console.log(c);
    document.getElementById("totalPrice3").textContent=c;
    // console.log(a)
}

function total(){
    var r=0
    var a=Number(document.getElementById("totalPrice1").innerHTML);
    var b=Number(document.getElementById("totalPrice2").innerHTML);
    var c=Number(document.getElementById("totalPrice3").innerHTML);
    r=(a+b+c);
    console.log(a)
   // console.log(r)
//    
    document.getElementById("TotalPrice").textContent=(r);
    console.log()
}






function myResetFunction() {

    // var d=0
    // var a=Number(document.getElementById("totalPrice1").innerHTML);
    // var b=Number(document.getElementById("totalPrice2").innerHTML);
    // var c=Number(document.getElementById("totalPrice3").innerHTML);
    // r=(a+b+c);
    // console.log(a)
   // console.log(r)
//    
    document.getElementById("TotalPrice").textContent=(0);
    console.log()
}

function myResetFunction1(){
    document.getElementById("totalPrice1").textContent=(0);

}
function myResetFunction2(){
    document.getElementById("totalPrice2").textContent=(0);

}
function myResetFunction3(){
    document.getElementById("totalPrice3").textContent=(0);

}




  