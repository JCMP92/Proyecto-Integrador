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
  let inputTamano = document.getElementById('validationCustom04');
  let inputNombre = document.getElementById('nombre');
  let inputMail = document.getElementById('correo');
  let inputTel = document.getElementById('telefono');
  let inputMensaje = document.getElementById('especificaciones');
  let alertError = document.getElementById('alertError');
  let inputImg = document.getElementById('inputImg');
  let alertSuccess = document.getElementById('alertSuccess');

  let email =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  inputMensaje.value = inputMensaje.value.trim();
  alertError.style.display = 'none';
  alertError.innerHTML = '';
  validos = 0;

  inputTamano.style.border = 'solid green 1px';

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
  let telefonorex = /^\+52 \d{10}$/;
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

  if (inputMensaje.value.trim().replaceAll('  ', '').length < 20) {
    alertError.innerHTML +=
      '<br/>El mensaje debe contener 20 caracteres o más.';
    alertError.style.display = 'block';
    inputMensaje.focus();
    inputMensaje.select();
    inputMensaje.style.border = 'solid red 1px';
  } else {
    inputMensaje.style.border = 'solid green 1px';
    validos++;
  }

  if (inputImg.value.match(regexImg) == null) {
    alertError.style.display = 'block';
    alertError.innerHTML += '<br/>Tipo inválido de imagen.';
    inputImg.style.border = 'solid red 1px';
  } else {
    inputImg.style.border = 'solid green 1px';
    validos++;
  }

  if (idTimeout != undefined && idTimeout != null) {
    clearTimeout(idTimeout);
  }
  if (validos == 4) {
    setTimeout(function () {
      inputMail.style.border = '';
      inputMensaje.style.border = '';
      inputTel.style.border = '';
      inputNombre.style.border = '';
    }, 3000);
  }

  if (idTimeout != undefined && idTimeout != null) {
    clearTimeout(idTimeout);
  }

  if (validos == 5) {
    setTimeout(function () {
      inputMail.style.border = '';
      inputMensaje.style.border = '';
      inputTel.style.border = '';
      inputNombre.style.border = '';
    }, 3000);
    console.log('ready');

    function sendMail() {
      let params = {
        name: inputNombre.value,
        email: inputMail.value,
        message: `Especificaciones: ${inputMensaje.value}`,
      };
      const serviceId = 'service_e0jnp5r';
      const templateId = 'template_eebgs5k';

      emailjs.send(serviceId, templateId, params).then((res) => {
        document.getElementById('nombre').value = '';
        document.getElementById('correo').value = '';
        document.getElementById('especificaciones').value = '';
        console.log(res);
        console.log('message sent');
      });
    }

    sendMail();

    alertSuccess.style.display = 'block';
    alertSuccess.innerHTML += '<br/>Cotización enviada con éxito.';
    setTimeout(function () {
      alertSuccess.style.display = 'none';
      alertSuccess.innerHTML += '';
    }, 3000);
  }
}); //JC validaciones
