//JUGADORES RECUPERAR
let recuperarjugador1= 0;
let recuperarjugador2= 0;
let recuperarjugador3= 0;
let recuperarjugador4= 0;
let recuperarjugador5= 0;
let recuperarjugador6= 0;
let recuperarjugador7= 0;
let recuperarjugador8= 0;
let recuperarjugador9= 0;
let recuperarjugador10= 0;
let recuperarjugador11= 0;
let recuperarjugador12= 0;
let recuperarjugador13= 0;
let recuperarjugador14= 0;
let recuperarjugador15= 0;
let recuperarjugador16= 0;
let recuperarjugador17= 0;
let recuperarjugador18= 0;
let recuperarjugador19= 0;
//JUGADORES PERDIDAS
let perdidajugador1= 0;
let perdidajugador2= 0;
let perdidajugador3= 0;
let perdidajugador4= 0;
let perdidajugador5= 0;
let perdidajugador6= 0;
let perdidajugador7= 0;
let perdidajugador8= 0;
let perdidajugador9= 0;
let perdidajugador10= 0;
let perdidajugador11= 0;
let perdidajugador12= 0;
let perdidajugador13= 0;
let perdidajugador14= 0;
let perdidajugador15= 0;
let perdidajugador16= 0;
let perdidajugador17= 0;
let perdidajugador18= 0;
let perdidajugador19= 0;

//INGRESO
let Ipuerta3= 0
let Ipuerta2= 0
let Ipuerta1= 0
let I2puerta2= 0
let I2puerta3= 0
//INGRESO RIVAL
let IRpuerta3= 0
let IRpuerta2= 0
let IRpuerta1= 0
let IR2puerta2= 0
let IR2puerta3= 0


document.getElementById("jugador1").addEventListener("click",juga1);
document.getElementById("jugador2").addEventListener("click",juga2);
document.getElementById("jugador3").addEventListener("click",juga3);
document.getElementById("jugador4").addEventListener("click",juga4);
document.getElementById("jugador5").addEventListener("click",juga5);
document.getElementById("jugador6").addEventListener("click",juga6);
document.getElementById("jugador7").addEventListener("click",juga7);
document.getElementById("jugador8").addEventListener("click",juga8);
document.getElementById("jugador9").addEventListener("click",juga9);
document.getElementById("jugador10").addEventListener("click",juga10);
document.getElementById("jugador11").addEventListener("click",juga11);
document.getElementById("jugador12").addEventListener("click",juga12);
document.getElementById("jugador13").addEventListener("click",juga13);
document.getElementById("jugador14").addEventListener("click",juga14);
document.getElementById("jugador15").addEventListener("click",juga15);
document.getElementById("jugador16").addEventListener("click",juga16);
document.getElementById("jugador17").addEventListener("click",juga17);
document.getElementById("jugador18").addEventListener("click",juga18);
document.getElementById("jugador19").addEventListener("click",juga19);
 
//PERDIDA Y RECUPERACION
document.getElementById("perdida").addEventListener("click",Perdida);
document.getElementById("recuperacion").addEventListener("click",Recuperacion);

// 1 es Perdida y 0 es Recuperacion
let jugadas = 0
function Perdida(){
    jugadas= 1
}
function Recuperacion(){
    jugadas = 0
}
//sumar perdida o recuperacion

function juga1(){
    if (jugadas==0){
        recuperarjugador1++
        localStorage.setItem("recuperarjugador1", recuperarjugador1);
    }else{
        perdidajugador1++
        localStorage.setItem("perdidasjugador1", perdidajugador1);
    }


}

