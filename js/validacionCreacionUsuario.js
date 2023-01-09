let btnenviar = document.getElementById('btnEnviar');
let idTimeout;

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
  let inputPassword= document.getElementById('password');
  let inputMensaje = document.getElementById('especificaciones');
  let alertError = document.getElementById('alertError');
  let inputImagen = document.getElementById('imagen');

  let email =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
  alertError.style.display = 'none';
  alertError.innerHTML = '';
  validos = 0;

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
  let telefonorex = /^\+52 \d{2} \d{4} \d{4}$/;
  if (inputTel.value.match(telefonorex) == null || valicel(inputTel.value) == true) {
    alertError.style.display = 'block';
    alertError.innerHTML +=
      '<br/>El formato de teléfono no es válido ejemplo: +52 65 6192 0273';
    inputTel.style.border = 'solid red 1px';
  } else {
    inputTel.style.border = 'solid green 1px';
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

  //Password
  function checkPasswordStrength(password) {
    // Initialize variables
    let strength = 0;
    let tips = "";
    // Check password length
    if (password.length < 8) {
    tips += "Make the password longer. ";
    } else {
    strength += 1;
    }
    // Check for mixed case
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
    strength += 1;
    } else {
    tips += "Use both lowercase and uppercase letters. ";
    }
    // Check for numbers
    if (password.match(/\d/)) {
    strength += 1;
    } else {
    tips += "Include at least one number. ";
    }
    // Check for special characters
    if (password.match(/[^a-zA-Z\d]/)) {
    strength += 1;
    } else {
    tips += "Include at least one special character. ";
    }
    // Return results
    if (strength < 2) {
    return "Easy to guess. " + tips;
    } else if (strength === 2) {
    return "Medium difficulty. " + tips;
    } else if (strength === 3) {
    return "Difficult. " + tips;
    } else {
    return "Extremely difficult. " + tips;
    }
    }



}); //JC validaciones


        
      


        
