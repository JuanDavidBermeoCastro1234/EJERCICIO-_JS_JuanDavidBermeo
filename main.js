let expresion = prompt ("escriba una expresión y sus delimitadores");

let limites = ("()")
let limites2 = ("{}")
let limites3 = ("[]")
let limites4 = (expresion)== (`()`);
let limites5 = (expresion)== (`{}`);
let limites6 = (expresion)== (`[]`);


if (limites4==true || limites5==true || limites6==true  ) {
    console.log(`la expresion ${expresion} esta equilibrada`);
}else{
    console.log (`la expresion ${expresion} no esta equilibrada`);
}
// else if (expresion != limites || expresion != limites2 || expresion != limites3){
//     console.log(`la expresion ${expresion} no esta equilibrada`);
// }
    // resolucion(expresion);
    // const resolucion = (expresion) => {