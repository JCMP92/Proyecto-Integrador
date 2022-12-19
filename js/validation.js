let inputNombre = document.getElementById('nombre');
let inputMail = document.getElementById('email');
let inputTel = document.getElementById('telefono');
let inputMensaje = document.getElementById('especificaciones');
let btnEnviar = document.getElementById('enviar');

// function validarNombre() {
//     let regex = /^[A-Za-z]+$/;
//     if (inputNombre.value.match(regex)){
//         console.log(true)
//         return inputNombre.value.length >= 2 ? true : false;
//     }
// } //validarNombre

function validarNombre(name) {
  let regex = /^[a-zA-Z\s]*$/;
  if (name.match(regex)) {
    console.log('valid name');
    return name.length >= 3 ? true : false;
  } else {
    console.log('not a valid name');
  }
} //validarNombre


let alertError = document.getElementById("alertError");
function fileValidation() {
    let fileInput =
        document.getElementById('file');
     
    let filePath = fileInput.value;
 
    // Allowing file type
    let allowedExtensions =
/(\.jpg|\.png|)$/i;
     
    if (!allowedExtensions.exec(filePath)) {
        
        alert('Archivo invalido por favor sube un archivo valido .png, .pdf, .jpg');
        fileInput.value = '';
        return false;
    }
};// validacion imagen


function ValidationForm() {
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

  //Ejercicios Strings
let btnenviar = document.getElementById("btnEnviar");
let idTimeout;

btnenviar.addEventListener("click", function(event){
    event.preventDefault();
    let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let exampleFormControlInput1 = document.getElementById("exampleFormControlInput1");
    let exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1");
    let alertError = document.getElementById("alertError");
    let flexCheckDefault = document.getElementById("flexCheckDefault");
    let exampleFormControlInput2 = document.getElementById("exampleFormControlInput2")
    exampleFormControlTextarea1.value = exampleFormControlTextarea1.value.trim();
    alertError.style.display="none";
    alertError.innerHTML="";
    validos=0;

    if (exampleFormControlTextarea1.value.trim().replaceAll("  ","").length < 20){
        alertError.innerHTML = "El mensaje debe contener 20 caracteres o mas";
        alertError.style.display="block";
        exampleFormControlTextarea1.focus();
        exampleFormControlTextarea1.select();
    }else{
        exampleFormControlTextarea1.style.border = "solid green 1px";
        validos++;}

    if (exampleFormControlInput1.value.match(email) == null){
        alertError.style.display="block";
        alertError.innerHTML += "<br/>El correo electronico no es valido.";
    }else{
        exampleFormControlInput1.style.border = "solid green 1px";
        validos++;}
    let RFCRegex = /^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$/;
    if (exampleFormControlInput2.value.match(RFCRegex) == null){
        alertError.style.display="block";
        alertError.innerHTML += "<br/>El RFC no es valido.";
    }else{
        exampleFormControlInput2.style.border = "solid green 1px";
        validos++;
    }
    if ((idTimeout != undefined) && (idTimeout!=null)){
        clearTimeout(idTimeout);
    }
    //if Ternario
    alertError.innerHTML += (!flexCheckDefault.checked)?"<br/>Debes aceptar los terminos y condiciones":"";

    /*if (!flexCheckDefault.checked){
        alertError.innerHTML += "<br/>Debes aceptar los terminos y condiciones";
    }*/
    if (validos == 3){
        setTimeout(function(){
            exampleFormControlInput1.style.border ="";
            exampleFormControlInput2.style.border="";
            exampleFormControlTextarea1.style.border="";
        }, 3000);
    }
});//JC validaciones