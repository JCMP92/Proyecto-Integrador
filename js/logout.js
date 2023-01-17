let logoutbtn = document.getElementById('btnLogout');
let logoutbtnMob = document.getElementById('btnLogoutMob');
let loginbtn = document.getElementById('bntLogin');
let loginbtnMob = document.getElementById('bntLoginMob');

//Boolean login
let isLogged = sessionStorage.getItem('currentUser');
console.log(isLogged);
let loged = isLogged ? true : false;
console.log(loged);

if (!isLogged) {
  logoutbtn.style.display = 'none';
  logoutbtnMob.style.display = 'none';
} else if (isLogged) {
  loginbtn.style.display = 'none';
  loginbtnMob.style.display = 'none';
}

function logout() {
  sessionStorage.removeItem('currentUser');
  exampleModal.style.display;
  window.location.href = '../index.html';
}

logoutbtn.addEventListener('click', function (e) {
  e.preventDefault;
  logout();
});

logoutbtnMob.addEventListener('click', function (e) {
  e.preventDefault;
  logout();
});
