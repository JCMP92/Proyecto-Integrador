let btnenviar = document.getElementById('btnEnviar');
let idTimeout;
let datosUsuario = [];


btnenviar.addEventListener('click', function (event) {
  event.preventDefault();
  let inputUsuario = document.getElementById('usuario');
  let inputPassword = document.getElementById('password');
  let alertError = document.getElementById('alertError');
 
  let pass1 = document.getElementById('password');
  let email =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  alertError.style.display = 'none';
  alertError.innerHTML = '';
  validos = 0;

//   if (inputUsuario.value.trim().replaceAll('  ', '').length < 3) {
//     alertError.innerHTML += 'Ingresa un usuario válido.';
//     alertError.style.display = 'block';
//     inputNombre.focus();
//     inputNombre.select();
//     inputNombre.style.border = 'solid red 1px';
//   } else {
//     inputNombre.style.border = 'solid green 1px';
//     validos++;
//   }
  if (inputUsuario.value.match(email) == null && pass1.value.length == 0 ) {
    alertError.style.display = 'block';
    alertError.innerHTML += '<br/>Datos inválidos.';
    inputUsuario.style.border = 'solid red 1px';
    inputPassword.style.border = 'solid red 1px';
  } else {
    inputUsuario.style.border = 'solid green 1px';
    inputPassword.style.border = 'solid green 1px';  
  //Modal
    validos++;
  }
  

  //revisa que los campos de la contraseña coincidan y que los campos no estén vacíos
  // if(pass1.value.length == 0 ){
  //   alertError.style.display = 'block';
  //   alertError.innerHTML += '<br/>La contraseña no es válida';
  //   inputPassword.style.border = 'solid red 1px';
  // } else {
  //   inputPassword.style.border = 'solid green 1px';
  //   validos++;
  // }



  btnenviar.addEventListener('click', function (event) {
    let tmp = localStorage.getItem('datosUsuario');
    if (tmp != null) {
      datosUsuario = JSON.parse(tmp);
      console.log(datosUsuario);
    
    }
  })
})
