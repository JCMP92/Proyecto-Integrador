let btnenviar = document.getElementById('btnEnviar');
let idTimeout;
let datosUsuario = [];

function valicel(numero) {
  // Crear un objeto para almacenar la cantidad de veces que se repite cada dígito
  const digitosRepetidos = {};
  // Recorrer cada dígito del número
  for (const digito of numero) {
    // Si el dígito ya existe en el objeto, aumentar el contador en 1
    if (digitosRepetidos[digito]) {
      digitosRepetidos[digito]++;
    } else {
      // Si el dígito no existe en el objeto, agregarlo con un contador de 1
      digitosRepetidos[digito] = 1;
    }
  }
  // Recorrer cada propiedad del objeto y verificar si su valor es mayor a 3
  for (const digito in digitosRepetidos) {
    if (digitosRepetidos[digito] > 5) {
      return true;
    }
  }
  // Si ningún dígito se repite más de cinco veces, retornar false
  return false;
}


btnenviar.addEventListener('click', function (event) {
  event.preventDefault();
  let inputNombre = document.getElementById('nombre');
  let inputMail = document.getElementById('correo');
  let inputTel = document.getElementById('telefono');
  let inputPassword = document.getElementById('password');
  let alertError = document.getElementById('alertError');
  // let strength = 0;
  // let tips = "";
  let pass1 = document.getElementById('password');
  let pass2 = document.getElementById('password02');
  let email =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let telefonorex = /^\+52 \d{2} \d{4} \d{4}$/;

  let regex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

  alertError.style.display = 'none';
  alertError.innerHTML = '';
  let validos = 0;

  if (inputNombre.value.trim().replaceAll('  ', '').length < 3) {
    alertError.innerHTML += 'El nombre debe contener 3 caracteres o más.';
    alertError.style.display = 'block';
    inputNombre.focus();
    inputNombre.select();
    inputNombre.style.border = 'solid red 1px';
  } else {
    inputNombre.style.border = 'solid green 1px';
    validos++;
  }
  if (inputMail.value.match(email) == null) {
    alertError.style.display = 'block';
    alertError.innerHTML += '<br/>El correo electrónico no es válido.';
    inputMail.style.border = 'solid red 1px';
  } else {
    inputMail.style.border = 'solid green 1px';
    validos++;
  }
  if (inputTel.value.match(telefonorex) == null || valicel(inputTel.value) == true) {
    alertError.style.display = 'block';
    alertError.innerHTML +=
      '<br/>El formato de teléfono no es válido ejemplo: +52 65 6192 0273';
    inputTel.style.border = 'solid red 1px';
  }
  else {
    inputTel.style.border = 'solid green 1px';
    validos++;
  }
  //revisa que los campos de la contraseña coincidan y que los campos no estén vacíos
  if(pass1.value.length == 0 ){
    alertError.style.display = 'block';
    alertError.innerHTML += '<br/>Se requiere una contraseña';
    inputPassword.style.border = 'solid red 1px';
  }else  if (pass1.value != pass2.value) {
    alertError.style.display = 'block';
    alertError.innerHTML += '<br/>Las contraseñas no coiciden';
    inputPassword.style.border = 'solid red 1px';
  } else {
    inputPassword.style.border = 'solid green 1px';
    validos++;
  }
  if(pass1.value.match(regex)== null){
    alertError.style.display = 'block';
    alertError.innerHTML += '<br/>La contraseña debe contener más de 8 caracteres, un caracter especial (mayúscula, números, símbolos)';
    inputPassword.style.border = 'solid red 1px';
  }else{
    inputPassword.style.border = 'solid green 1px';
    pass2.style.border = 'solid green 1px';
    validos++;
  }

  if (idTimeout != undefined && idTimeout != null) {
    clearTimeout(idTimeout);
  }
  if (validos == 5) {
    setTimeout(function () {
      inputMail.style.border = '';
      inputPassword.style.border = '';
      inputTel.style.border = '';
      inputNombre.style.border = '';
    }, 3000);
    console.log('ready');

  } else {
    // console.log('ok');
    let elemento = `{
    "nombre": "${inputNombre.value} ",
    "correo": "${inputMail.value}",
    "telefono": "${inputTel.value}",
    "password": "${inputPassword.value}" 
    }`;
  
    datosUsuario.push(JSON.parse(elemento));
  console.log(datosUsuario);
localStorage.setItem('datosUsuario', JSON.stringify(datosUsuario));
  }
   




//     alertSuccess.style.display = 'block';
//     alertSuccess.innerHTML += '<br/>Producto creado con éxito.';
//     setTimeout(function () {
//       alertSuccess.style.display = 'none';
//       alertSuccess.innerHTML += '';
//     }, 3000);


//     // console.log(elemento);
//     datos.push(JSON.parse(elemento));
//     // console.log(datos);
//     localStorage.setItem('datos', JSON.stringify(datos));

//     inputNombre.value = '';
//     inputPrice.value = '';
//     inputDescripcion.value = '';
//     inputImg.value = '';
//     preview.src = '';
//     // console.log(inputImg.value);
//     inputNombre.focus();










//   }
// });
// window.addEventListener("load", function (event) {

//   let tmp = localStorage.getItem("datos");
//   if (tmp != null) {
//     datos = JSON.parse(tmp);
//     console.log(datos);

//     datos.forEach(element => {
//       cuerpoTabla[0].innerHTML += `<tr>
//         <th> ${element.name} </th>
//         <td> ${element.price} </td>
//         <td> ${element.description} </td>
//         </tr> `;
//     });

//   }//if





}); //JC validaciones
