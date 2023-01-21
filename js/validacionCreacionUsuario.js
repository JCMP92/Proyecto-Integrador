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
  let telefonorex = /^\+52 \d{10}$/;

  let regex =
    /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

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
      inputNombre.style.background = '#f8d7da';
      inputNombre.style.border = 'solid red 3px';
    } else {
      inputNombre.style.background = '#fff';
      inputNombre.style.border = 'solid green 3px';
      validos++;
    }
    if (inputMail.value.match(email) == null) {
      alertError.style.display = 'block';
      alertError.innerHTML += '<br/>El correo electrónico no es válido.';
      inputMail.style.background = '#f8d7da';
      inputMail.style.border = 'solid red 3px';
    } else {
      inputMail.style.background = '#fff';
      inputMail.style.border = 'solid green 3px';
      validos++;
    }
    if (
      inputTel.value.match(telefonorex) == null ||
      valicel(inputTel.value) == true
    ) {
      alertError.style.display = 'block';
      alertError.innerHTML +=
        '<br/>El formato de teléfono no es válido ejemplo: +52 6561920273';
      inputTel.style.background = '#f8d7da';
      inputTel.style.border = 'solid red 3px';
    } else {
      inputTel.style.background = '#fff';
      inputTel.style.border = 'solid green 3px';
      validos++;
    }
    //revisa que los campos de la contraseña coincidan y que los campos no estén vacíos
    if (pass1.value.length == 0) {
      alertError.style.display = 'block';
      alertError.innerHTML += '<br/>Se requiere una contraseña';
      inputPassword.style.background = '#f8d7da';
      inputPassword.style.border = 'solid red 3px';
    } else if (pass1.value != pass2.value) {
      alertError.style.display = 'block';
      alertError.innerHTML += '<br/>Las contraseñas no coiciden';
      inputPassword.style.background = '#f8d7da';
      inputPassword.style.border = 'solid red 3px';
    } else {
      inputPassword.style.background = '#fff';
      inputPassword.style.border = 'solid green 3px';
      validos++;
    }
    if (pass2.value.length == 0) {
      pass2.style.background = '#f8d7da';
      pass2.style.border = 'solid red 3px';
    } else {
      pass2.style.background = '#fff';
      pass2.style.border = 'solid green 3px';
      validos++;
    }

    
    if (pass1.value.match(regex) == null) {
      alertError.style.display = 'block';
      alertError.innerHTML +=
        '<br/>La contraseña debe contener más de 8 caracteres, un caracter especial (mayúscula, números, símbolos)';
      inputPassword.style.background = '#f8d7da';
      inputPassword.style.border = 'solid red 3px';
    } else {
      inputPassword.style.background = '#fff';
      inputPassword.style.border = 'solid green 3px';
      validos++;
    }

    if (validos == 5) {
      setTimeout(function () {
      inputNombre.value = '';
      inputNombre.style.border = '';
      inputNombre.style.background = '#fff';
      inputMail.value = '';
      inputMail.style.border = '';
      inputMail.style.background = '#fff';
      inputTel.value = '';
      inputTel.style.border = '';
      inputTel.style.background = '#fff';
      inputPassword.value= '';
      inputPassword.style.border = '';
      inputPassword.style.background = '#fff';
      pass2.value= '';
      pass2.style.border = '';
      pass2.style.background = '#fff';
      
    }, 3000);

      console.log('ready');
    }

  } else {
    if (idTimeout != undefined && idTimeout != null) {
      clearTimeout(idTimeout);
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
    inputPassword2.value='';
    inputNombre.focus();

    alertSuccess.style.display = 'block';
    alertSuccess.innerHTML += '<br/>Registro exitoso';
    setTimeout(function () {
      window.location.href = '../html/login.html'; 
      alertSuccess.style.display = 'none';
      alertSuccess.innerHTML += '';
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