//FORMULARIO DE INSCRIPCION
console.log(document);

let solicitarNombre  = document.getElementById("nombre")
solicitarNombre.addEventListener(`solicitarNombre`, () => {
localStorage.setItem('solcitarNombre', solicitarNombre.value)
})

let elegirDia  = document.getElementById("dia")
elegirDia.addEventListener(`elegirDia`, () => {
   localStorage.setItem('solcitarNombre', elegirDia.value)
})

let elegirHorario  = document.getElementById("horario")
elegirHorario.addEventListener(`elegirHorario`, () => {
console.log(elegirHorario.value)
})

let votar  = document.getElementById("votacion")
votar.addEventListener(`votar`, () => {
console.log(votar.value)
})

let ingresarEmail  = document.getElementById("email")
ingresarEmail.addEventListener(`ingresarEmail`, () => {
console.log(ingresarEmail.value)
})


let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);


let validacion = document.getElementById("validacion");

function validarFormulario(e){
   console.log("validar");
   e.preventDefault();
   if (!solicitarNombre.value) {
      validacion.innerHTML = `<p>Nombre es requerido</p>`;
   }
   if (elegirDia.value !== 'martes' || elegirDia.value !== 'jueves') {
      validacion.innerHTML = `<p>Dia debe ser Martes o Jueves</p>`;
   }

   if (!ingresarEmail.value) {
      alert('Email requerido')
   }
   console.log(solicitarNombre.value);
   return false
}

//VERIFICACION DE INSCRIPCION
/*
const inscriptos = ["susana", "carlos", "sofia", "marcelo", "rocio", "paula", "silvia", "omar", 
 "gustavo", "alan", "sebastian", "carla", "ariel", "nadia", "melisa", "ramiro", "guillermo", "ayelen", "christian", "lidia", "sabrina","cecilia"];
 let verificar = prompt ("Verificacion de solicitud. Ingrese el nombre a buscar:");
 /*if(inscriptos.includes(verificar)){
   alert("Inscripto/a.");
 }else {
   alert("No inscripto/a.");
   }*/
/*verificar = prompt("Verificacion de solicitud. Ingrese el nombre a buscar:");
//USO DEL OPERADOR TERNARIO
(inscriptos.includes(verificar)) ? alert("Inscripto/a.") : alert("No inscripto/a.")

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
 */
// ARRAYS Y OBJETOS

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

const claseMartes = new Date ("january 16, 2024");
console.log(claseMartes);
console.log(claseMartes.getFullYear());
const hoy = new Date ("january 12, 2024");
const miliSegundosPorDia = 86400000
console.log((claseMartes - hoy) / miliSegundosPorDia);

//STORAGE JSON

let inscripto = localStorage.getItem("nombre");
console.log("nombre");
let persona1 = {nombre: "susana", dia: "martes", horario: 10, receta: "salada"};
let persona1Json = JSON.stringify(persona1)
console.log(persona1Json);
let persona2 = {nombre: "sofia", dia: "martes", horario: 12, receta: "dulce"};
let persona2Json = JSON.stringify(persona2)
console.log(persona2Json);
let persona3 = {nombre: "carlos", dia:"martes", horario: 10, receta:"salada"};
let persona3Json = JSON.stringify(persona3)
console.log(persona3Json);
let persona4 = {nombre: "melisa", dia: "martes", horario: 10, receta: "salada"};
let persona4Json = JSON.stringify(persona4)
console.log(persona4Json);
let persona5 = {nombre: "guillermo", dia: "jueves", horario: 12, receta: "dulce"};
let persona5Json = JSON.stringify(persona5)
console.log(persona5Json);






