let btnenviar = document.getElementById('btnEnviar');
let idTimeout;
let validos = 0;
const priceRegex = /^\$\d+(\.\d{2})?$/;
const regexImg = new RegExp(/[^\s]+(.*?).(jpg|jpeg|png|JPG|JPEG|PNG)$/);
let datos = [];


// //imagen
// function isValidImage(filename) {
//   const allowedExtensions = ['jpg', 'jpeg', 'png'];
//   return allowedExtensions.some((ext) => filename.endsWith(ext));
// }

// if (isValidImage('my-image.jpg')) {
//   // es una imagen válida
// } else {
//   // no es una imagen válida
// } //if

// function isValidImage(filename) {
//   const allowedExtensions = ['jpg', 'jpeg', 'png'];
//   const [, extension] = filename.split('.');
//   return allowedExtensions.includes(extension);
// } //if

// //Descripción
// if (string.length >= 20) {
//   // La cadena tiene al menos 20 caracteres
// } else {
//   // La cadena tiene menos de 20 caracteres
// }
 



btnenviar.addEventListener('click', function (event) {
  event.preventDefault();
  let inputNombre = document.getElementById('name');
  let inputPrice = document.getElementById('price');
  let inputDescripcion = document.getElementById('description');
  let inputImg = document.getElementById('imgproduct');
  let alertError = document.getElementById('alertError');

  alertError.style.display = 'none';
  alertError.innerHTML = '';
  validos = 0;

  if(inputNombre.value.trim().replaceAll('  ', '').length < 3 || inputPrice.value.match(priceRegex) == null || inputDescripcion.value.trim().replaceAll('  ', '').length < 20 || validos == 4 || inputImg.value.match(regexImg)==null ){

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
  if (inputImg.value.match(regexImg)==null) {
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

}else{

  console.log("ok");
  let elemento = `{
    "name": "${inputNombre.value} ",
    "price": "${inputPrice.value}",
    "description": "${inputDescripcion.value}"  
    
    }`;
    console.log(elemento);
    datos .push( JSON.parse(elemento));
    console.log(datos);
    localStorage.setItem("datos", JSON.stringify(datos));
}
});




