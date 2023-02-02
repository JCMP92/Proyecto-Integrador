let btnenviar = document.getElementById('btnEnviar');
let idTimeout;
let datosUsuario = [];
let validos = 0;

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
  let inputPassword2 = document.getElementById('password02');
  let alertError = document.getElementById('alertError');
  let alertSuccess = document.getElementById('alertSuccess');
  let pass1 = document.getElementById('password');
  let pass2 = document.getElementById('password02');
  let email =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let telefonorex = /^\d{10}$/;

  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  alertError.style.display = 'none';
  alertError.innerHTML = '';

  if (
    inputNombre.value.trim().replaceAll('  ', '').length < 3 ||
    inputMail.value.match(email) == null ||
    inputTel.value.match(telefonorex) == null ||
    valicel(inputTel.value) == true ||
    pass1.value.length == 0 ||
    pass1.value != pass2.value ||
    pass1.value.match(regex) == null
  ) {
    alertSuccess.innerHTML += ''; //Previene la aparicion de alerta de Success si alguno de los campos es inválido

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
    if (
      inputTel.value.match(telefonorex) == null ||
      valicel(inputTel.value) == true
    ) {
      alertError.style.display = 'block';
      alertError.innerHTML +=
        '<br/>El formato de teléfono no es válido ejemplo: +52 6561920273';
      inputTel.style.border = 'solid red 1px';
    } else {
      inputTel.style.border = 'solid green 1px';
      validos++;
    }
    //revisa que los campos de la contraseña coincidan y que los campos no estén vacíos
    if (pass1.value.length == 0) {
      alertError.style.display = 'block';
      alertError.innerHTML += '<br/>Se requiere una contraseña';
      inputPassword.style.border = 'solid red 1px';
    } else if (pass1.value != pass2.value) {
      alertError.style.display = 'block';
      alertError.innerHTML += '<br/>Las contraseñas no coiciden';
      inputPassword.style.border = 'solid red 1px';
    } else {
      inputPassword.style.border = 'solid green 1px';
      validos++;
    }
    if (pass1.value.match(regex) == null) {
      alertError.style.display = 'block';
      alertError.innerHTML +=
        '<br/>La contraseña debe contener más de 8 caracteres, un caracter especial (mayúscula, números, símbolos)';
      inputPassword.style.border = 'solid red 1px';
      console.log(pass1.value);
      console.log(pass2.value);
      console.log(pass1.value.match(regex));
    } else {
      inputPassword.style.border = 'solid green 1px';
      pass2.style.border = 'solid green 1px';
      validos++;
    }
  } else {
    if (idTimeout != undefined && idTimeout != null) {
      clearTimeout(idTimeout);
    }

    if (validos == 5) {
      inputMail.style.border = '';
      inputPassword.style.border = '';
      inputTel.style.border = '';
      inputNombre.style.border = '';

      console.log('ready');
    }

    let elemento = `{
    "nombre": "${inputNombre.value} ",
    "correo": "${inputMail.value}",
    "telefono": "${inputTel.value}",
    "password": "${inputPassword.value}" 
    }`;

    datosUsuario.push(JSON.parse(elemento));
    console.log(datosUsuario);
    localStorage.setItem('datosUsuario', JSON.stringify(datosUsuario));

    inputMail.value = '';
    inputPassword.value = '';
    inputTel.value = '';
    inputNombre.value = '';
    inputPassword2.value = '';
    inputNombre.focus();
    Swal.fire('Se ha creado el usuario con éxito.', '', 'success');

    setTimeout(function () {
      window.location.href = '../html/login.html';
    }, 1500);
  }
}); //JC validaciones

window.addEventListener('load', function () {
  let tmp = localStorage.getItem('datosUsuario');
  if (tmp != null) {
    datosUsuario = JSON.parse(tmp);
    console.log(datosUsuario);
  } //if
});
