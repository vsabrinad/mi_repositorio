function solicitarNombreYApellido(){
   let nombreApellido = prompt ("Ingresar nombre y apellido.");
   if ((nombreApellido.trim != "")){
      alert("Nombre y apellido: " + nombreApellido);
      mostrarMenuDeInscripcion();
   } else {
      alert("¡Nombre y Apellido obligatorio!");
      solicitarNombreYApellido();
   }
}
solicitarNombreYApellido()

/*PROFE: ACA LE DI UN EJEMPLO UTILIZANDO LA FUNCION DE ARRIBA SOBRE EL USO DEL OPERADOR TERNARIO.
 
 let nombreApellido = prompt ("Ingresar nombre y apellido.").toLowerCase();
 
 nombreApellido.trim != "" ? alert("Nombre y Apellido: " + nombreApellido) : alert("¡Nombre y Apellido obligatorio!");
*/
 
function mostrarMenuDeInscripcion(){
   let inscripcion = prompt ("Se dan 100 cupos por clase. Elija una clase: MARTES o JUEVES");
   if ((inscripcion.trim === "martes")){
      alert("Iniciando su reserva.");
      mostrarMenuDeOpcionesDeMartes();
   } else ((inscripcion.trim === "jueves")); {
      alert("Iniciando su reserva.");
      mostrarMenuDeOpcionesDeJueves();
   }
}
mostrarMenuDeInscripcion()
 
function mostrarMenuDeOpcionesDeMartes(){
   let mensaje = prompt("10hs: clase de RECETA SALADA o 12hs: clase RECETA DULCE. Elija la clase.");
   if (mensaje.trim === "receta dulce") {
      alert("¡Excelente!");
      mostrarOpcionMasVotada();
   } else if (mensaje.trim === "receta salada") {
      alert("¡Excelente!");
      mostrarOpcionMasVotada();
   } else {
      alert ("Opcion incorrecta (receta dulce/ receta salada).");
      mostrarMenuDeOpcionesDeMartes();
   }
}
mostrarMenuDeOpcionesDeMartes()
 
function mostrarMenuDeOpcionesDeJueves(){
   let mensaje = prompt("10hs: clase de RECETA SALADA o 12hs: clase RECETA DULCE. Elija la clase.");
   if (mensaje === "receta dulce") {
      alert("Excelente.");
      mostrarOpcionMasVotada();
   } else if (mensaje === "receta salada") {
      alert("Excelente.");
      mostrarOpcionMasVotada();
   } else {
      alert ("Opcion incorrecta. Elija receta dulce o receta salada, por favor.)");
      mostrarMenuDeOpcionesDeJueves();
   }
}
mostrarMenuDeOpcionesDeJueves()
 
function mostrarOpcionMasVotada(){
   let entrada = prompt("Clase dedicada a receta: Comun, Sintacc o Veggie. La clase se basara en la opcion mas votada.").toLowerCase();
   let fallos= 0;
   switch (entrada) {
      case "comun":
         alert("Perfecto.");
         mostrarfinalizacionDelFormulario();
         break;
      case "sintacc":
         alert("Genial.");
         mostrarfinalizacionDelFormulario();
         break;
      case "veggie":
         alert("Excelente.");
         mostrarfinalizacionDelFormulario();
         break;
      default:
         alert("Su respuesta no es valida.");
         mostrarOpcionMasVotada();
         fallos +=1;
         break;
      mostrarOpcionMasVotada();
   }
}
mostrarOpcionMasVotada()
 
function mostrarfinalizacionDelFormulario(){
   for (let i = 1; i <= 101; i++) {
      let asignarCupo = prompt("Ingresar correo electronico.");
      alert("Usted ha sido registrado exitosamente. Cupo nro "+i +" correo: " + asignarCupo);
      solicitarNombreYApellido();
   } 
}
 
 
 
 
const inscriptosMartes = [ "susana", "carlos", "sofia", "marcelo", "rocio", "paula", "silvia", "omar", 
    "gustavo", "alan", "sebastian", "carla", "ariel", "nadia", "melisa"];
    inscriptosMartes.push("elena");
console.log(inscriptosMartes);
 
    inscriptosMartes.shift("susana");
console.log(inscriptosMartes);
 
const todosLosInscriptos = ["susana", "carlos", "sofia", "marcelo", "rocio", "paula", "silvia", "omar", 
 "gustavo", "alan", "sebastian", "carla", "ariel", "nadia", "melisa", "ramiro", "guillermo", "ayelen", "christian", "lidia", "sabrina","cecilia"];
 
console.log(todosLosInscriptos.indexOf("sofia"));
console.log(todosLosInscriptos.indexOf("cecilia"));
 
const recetaSalada= ["jueves-receta salada"]
const inscriptosJueves = ["ramiro", "guillermo", "ayelen", "christian", "lidia", "sabrina","cecilia"];
 
const varios= recetaSalada.concat(inscriptosJueves);
console.log(varios);

const inscriptos = ["susana", "carlos", "sofia", "marcelo", "rocio", "paula", "silvia", "omar", 
 "gustavo", "alan", "sebastian", "carla", "ariel", "nadia", "melisa", "ramiro", "guillermo", "ayelen", "christian", "lidia", "sabrina","cecilia"];
 let verificar = prompt ("Verificacion de solicitud. Ingrese el nombre a buscar:");
 if(inscriptos.includes(verificar)){
   alert("Inscripto/a.");
 }else {
   alert("No inscripto/a.");
   }
verificar = prompt("Verificacion de solicitud. Ingrese el nombre a buscar:");


const inscripciones = [
    {nombre: "susana", dia: "martes", horario: 10, receta: "salada"},
    {nombre: "carlos", dia: "martes", horario: 10, receta:"salada"},
    {nombre: "sofia", dia: "martes", horario: 12, receta: "dulce"}, 
    {nombre: "christian", dia: "jueves", horario: 10, receta: "salada"},
    {nombre: "guillermo", dia: "jueves", horario: 12, receta: "dulce"},
    {nombre: "ayelen", dia: "jueves", horario: 12, receta: "dulce"},
    {nombre: "melisa", dia: "martes", horario: 10, receta: "salada"},
    {nombre: "lidia", dia: "jueves", horario: 12, receta: "dulce"},
]
let dia = String(prompt("Para saber dia de su clase. Ingrese su nombre por favor:"));
const encontrados = inscripciones.filter(item => item.dia = "martes");
 
encontrados.forEach(item => {
   alert(
     `Nombre: ${item.nombre} 
    Dia: ${item.dia}`
   );
})
 
const claseMartes = new Date ("january 16, 2024");
console.log(claseMartes);
console.log(claseMartes.getFullYear());
const hoy = new Date ("january 12, 2024");
const miliSegundosPorDia = 86400000
console.log((claseMartes - hoy) / miliSegundosPorDia);

//Profe: A partir de aca es sobre la tercera junto con lo de DOM que esta en el otro archivo

let boton= document.getElementsByClassName("bottom");
const respuesta= () =>{
   console.log("Has hecho click");
};
boton.addEventListener("click", respuesta);



let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;
  if (!inputs[0].value.includes("@")) {
    inputs[0].value = "";
    alert("Debe contener el @");
  }
});



localStorage.setItem("objeto", {nombre: "melisa", dia: "martes", horario: 10, receta: "salada"});


let inscripto = localStorage.getItem("nombre");
console.log("nombre");


let persona1 = {nombre: "susana", dia: "martes"};
let persona1Json = JSON.stringify(persona1)
console.log(persona1Json);


