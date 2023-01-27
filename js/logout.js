let logoutbtn = document.getElementById('btnLogout');
let logoutbtnMob = document.getElementById('btnLogoutMob');
let loginbtn = document.getElementById('bntLogin');
let loginbtnMob = document.getElementById('bntLoginMob');
let bntCreateAc = document.getElementById('bntCreateAc');
let bntCreateAcMob = document.getElementById('bntCreateAcMob');
// let exampleModal = document.getElementById('exampleModal');

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
  bntCreateAc.style.display = 'none';
  bntCreateAcMob.style.display = 'none';
}

function logout() {
  sessionStorage.removeItem('currentUser');
  exampleModal.style.display;
}

logoutbtn.addEventListener('click', function (e) {
  e.preventDefault;
  logout();
  setTimeout(() => {
    window.location.href = '../index.html';
  }, 1500);
});

logoutbtnMob.addEventListener('click', function (e) {
  e.preventDefault;
  logout();
  setTimeout(() => {
    window.location.href = '../index.html';
  }, 1500);
});
