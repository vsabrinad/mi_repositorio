let solicitarNombre  = document.getElementById("nombre")
solicitarNombre.addEventListener(`solicitarNombre`, () => {
   localStorage.setItem('solicitarNombre', solicitarNombre.value)
})

let elegirDia  = document.getElementById("dia")
elegirDia.addEventListener(`elegirDia`, () => {
   localStorage.setItem('elegirDia', elegirDia.value)
})

let elegirHorario  = document.getElementById("horario")
elegirHorario.addEventListener(`elegirHorario`, () => {
 localStorage.setItem('elegirHorario', elegirHorario.value)
})

let votar  = document.getElementById("votacion")
votar.addEventListener(`votar`, () => {
 localStorage.setItem('votar', votar.value)
})

let ingresarEmail  = document.getElementById("email")
ingresarEmail.addEventListener(`ingresarEmail`, () => {
 localStorage.setItem('ingresarEmail', ingresarEmail.value)
})

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);
let validacion1 = document.getElementById("validacion1");
let validacion2 = document.getElementById("validacion2");
let validacion3 = document.getElementById("validacion3");
let validacion4 = document.getElementById("validacion4");
let validacion5 = document.getElementById("validacion5");
function validarFormulario(e){
   console.log("validar");
   e.preventDefault();
   if (!solicitarNombre.value) {
      validacion1.innerHTML = `<p>¡Nombre y apellido obligatorio!</p>`;
   }
   if (!elegirDia.value){
      validacion2innerHTML = `<p>Ingrese martes o jueves.</p>`;
   }
   if (!elegirHorario.value){
      validacion3.innerHTML = `<p>Escriba el numero: 10/12.</p>`;
   }
   if (!votar.value){
      validacion4.innerHTML = `<p>Ingrese sintacc, comun o veggie por favor.</p>`;
   validacion4.innerHTML = `<p>Ingrese sintacc, comun o veggie por favor.</p>`;
   } 
   if (!ingresarEmail.value) {
      validacion5.innerHTML = `<p>Escriba su correo electronico.</p>`;
   }
   console.log(solicitarNombre.value);
   console.log(elegirDia.value);
   console.log(elegirHorario.value);
   console.log(votar.value);
   console.log(ingresarEmail.value);
   return false
}

const boton = document.querySelector('#boton')
boton.addEventListener('click', () => {
   Swal.fire({
      title: "¡Excelente!",
      text: "Tu inscripcion se ha registrado exitosamente.",
      icon: "success",
      showConfirmButton: false,
      timer: 2500,
   })
})

//VERIFICACION DE INSCRIPCION
const inscriptos = ["susana", "carlos", "sofia", "marcelo", "rocio", "paula", "silvia", "omar", 
 "gustavo", "alan", "sebastian", "carla", "ariel", "nadia", "melisa", "ramiro", "guillermo", "ayelen", "christian", "lidia", "sabrina","cecilia"];
 let verificar = prompt ("Verificacion de solicitud. Ingrese el nombre a buscar:");
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

//PROMESAS
function futuro(value) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         value ? resolve({nombre: "melisa", dia:"martes", horario: 10}) : reject("El sistema se ha caido, por favor intente luego.");
      }, 2500);
   });
}
futuro(true)
.then((response) => console.log(response))
.catch((error) => {
   let div = document.createElement("div");
   div.innerHTML = error;
   document.body.append(div);
})

//FETCH
const publicacion = document.querySelector('#publicacion')
fetch('https://www.clarin.com/api/contentsCover/20240130')
.then((response) => response.json())
.then((data) => {
   data.forEach((post) => {
      const div = document.createElement('#publicacion')
      div.innerHTML = `
      <h4>${post.title}</h4>
      <p>${post.body}</p>
  `
  document.body.append(div);
})
.catch((error) => {
      let div = document.createElement("div");
      div.innerHTML = error;
      document.body.append(div);
   })

})