function juga2(){
    if (jugadas==0){
        recuperarjugador2++
        localStorage.setItem("recuperarjugador2", recuperarjugador2);
    }else{
        perdidajugador2++
        localStorage.setItem("perdidasjugador2", perdidajugador2);
    }
}
function juga3(){
    if (jugadas==0){
        recuperarjugador3++
        localStorage.setItem("recuperarjugador3", recuperarjugador3);
    }else{
        perdidajugador3++
        localStorage.setItem("perdidasjugador3", perdidajugador3);
    }
}
function juga4(){
    if (jugadas==0){
        recuperarjugador4++
        localStorage.setItem("recuperarjugador4", recuperarjugador4);
    }else{
        perdidajugador4++
        localStorage.setItem("perdidasjugador4", perdidajugador4);
    }
}
function juga5(){
    if (jugadas==0){
        recuperarjugador5++
        localStorage.setItem("recuperarjugador5", recuperarjugador5);
    }else{
        perdidajugador5++
        localStorage.setItem("perdidasjugador5", perdidajugador5);
    }
}
function juga6(){
    if (jugadas==0){
        recuperarjugador6++
        localStorage.setItem("recuperarjugador6", recuperarjugador6);
    }else{
        perdidajugador6++
        localStorage.setItem("perdidasjugador6", perdidajugador6);

    }
}
function juga7(){
    if (jugadas==0){
        recuperarjugador7++
        localStorage.setItem("recuperarjugador7", recuperarjugador7);

    }else{
        perdidajugador7++
        localStorage.setItem("perdidasjugador7", perdidajugador17);
    }
}
function juga8(){
    if (jugadas==0){
        recuperarjugador8++
        localStorage.setItem("recuperarjugador8", recuperarjugador8);

    }else{
        perdidajugador8++
        localStorage.setItem("perdidasjugador8", perdidajugador8);
    }
}
function juga9(){
    if (jugadas==0){
        recuperarjugador9++
        localStorage.setItem("recuperarjugador9", recuperarjugador9);

    }else{
        perdidajugador9++
        localStorage.setItem("perdidasjugador9", perdidajugador9);
    }
}
function juga10(){
    if (jugadas==0){
        recuperarjugador10++
        localStorage.setItem("recuperarjugador10", recuperarjugador10);

    }else{
        perdidajugador10++
        localStorage.setItem("perdidasjugador10", perdidajugador10);
    }
}
function juga11(){
    if (jugadas==0){
        recuperarjugador11++
        localStorage.setItem("recuperarjugador11", recuperarjugador11);

    }else{
        perdidajugador11++
        localStorage.setItem("perdidasjugador11", perdidajugador11);
    }
}
function juga12(){
    if (jugadas==0){
        recuperarjugador12++
        localStorage.setItem("recuperarjugador12", recuperarjugador12);

    }else{
        perdidajugador12++
        localStorage.setItem("perdidasjugador12", perdidajugador12);
    }
}
function juga13(){
    if (jugadas==0){
        recuperarjugador13++
        localStorage.setItem("recuperarjugador13", recuperarjugador13);

    }else{
        perdidajugador13++
        localStorage.setItem("perdidasjugador13", perdidajugador13);
    }
}
function juga14(){
    if (jugadas==0){
        recuperarjugador14++
        localStorage.setItem("recuperarjugador14", recuperarjugador14);

    }else{
        perdidajugador14++
        localStorage.setItem("perdidasjugador14", perdidajugador14);
    }
}
function juga15(){
    if (jugadas==0){
        recuperarjugador15++
        localStorage.setItem("recuperarjugador15", recuperarjugador15);

    }else{
        perdidajugador15++
        localStorage.setItem("perdidasjugador15", perdidajugador15);
    }
}
function juga16(){
    if (jugadas==0){
        recuperarjugador16++
        localStorage.setItem("recuperarjugador16", recuperarjugador16);

    }else{
        perdidajugador16++
        localStorage.setItem("perdidasjugador16", perdidajugador16);
    }
}
function juga17(){
    if (jugadas==0){
        recuperarjugador17++
        localStorage.setItem("recuperarjugador17", recuperarjugador17);

    }else{
        perdidajugador17++
        localStorage.setItem("perdidasjugador17", perdidajugador17);
    }
}
function juga18(){
    if (jugadas==0){
        recuperarjugador18++
        localStorage.setItem("recuperarjugador18", recuperarjugador18);

    }else{
        perdidajugador18++
        localStorage.setItem("perdidasjugador18", perdidajugador18);
    }
}
function juga19(){
    if (jugadas==0){
        recuperarjugador19++
        localStorage.setItem("recuperarjugador19", recuperarjugador19);

    }else{
        perdidajugador19++
        localStorage.setItem("perdidasjugador19", perdidajugador19);
    }
}
//ingresos
document.getElementById("puerta3").addEventListener("click",puerta3)
document.getElementById("puerta2").addEventListener("click",puerta2)
document.getElementById("puerta1").addEventListener("click",puerta1)
document.getElementById("2puerta2").addEventListener("click",Rpuerta2)
document.getElementById("2puerta3").addEventListener("click",Rpuerta3)

document.getElementById("rivalpuerta3").addEventListener("click",rival3)
document.getElementById("rivalpuerta2").addEventListener("click",rival2)
document.getElementById("rivalpuerta1").addEventListener("click",rival1)
document.getElementById("2rivalpuerta2").addEventListener("click",Rrival2)
document.getElementById("2rivalpuerta3").addEventListener("click",Rrival3)


//puerta 3
function puerta3(){
    Ipuerta3=Ipuerta3 + 1
    localStorage.setItem("Ipuerta3",Ipuerta3)
    
    document.getElementById("Rpuerta3").innerHTML=localStorage.getItem("Ipuerta3")
}
function Rpuerta3(){
    I2puerta3++
    localStorage.setItem("I2puerta3",I2puerta3)   
    document.getElementById("R2puerta3").innerHTML=localStorage.getItem("I2puerta3")
}
//puerta 2
function puerta2(){
    Ipuerta2++ 
    localStorage.setItem("Ipuerta2",Ipuerta2) 
    document.getElementById("Rpuerta2").innerHTML=localStorage.getItem("Ipuerta2")
    
    
}
function Rpuerta2(){
    I2puerta2++ 
    localStorage.setItem("I2puerta2",I2puerta2) 
    document.getElementById("R2puerta2").innerHTML=localStorage.getItem("I2puerta2")

}
//puerta1
function puerta1(){
    Ipuerta1++
    localStorage.setItem("Ipuerta1",Ipuerta1)   
    document.getElementById("Rpuerta1").innerHTML=localStorage.getItem("Ipuerta1")
}



function rival3(){
    IRpuerta3++
    localStorage.setItem("IRpuerta3",IRpuerta3)   
    document.getElementById("Rrivalpuerta3").innerHTML=localStorage.getItem("IRpuerta3")
}
function rival2(){
    IRpuerta2++
    localStorage.setItem("IRpuerta2",IRpuerta2)   
    document.getElementById("Rrivalpuerta2").innerHTML=localStorage.getItem("IRpuerta2")
}
function rival1(){
    IRpuerta1++
    localStorage.setItem("IRpuerta1",IRpuerta1)   
    document.getElementById("Rrivalpuerta1").innerHTML=localStorage.getItem("IRpuerta1")
}
function Rrival2(){
    IR2puerta2++
    localStorage.setItem("IR2puerta2",IR2puerta2)   
    document.getElementById("R2rivalpuerta2").innerHTML=localStorage.getItem("IR2puerta2")
}
function Rrival3(){
    IR2puerta3++
    localStorage.setItem("IR2puerta3",IR2puerta3)   
    document.getElementById("R2rivalpuerta3").innerHTML=localStorage.getItem("IR2puerta3")
}



console.log("holaaa")
console.log("es",jugadas)
console.log("soy",recuperarjugador1)
