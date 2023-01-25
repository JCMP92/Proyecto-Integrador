let btnenviar = document.getElementById('btnEnviar');
let idTimeout;
let fileImage = document.getElementById('inputImg');
let imageFile = document.getElementById('imageFile');
let preview = document.getElementById('imageFile');
const regexImg = new RegExp(/[^\s]+(.*?).(jpg|jpeg|png|JPG|JPEG|PNG)$/);

let base64 = '';

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

fileImage.addEventListener('change', function () {
  previewFile('inputImg', 'inputFile');
  //previewFile(id imagen, input type file , textArea);
});

//previewFile(id imagen, input type file , textArea);
function previewFile(inputFile, input) {
  let file = document.getElementById(inputFile).files[0];
  let reader = new FileReader();

  reader.addEventListener(
    'load',
    function () {
      document.getElementById(input).value = reader.result;
      preview.src = reader.result;
      base64 = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  } // file
  } // previewFile

btnenviar.addEventListener('click', function (event) {
  event.preventDefault();
  let inputTamano = document.getElementById ('validationCustom04');
  let inputHojas = document.getElementById ('validationCustom05')
  let inputNombre = document.getElementById('nombre');
  let inputMail = document.getElementById('correo');
  let inputTel = document.getElementById('telefono');
  let inputMensaje = document.getElementById('especificaciones');
  let alertError = document.getElementById('alertError');
  let inputImg = document.getElementById('inputImg');
  

  let email =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  inputMensaje.value = inputMensaje.value.trim();
  alertError.style.display = 'none';
  alertError.innerHTML = '';
  validos = 0;

  inputTamano.style.border = 'solid green 3px';
  inputHojas.style.border = 'solid green 3px';

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
  let telefonorex = /^\d{10}$/;
  if (inputTel.value.match(telefonorex) == null || valicel(inputTel.value) == true) {
    alertError.style.display = 'block';
    alertError.innerHTML +=
      '<br/>El formato de teléfono no es válido ejemplo: ';
    inputTel.style.background = '#f8d7da';
    inputTel.style.border = 'solid red 3px';
  } else {
    inputTel.style.background = '#fff';
    inputTel.style.border = 'solid green 3px';
    validos++;
  }
 

  if (inputMensaje.value.trim().replaceAll('  ', '').length < 20) {
    alertError.innerHTML += '<br/>El mensaje debe contener 20 caracteres o más.';
    alertError.style.display = 'block';
    inputMensaje.focus();
    inputMensaje.select();
    inputMensaje.style.background = '#f8d7da';
    inputMensaje.style.border = 'solid red 3px';
  } else {
    inputMensaje.style.background = '#fff';
    inputMensaje.style.border = 'solid green 3px';
    validos++;
  } 

  if (inputImg.value.match(regexImg) == null) {
    alertError.style.display = 'block';
    alertError.innerHTML += '<br/>Tipo inválido de imagen.';
    inputImg.style.background = '#f8d7da';
    inputImg.style.border = 'solid red 3px';
  } else {
    inputImg.style.background = '#fff';
    inputImg.style.border = 'solid green 3px';
    validos++;
  }


  if (idTimeout != undefined && idTimeout != null) {
    clearTimeout(idTimeout);
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
      inputMensaje.value = '';
      inputMensaje.style.border = '';
      inputMensaje.style.background = '#fff';
      inputImg.value = '';
      inputImg.style.background = '#fff';
      inputImg.style.border = '';
      imageFile.style.display = 'none';
      inputTamano.style.border = '';
      inputHojas.style.border = '';
    }, 3000);
    console.log('ready');
    Email.send({
      SecureToken: '7a76b5a8-f99a-4d7e-8bcc-8c238b70f9bd',
      To: 'patspruebaberry@gmail.com',
      From: inputMail.value,
      Subject: 'Pedido',
      Body: inputMensaje.value,
    }).then (Swal.fire('Se ha enviado la cotización con exito.', '', 'success'));
    }
    //focusNombre
   alertError.scrollIntoView();
}); //JC validaciones

