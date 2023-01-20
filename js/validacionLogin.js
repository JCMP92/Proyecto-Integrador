let btnenviar = document.getElementById('btnEnviar');
let btnregistrar = document.getElementById('btnEnviar02');
let idTimeout;
let datosUsuario = [];
let validos = 0;
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
  
  if (inputUsuario.value.match(email) == null || pass1.value.length == 0) {
    alertError.style.display = 'block';
    alertError.innerHTML += 'Datos inválidos. Por favor rellene ambos campos';
    inputUsuario.style.border = 'solid red 1px';
    inputPassword.style.border = 'solid red 1px';
  }
else{
  alertError.style.display = 'block';
  inputUsuario.style.border = 'solid red 1px';
    inputPassword.style.border = 'solid red 1px';
    alertError.innerHTML += 'Usuario o contraseña incorrectos.';
 }
    //Modal
  

  function login(username, password) {
    let users = JSON.parse(localStorage.getItem('datosUsuario'));
    for (let i = 0; i < users.length; i++) {
      if (users[i].correo == username && users[i].password == password) {
        validos++;
        alertError.style.display = 'none';
        alertError.innerHTML += '';
        inputUsuario.style.border = 'solid green 1px';
        inputPassword.style.border = 'solid green 1px';
        sessionStorage.setItem('currentUser', username);
        alertSuccess.style.display = 'block';
        alertSuccess.innerHTML += '<br/>Se realizo el inicio de sesion con exito.';
        setTimeout(() => {
          window.location.href = '../index.html'; 
        }, 2000);
        return;
      } 
    }
    
  }
  let tmp = localStorage.getItem('datosUsuario');
  if (tmp != null) {
    datosUsuario = JSON.parse(tmp);
    let inputUsuario = document.getElementById('usuario');
    let inputPassword = document.getElementById('password');
    login(inputUsuario.value, inputPassword.value);
  }
});
btnregistrar.addEventListener('click', function (event) {
  event.preventDefault();
  window.location.href = '../html/Registro.html'; 
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
