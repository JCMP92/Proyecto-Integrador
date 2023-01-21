let btnenviar = document.getElementById('btnEnviar');
let idTimeout;
let datosUsuario = [];
let temp = localStorage.getItem('datosUsuario');

btnenviar.addEventListener('click', function (event) {
  event.preventDefault();
  let inputUsuario = document.getElementById('usuario');
  let inputPassword = document.getElementById('password');
  let alertError = document.getElementById('alertError');
  let alertSuccess = document.getElementById('alertSuccess');
  let pass1 = document.getElementById('password');
  let email =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  alertError.style.display = 'none';
  alertError.innerHTML = '';
  alertSuccess.style.display = 'none';
  alertSuccess.innerHTML = '';
  validos = 0;

  if(inputUsuario.value == "" || inputPassword.value == ""){
    alertError.style.display = 'block';
    alertError.innerHTML += '<br/>Por favor llene los campos vacíos.';
    inputUsuario.style.border = 'solid red 1px';
    inputPassword.style.border = 'solid red 1px';
  }else if (
    inputUsuario.value.match(email) == null && pass1.value.length == 0
    ) {
    alertError.style.display = 'block';
    alertError.innerHTML += '<br/>Datos inválidos.';
    inputUsuario.style.border = 'solid red 1px';
    inputPassword.style.border = 'solid red 1px';
  } else if(temp == null){
    alertError.style.display = 'block';
    alertError.innerHTML += '<br/>El correo o contraseña no es válido.';
    inputUsuario.style.border = 'solid red 1px';
    inputPassword.style.border = 'solid red 1px';
  }else{
    inputUsuario.style.border = 'solid green 1px';
    inputPassword.style.border = 'solid green 1px';
    validos++;

    function login(username, password) {
      let users = JSON.parse(localStorage.getItem('datosUsuario'));
      let match = false;
      for (let i = 0; i < users.length; i++) {
        if (users[i].correo == username && users[i].password == password) {
          match = true;
          sessionStorage.setItem('currentUser', username);
          alertSuccess.style.display = 'block';
          alertSuccess.innerHTML += '<br/>Se realizo el inicio de sesión con éxito.';
          setTimeout(() => {
            window.location.href = '../index.html'; 
          }, 2000);
          return;
        } 
      }
      if (!match) {
        alertError.style.display = 'block';
        alertError.innerHTML += '<br/>Usuario o contraseña incorrectos.';
        inputUsuario.style.border = 'solid red 1px';
        inputPassword.style.border = 'solid red 1px';
      }
    }
    login(inputUsuario.value, inputPassword.value);
  }
});