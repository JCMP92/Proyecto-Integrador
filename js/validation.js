let btnenviar = document.getElementById('btnEnviar');
let idTimeout;

btnenviar.addEventListener('click', function (event) {
  event.preventDefault();
  let inputNombre = document.getElementById('nombre');
  let inputMail = document.getElementById('correo');
  let inputTel = document.getElementById('telefono');
  let inputMensaje = document.getElementById('especificaciones');
  let alertError = document.getElementById('alertError');
  let inputImagen = document.getElementById('imagen');
  let email =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  inputMensaje.value = inputMensaje.value.trim();
  alertError.style.display = 'none';
  alertError.innerHTML = '';
  validos = 0;

  if (inputMensaje.value.trim().replaceAll('  ', '').length < 20) {
    alertError.innerHTML += 'El mensaje debe contener 20 caracteres o mas';
    alertError.style.display = 'block';
    inputMensaje.focus();
    inputMensaje.select();
    inputMensaje.style.border = 'solid red 1px';
  } else {
    inputMensaje.style.border = 'solid green 1px';
    validos++;
  }
  if (inputNombre.value.trim().replaceAll('  ', '').length < 3) {
    alertError.innerHTML += '<br/>El nombre debe contener 3 caracteres o mas';
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
    alertError.innerHTML += '<br/>El correo electronico no es valido.';
    inputMail.style.border = 'solid red 1px';
  } else {
    inputMail.style.border = 'solid green 1px';
    validos++;
  }
  let telefonorex = /^\+52 \d{2} \d{4} \d{4}$/;
  if (inputTel.value.match(telefonorex) == null) {
    alertError.style.display = 'block';
    alertError.innerHTML +=
      '<br/>El formato de telefono no es valido ejemplo: +52 65 6192 0273';
    inputTel.style.border = 'solid red 1px';
  } else {
    inputTel.style.border = 'solid green 1px';
    validos++;
  }
  if (idTimeout != undefined && idTimeout != null) {
    clearTimeout(idTimeout);
  }
  //   tuve que comentar la validación de Image, porque arrojaba un error en la consola ----------------------------------------------------------------------------->
  //   let regex = new RegExp(/[^\s]+(.*?).(jpg|jpeg|png|JPG|JPEG|PNG)$/);
  //   if (inputImagen.value.match(regex) == null) {
  //     alertError.style.display = 'block';
  //     alertError.innerHTML +=
  //       '<br/> El formato de imagen es invalido solo agregar archivos .jpg o .png';
  //     inputImagen.style.border = 'solid red 1px';
  //   } else {
  //     inputImagen.style.border = 'solid green 1px';
  //     validos++;
  //   }

  //if Ternario
  //alertError.innerHTML += (!flexCheckDefault.checked)?"<br/>Debes aceptar los terminos y condiciones":"";

  /*if (!flexCheckDefault.checked){
        alertError.innerHTML += "<br/>Debes aceptar los terminos y condiciones";
    }*/
  if (validos == 4) {
    setTimeout(function () {
      inputMail.style.border = '';
      inputMensaje.style.border = '';
      inputTel.style.border = '';
      inputNombre.style.border = '';
    }, 3000);
    console.log('ready');
    Email.send({
      SecureToken: '7a76b5a8-f99a-4d7e-8bcc-8c238b70f9bd',
      To: 'patspruebaberry@gmail.com',
      From: inputMail.value,
      Subject: 'Pedido',
      Body: inputMensaje.value,
    }).then((message) => alert('E-mail sent'));
  }
}); //JC validaciones
