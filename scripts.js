console.log("conexión ok")

const nombre=document.getElementById("nombre");
const apellido= document.getElementById("apellido");
const correo= document.getElementById("correo").value;

let valorTicket = 200;

const $categoria= document.getElementById("categoriaOpcion");
const $cantidad=document.getElementById("cantidad");
const botonResumen=document.getElementById("botonResumen");
const $totalPago=document.getElementById("totalPago");


botonResumen.addEventListener("click", totalPagar);

//calcular la función totalPagar

function totalPagar(){
    const categoria = $categoria.value;
    const cantidad = $cantidad.value;
   console.log(categoria);

    let  valorTotal= valorTicket*cantidad
    console.log(valorTotal)
   
    if (categoria === "1") {
        valorTotal= valorTotal
       
    } else if (categoria === "2") {
        valorTotal= valorTotal*0.2;        
    }
    else if(categoria === "3"){
        valorTotal = valorTotal * 0.5;
    }
    else if(categoria === "4"){
        valorTotal= valorTotal*0.85;          
    }
    else if( categoria === "0"){
    window.alert("Debe seleccionar categoría");
    }

    $totalPago.innerHTML="Total a Pagar $" + valorTotal;
}

botonBorrar.addEventListener("click", limpiarFormulario);    
function limpiarFormulario() {
    document.getElementById("formulario").reset();
    $totalPago.innerHTML="Total a Pagar $";
  }
    




// const pMensajeNombre = document.getElementById("mensajeNombre");

// const pMensajeEmail = document.getElementById("mensajeEmail");



// const expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/


// function validarNombre() {
//     if (nombre.value.length < 3) {
//         pMensajeNombre.innerHTML = "Ingrese un nombre válido";
//     }
  
// }
// function validarApellido() {
//     if  (apellido.value.length < 2) {
//         pMensajeApellido.innerHTML = "Ingrese un apellido válido";
//     }
// }

// botonResumen.addEventListener("click", validarNombre);

// botonResumen.addEventListener("click", validarEmail);

// //function validarEmail() {
//  //   if (!expRegular.test(correo.value)) {
//    //     pMensajeEmail.innerHTML = "El email no es valido";
//     //}
//     //else {
//    //     pMensajeEmail.innerHTML = "Email correcto";
//     //}
// //}
// console.log(totalPagar);