let btnenviar = document.getElementById('btnEnviar');
let idTimeout;
let validos = 0;
let datos = [];
let base64 = '';
const priceRegex = /^\$\d+(\.\d{2})?$/;
const regexImg = new RegExp(/[^\s]+(.*?).(jpg|jpeg|png|JPG|JPEG|PNG)$/);

let fileImage = document.getElementById('inputImg');
let imageFile = document.getElementById('imageFile');

fileImage.addEventListener('change', function () {
  previewFile('imageFile', 'inputImg', 'inputFile');
  //previewFile(id imagen, input type file , textArea);
});

//previewFile(id imagen, input type file , textArea);
function previewFile(img, inputFile, input) {
  var preview = document.getElementById(img);
  var file = document.getElementById(inputFile).files[0];
  var reader = new FileReader();

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
  let inputNombre = document.getElementById('name');
  let inputPrice = document.getElementById('price');
  let inputDescripcion = document.getElementById('description');
  let inputImg = document.getElementById('inputImg');
  let alertError = document.getElementById('alertError');

  alertError.style.display = 'none';
  alertError.innerHTML = '';
  validos = 0;

  if (
    inputNombre.value.trim().replaceAll('  ', '').length < 3 ||
    inputPrice.value.match(priceRegex) == null ||
    inputDescripcion.value.trim().replaceAll('  ', '').length < 20 ||
    validos == 4 ||
    inputImg.value.match(regexImg) == null
  ) {
    //Nombre
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

    //Precio
    if (inputPrice.value.match(priceRegex) == null) {
      alertError.style.display = 'block';
      alertError.innerHTML += '<br/>El formato de precio no es válido.';
      inputPrice.style.border = 'solid red 1px';
    } else {
      inputPrice.style.border = 'solid green 1px';
      validos++;
    }

    //Descripción
    if (inputDescripcion.value.trim().replaceAll('  ', '').length < 20) {
      alertError.innerHTML +=
        '<br/>El mensaje debe contener 20 caracteres o más.';
      alertError.style.display = 'block';
      inputDescripcion.focus();
      inputDescripcion.select();
      inputDescripcion.style.border = 'solid red 1px';
    } else {
      inputDescripcion.style.border = 'solid green 1px';
      validos++;
    }
    //imagen
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
      console.log('ready');
    }
  } else {
    console.log('ok');
    let elemento = `{
    "name": "${inputNombre.value} ",
    "price": "${inputPrice.value}",
    "description": "${inputDescripcion.value}",
    "inputImg": "${base64}" 
    
    }`;
    console.log(elemento);
    datos.push(JSON.parse(elemento));
    console.log(datos);
    localStorage.setItem('datos', JSON.stringify(datos));
  }
});
