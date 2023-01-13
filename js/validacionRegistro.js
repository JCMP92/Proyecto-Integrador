let btnenviar = document.getElementById('btnEnviar');
let idTimeout;
let validos = 0;
let datos = [];
let base64 = '';
const priceRegex = /^\$\d+(\.\d{2})?$/;
const regexImg = new RegExp(/[^\s]+(.*?).(jpg|jpeg|png|JPG|JPEG|PNG)$/);

let tabla = document.getElementById("tablaRegistrado");
let cuerpoTabla = tabla.getElementsByTagName("tbody");
let fileImage = document.getElementById('inputImg');
let imageFile = document.getElementById('imageFile');
let preview= document.getElementById('imageFile');

fileImage.addEventListener('change', function () {
  previewFile('inputImg', 'inputFile');
  //previewFile(id imagen, input type file , textArea);
});

//previewFile(id imagen, input type file , textArea);
function previewFile(inputFile, input) {
  let file = document.getElementById(inputFile).files[0];
  let reader = new FileReader();

  reader.addEventListener(
    'load',
    function () {
      document.getElementById(input).value = reader.result;
      preview.src = reader.result;
      base64 = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  } // file
} // previewFile


btnenviar.addEventListener('click', function (event) {
  event.preventDefault();
  let inputNombre = document.getElementById('name');
  let inputPrice = document.getElementById('price');
  let inputDescripcion = document.getElementById('description');
  let inputImg = document.getElementById('inputImg');
  let alertError = document.getElementById('alertError');
  let alertSuccess= document.getElementById('alertSuccess');
  
  alertSuccess.style.display='none';
  alertSuccess.innerHTML='';

  alertError.style.display = 'none';
  alertError.innerHTML = '';
  validos = 0;

  
  if (
    inputNombre.value.trim().replaceAll('  ', '').length < 3 ||
    inputPrice.value.match(priceRegex) == null ||
    inputDescripcion.value.trim().replaceAll('  ', '').length < 20 ||
    validos == 4 ||
    inputImg.value.match(regexImg) == null
  ) {
    //Nombre
    if (inputNombre.value.trim().replaceAll('  ', '').length < 3) {
      alertError.innerHTML += 'El nombre debe contener 3 caracteres o más.';
      alertError.style.display = 'block';
      inputNombre.focus();
      inputNombre.select();
      inputNombre.style.border = 'solid red 1px';
    } else {
      inputNombre.style.border = 'solid green 1px';
      validos++;
    }

    //Precio
    if (inputPrice.value.match(priceRegex) == null) {
      alertError.style.display = 'block';
      alertError.innerHTML += '<br/>El formato de precio no es válido.';
      inputPrice.style.border = 'solid red 1px';
    } else {
      inputPrice.style.border = 'solid green 1px';
      validos++;
    }

    //Descripción
    if (inputDescripcion.value.trim().replaceAll('  ', '').length < 20) {
      alertError.innerHTML +=
        '<br/>El mensaje debe contener 20 caracteres o más.';
      alertError.style.display = 'block';
      inputDescripcion.focus();
      inputDescripcion.select();
      inputDescripcion.style.border = 'solid red 1px';
    } else {
      inputDescripcion.style.border = 'solid green 1px';
      validos++;
    }
    //imagen
    if (inputImg.value.match(regexImg) == null) {
      alertError.style.display = 'block';
      alertError.innerHTML += '<br/>Tipo inválido de imagen.';
      inputImg.style.border = 'solid red 1px';
    } else {
      inputImg.style.border = 'solid green 1px';
      validos++;
    }

    if (idTimeout != undefined && idTimeout != null) {
      clearTimeout(idTimeout);
    }
    if (validos == 4) {
      setTimeout(function () {
        inputMail.style.border = '';
        inputMensaje.style.border = '';
        inputTel.style.border = '';
        inputNombre.style.border = '';
      }, 3000);
      // console.log('ready');
    }
  } else {
    // console.log('ok');
    let elemento = `{
    "name": "${inputNombre.value} ",
    "price": "${inputPrice.value}",
    "description": "${inputDescripcion.value}",
    "inputImg": "${base64}" 
    
    }`;
    alertSuccess.style.display='block';
      alertSuccess.innerHTML+='<br/>Producto creado con éxito.';
    setTimeout(function () {
      alertSuccess.style.display='none';
      alertSuccess.innerHTML+='';
    }, 3000);
    

    // console.log(elemento);
    datos.push(JSON.parse(elemento));
    // console.log(datos);
    localStorage.setItem('datos', JSON.stringify(datos));
    
    cuerpoTabla[0].innerHTML += `<tr>
    <th> ${inputNombre.value} </th>
    <td> ${inputPrice.value} </td>
    <td> ${inputDescripcion.value} </td>
    </tr> `;  

    inputNombre.value = '';
    inputPrice.value = '';
    inputDescripcion.value = '';
    inputImg.value = '';
    preview.src='';
    // console.log(inputImg.value);
    inputNombre.focus();

   
  }
});
window.addEventListener("load", function(event) {
     
  let tmp= localStorage.getItem("datos");
  if(tmp!=null){
      datos = JSON.parse(tmp);
      console.log(datos);
     
   datos.forEach(element => {
         cuerpoTabla[0].innerHTML += `<tr>
        <th> ${element.name} </th>
        <td> ${element.price} </td>
        <td> ${element.description} </td>
        </tr> `;  
      });

  }//if
} ); 
