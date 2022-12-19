/*let inputNombre = document.getElementById('nombre');
let inputMail = document.getElementById('correo');
let inputTel = document.getElementById('telefono');
let inputMensaje = document.getElementById('especificaciones');
let alertError = document.getElementById("alertError");
*/
let btnenviar = document.getElementById("btnEnviar");
let idTimeout;


// function validarNombre() {
//     let regex = /^[A-Za-z]+$/;
//     if (inputNombre.value.match(regex)){
//         console.log(true)
//         return inputNombre.value.length >= 2 ? true : false;
//     }
// } //validarNombre

/*function validarNombre(name) {
  let regex = /^[a-zA-Z\s]*$/;
  if (name.match(regex)) {
    console.log('valid name');
    return name.length >= 3 ? true : false;
  } else {
    console.log('not a valid name');
  }
} //validarNombre
*/



/*function ValidationForm() {
    let username = document.forms["RegForm"]["Name"];
    let email = document.forms["RegForm"]["Email"];
    let phoneNumber = document.forms["RegForm"]["Telephone"];
    let select = document.forms["RegForm"]["Subject"];
    let pass = document.forms["RegForm"]["Password"];
    if (username.value == "") {
      alert("Please enter your name.");
      username.focus();
      return false;
    }
    if (email.value == "") {
      alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
    }
    if (email.value.indexOf("@", 0) < 0) {
      alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
    }
    if (email.value.indexOf(".", 0) < 0) {
      alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
    }
    if (phoneNumber.value == "") {
      alert("Please enter your telephone number.");
      phoneNumber.focus();
      return false;
    }
    if (pass.value == "") {
      alert("Please enter your password");
      pass.focus();
      return false;
    }
    if (select.selectedIndex < 1) {
      alert("Please enter your course.");
      select.focus();
      return false;
    }
    return true;
  };// validaciones internet
*/
  //Ejercicios Strings

btnenviar.addEventListener("click", function(event){
    event.preventDefault();
  let inputNombre = document.getElementById('nombre');
  let inputMail = document.getElementById('correo');
  let inputTel = document.getElementById('telefono');
  let inputMensaje = document.getElementById('especificaciones');
  let alertError = document.getElementById("alertError");
  let inputImagen = document.getElementById("imagen");
  let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  

  
  
  inputMensaje.value = inputMensaje.value.trim();
  alertError.style.display = "none";
  alertError.innerHTML = "";
  validos = 0;

    if (inputMensaje.value.trim().replaceAll("  ","").length < 20){
        alertError.innerHTML = "El mensaje debe contener 20 caracteres o mas";
        alertError.style.display="block";
        inputMensaje.focus();
        inputMensaje.select();
    }else{
        inputMensaje.style.border = "solid green 1px";
        validos++;}
    if (inputNombre.value.trim().replaceAll("  ","").length < 3){
          alertError.innerHTML = "El nombre debe contener 3 caracteres o mas";
          alertError.style.display="block";
          inputNombre.focus();
          inputNombre.select();
    }else{
          inputNombre.style.border = "solid green 1px";
          validos++;}
      

    if (inputMail.value.match(email) == null){
        alertError.style.display="block";
        alertError.innerHTML += "<br/>El correo electronico no es valido.";
    }else{
        inputMail.style.border = "solid green 1px";
        validos++;}
    let telefonorex = /^\+52 \d{2} \d{4} \d{4}$/;
    if (inputTel.value.match(telefonorex) == null){
        alertError.style.display="block";
        alertError.innerHTML += "<br/>El formato de telefono no es valido ejemplo: +52 65 6192 0273";
    }else{
        inputTel.style.border = "solid green 1px";
        validos++;
    }
    if ((idTimeout != undefined) && (idTimeout!=null)){
        clearTimeout(idTimeout);
    }
 
    // Allowing file type
    let regex = new RegExp(/[^\s]+(.*?).(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/);
    if (inputImagen.value.match(regex) == null) {
      alertError.style.display="block";
      alertError.innerHTML += "<br/> El formato de imagen es invalido solo agregar archivos .jpg o .png"
    }else{
      inputImagen.style.border = "solid green 1px";
      validos++;
    }
    //if Ternario
    //alertError.innerHTML += (!flexCheckDefault.checked)?"<br/>Debes aceptar los terminos y condiciones":"";

    /*if (!flexCheckDefault.checked){
        alertError.innerHTML += "<br/>Debes aceptar los terminos y condiciones";
    }*/
    if (validos == 5){
        setTimeout(function(){
            inputMail.style.border ="";
            inputMensaje.style.border="";
            inputTel.style.border="";
            inputNombre.style.border="";
        }, 3000);
    }
});//JC validaciones