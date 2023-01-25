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

  let pass1 = document.getElementById('password');
  let email =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  alertError.style.display = 'none';
  alertError.innerHTML = '';
  
  if (inputUsuario.value.match(email) == null || pass1.value.length == 0) {
    alertError.style.display = 'block';
    alertError.innerHTML += 'Datos inválidos. Por favor rellene ambos campos';
    inputUsuario.style.background = '#f8d7da';
    inputUsuario.style.border = 'solid red 3px';
    inputPassword.style.background = '#f8d7da';
    inputPassword.style.border = 'solid red 3px';
  }
else{
    alertError.style.display = 'block';
    alertError.innerHTML += 'Datos inválidos. Por favor rellene ambos campos.';
    inputUsuario.style.background = '#f8d7da';
    inputUsuario.style.border = 'solid red 3px';
    inputPassword.style.background = '#f8d7da';
    inputPassword.style.border = 'solid red 3px';
    
 }
    //Modal
  

  function login(username, password) {
    let users = JSON.parse(localStorage.getItem('datosUsuario'));
    for (let i = 0; i < users.length; i++) {
      if (users[i].correo == username && users[i].password == password) {
        validos++;
        alertError.style.display = 'none';
        alertError.innerHTML += '';
        inputUsuario.style.background = '#fff';
        inputUsuario.style.border = 'solid green 3px';
        inputPassword.style.background = '#fff';
        inputPassword.style.border = 'solid green 3px';
        sessionStorage.setItem('currentUser', username);
        Swal.fire('Se ha iniciado sesión con exito.', '', 'success')
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
