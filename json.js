//1) 
//a) Crear un objeto JSON con información de un usuario: nombre o apodo, instrumento/superpoder/profesión (a elección de ustedes), edad.

const usuario= {
    "nombre": "Leia",
    "edad": 19,
    "profesion": "senadora",
}

// //b) Mostrar un mensaje en el HTML con la información del usuario
// console.log(usuario)


document.write(`<p>Nombre: ${usuario.nombre}</p>`)  //muestra uno por uno los datos del objeto
document.write(`<p>Edad: ${usuario.edad}</p>`)
document.write(`<p>Profesion: ${usuario.profesion}</p>`)



// let personName= usuario.nombre  // me muestra el nombre de la persona en el array
// console.log(personName) 

// c) Agregar un botón que da la opción de modificar cualquiera de los tres datos.

let boton= document.querySelectorAll("button")

let valorBoton= ()=>{
    console.log(boton.text)
  }
 


 /*if(boton=== boton.value){
     document.write(`<input placeholder="Ingrese el nuevo ${boton.value}`)
     usuario.${/*valor del boton*/ /* valor del input*/
 

// d) Agregar un botón que permita generar un nuevo usuario.
// e) Agregar un botón que muestre todos los usuarios.
// f) Agregar un botón que permita borrar todos los usuarios.
// g) Agregar un botón que muestre un usuario por nombre.
// h) Agregar un botón que elimine un usuario por nombre.
// i) Agregar un botón que permita agregar nuevos datos a un usuario elegido.
