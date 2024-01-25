function solicitarNombreApellido(){
   let input  = document.getElementById("name")
   input.addEventListener("input", () =>
   console.log(input.value));

   let solicitarNombreApellido = localStorage.setItem("createUser", "name");
   console.log(solicitarNombreApellido);
   if ((nombreYApellido =! " ")){
      } else {
   }
}
solicitarNombreApellido()


//PROFE: ACA LE DI UN EJEMPLO UTILIZANDO LA FUNCION DE ARRIBA SOBRE EL USO DEL OPERADOR TERNARIO.
/*let nombreApellido = prompt ("Ingresar nombre y apellido.").toLowerCase();
nombreApellido.trim != "" ? alert("Nombre y Apellido: " + nombreApellido) : alert("¡Nombre y Apellido obligatorio!");
*/

function mostrarMenuDeInscripcion(){
   let input  = document.getElementById("dia")
   input.addEventListener("input",  () =>
   console.log(input.value));

   let inscripcion =  localStorage.setItem("menuDeInscripcion", "dia"); 
   console.log(inscripcion);             
   if ((inscripcion.trim === "martes")){
   } else ((inscripcion.trim === "jueves")); {
    }
}
mostrarMenuDeInscripcion()

function mostrarMenuDeOpcionesDeMartes(){
   let input  = document.getElementById("horario");
   input.addEventListener("input", () => 
   console.log(input.value));

   let mensaje = localStorage.setItem("opcionesMartes", "horario");
   console.log(mensaje);
   if (mensaje.trim === "receta dulce") {
   } else if (mensaje.trim === "receta salada") {
   } else {
      alert("Opcion incorrecta (receta dulce/ receta salada).");
   }
}
mostrarMenuDeOpcionesDeMartes()

function mostrarMenuDeOpcionesDeJueves(){
   let input  = document.getElementById("horario")
   input.addEventListener("input", () => 
   console.log(input.value));
   
   let mensaje = localStorage.setItem("opcionJueves", "horario")
   console.log(mensaje);                   
   if (mensaje === "receta dulce") {
   } else if (mensaje === "receta salada") {
   } else {
     alert ("Opcion incorrecta. Elija receta dulce o receta salada, por favor.)"); 
   }
}
mostrarMenuDeOpcionesDeJueves()

function mostrarOpcionMasVotada(){
   let input  = document.getElementById("votacion")
   input.addEventListener("input", () => 
   console.log(input.value));
   
   let entrada = localStorage.setItem("opcionMasVotada", "tipo");
   console.log(entrada);
   let fallos= 0;
   switch (entrada) {
      case "comun":
         break;
      case "sintacc":
        break;
      case "veggie":
         break;
      default:
         mostrarOpcionMasVotada();
         fallos +=1;
         break;
   }
}
mostrarOpcionMasVotada()

function mostrarfinalizacionDelFormulario(){
   for (let i = 1; i <= 101; i++) {
      let asignarCupo = localStorage.setItem("cupos");                     
      alert("Usted ha sido registrado exitosamente. Cupo nro "+i +" correo: " + asignarCupo);
   } 
}
mostrarfinalizacionDelFormulario()


let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", (e) => {
   e.preventDefault();
   
let inputs = e.target.children;
console.log(inputs.children["name"].value); 
console.log(inputs.children["dia"].value);  
console.log(inputs.children["horario"].value); 
console.log(inputs.children["dia"].value); 
console.log(inputs.children["votacion"].value);
console.log(inputs.children["submit"].value); 
});

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
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
guardarLocal("inscripciones", JSON.stringify(inscripciones));

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


let inscripto = localStorage.getItem("nombre");
console.log("nombre");
let persona1 = {nombre: "susana", dia: "martes"};
let persona1Json = JSON.stringify(persona1)
console.log(persona1Json);
let persona2 = {nombre: "sofia", dia: "martes"};
let persona2Json = JSON.stringify(persona2)
console.log(persona2Json);






