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

  if (inputUsuario.value.match(email) == null && pass1.value.length == 0) {
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

  function login(username, password) {
    let users = JSON.parse(localStorage.getItem('datosUsuario'));
    for (let i = 0; i < users.length; i++) {
      if (users[i].correo == username && users[i].password == password) {
        sessionStorage.setItem('currentUser', username);
        window.location.href = '../index.html';
        return;
      }
    }
    alertError.innerHTML += '<br/>Usuario o contraseña incorrectos.';
  }

  let tmp = localStorage.getItem('datosUsuario');
  if (tmp != null) {
    datosUsuario = JSON.parse(tmp);
    let inputUsuario = document.getElementById('usuario');
    let inputPassword = document.getElementById('password');

    login(inputUsuario.value, inputPassword.value);
  }
});

// btnenviar.addEventListener('click', function (event) {
//   event.preventDefault;
//   let tmp = localStorage.getItem('datosUsuario');
//   if (tmp != null) {
//     datosUsuario = JSON.parse(tmp);
//     let inputUsuario = document.getElementById('usuario');
//     let inputPassword = document.getElementById('password');

//     login(inputUsuario.value, inputPassword.value);

//     // console.log(datosUsuario[0].correo);
//     // console.log(datosUsuario[0].password);
//   }
// });
