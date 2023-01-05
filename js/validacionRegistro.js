let btnenviar = document.getElementById('btnEnviar');
let inputImagen = document.getElementById('imagen');
let inputNombre = document.getElementById('nombre');

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
  function validatePrice(price) {
    const regex = /^\$\d+(\.\d{2})?$/;
    return regex.test(price);
  }
  
  console.log(validatePrice('$12.34')); // true
  console.log(validatePrice('$12')); // true
  console.log(validatePrice('$12.345')); // false
  console.log(validatePrice('12.34')); // false

//imagen
  function isValidImage(filename) {
    const allowedExtensions = ['jpg', 'jpeg', 'png'];
    return allowedExtensions.some(ext => filename.endsWith(ext));
  }

  if (isValidImage('my-image.jpg')) {
    // es una imagen válida
  } else {
    // no es una imagen válida
  }//if

  function isValidImage(filename) {
    const allowedExtensions = ['jpg', 'jpeg', 'png'];
    const [, extension] = filename.split('.');
    return allowedExtensions.includes(extension);
  }//if

  //Descripción 
  if (string.length >= 20) {
    // La cadena tiene al menos 20 caracteres
  } else {
    // La cadena tiene menos de 20 caracteres
  }