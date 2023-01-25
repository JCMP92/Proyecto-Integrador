let btnenviar = document.getElementById('btnEnviar');
let idTimeout;
let validos = 0;
let base64 = '';
const priceRegex = /^\d+(\.\d{2})?$/;
const regexImg = new RegExp(/[^\s]+(.*?).(jpg|jpeg|png|JPG|JPEG|PNG)$/);
let tabla = document.getElementById('tablaRegistrado');
let cuerpoTabla = tabla.getElementsByTagName('tbody');
let fileImage = document.getElementById('inputImg');
let imageFile = document.getElementById('imageFile');
let preview = document.getElementById('imageFile');

let productosPB = [
  {
    // Nombre de la libreta
    name: 'Libreta Gato Alicia',
    // Precio de la libreta
    price: 200,
    // Descripción de la libreta (tamaño, tipo de hoja, número de hojas, tipo de encuadernación)
    description: 'Libreta cosida, tamaño media carta, 100 hojas rayadas',
    // Ubicación de la imagen de la libreta
    image: '/Images/libretasImg/gatoalicia.jpg',
  },
  {
    // Nombre de la libreta
    name: 'Libreta Girasoles',
    // Precio de la libreta
    price: 200,
    // Descripción de la libreta (tamaño, tipo de hoja, número de hojas, tipo de encuadernación)
    description: 'Libreta de arillo, tamaño media carta, 100 hojas rayadas',
    // Ubicación de la imagen de la libreta
    image: '/Images/libretasImg/girasoles.jpg',
  },
  {
    // Nombre de la libreta
    name: 'Libreta Gravity Falls',
    // Precio de la libreta
    price: 200,
    // Descripción de la libreta (tamaño, tipo de hoja, número de hojas, tipo de encuadernación)
    description: 'Libreta cosida, tamaño media carta, 100 hojas rayadas',
    // Ubicación de la imagen de la libreta
    image: '/Images/libretasImg/gravity.jpg',
  },
  {
    // Nombre de la libreta
    name: 'Libreta Pink Floyd',
    // Precio de la libreta
    price: 200,
    // Descripción de la libreta (tamaño, tipo de hoja, número de hojas, tipo de encuadernación)
    description: 'Libreta de arillo, tamaño media carta, 100 hojas rayadas',
    // Ubicación de la imagen de la libreta
    image: '/Images/libretasImg/pinkfloyd.jpg',
  },
  {
    // Nombre de la libreta
    name: 'Libreta El principito',
    // Precio de la libreta
    price: 200,
    // Descripción de la libreta (tamaño, tipo de hoja, número de hojas, tipo de encuadernación)
    description: 'Libreta cosida, tamaño media carta, 100 hojas rayadas',
    // Ubicación de la imagen de la libreta
    image: '/Images/libretasImg/principito.jpg',
  },
  {
    // Nombre del amigurumi
    name: 'Aguacates',
    // Precio del amigurumi
    price: 300,
    // Descripción
    description: 'Dos aguacates tejidos de 15 cm de altura',
    // Ubicación de la imagen
    image: '/Images/amiguImg/aguacates.jpg',
  },
  {
    // Nombre del amigurumi
    name: 'Conejo Evan',
    // Precio del amigurumi
    price: 200,
    // Descripción
    description: 'Conejo tejido de 15 cm de altura',
    // Ubicación de la imagen
    image: '/Images/amiguImg/conejoEvan.jpg',
  },
  {
    // Nombre del amigurumi
    name: 'Monkey',
    // Precio del amigurumi
    price: 200,
    // Descripción
    description: 'Mono tejido de 15 cm de altura',
    // Ubicación de la imagen
    image: '/Images/amiguImg/monkey.jpg',
  },
  {
    // Nombre del amigurumi
    name: 'Monster Inc',
    // Precio del amigurumi
    price: 250,
    // Descripción
    description:
      'Figuras tejidas de Mike y Sully de Monsters Inc, 15 cm de altura',
    // Ubicación de la imagen
    image: '/Images/amiguImg/monster.jpg',
  },
  {
    // Nombre del amigurumi
    name: 'Spiderman',
    // Precio del amigurumi
    price: 200,
    // Descripción
    description: 'Spiderman tejido de 15 cm de altura',
    // Ubicación de la imagen
    image: '/Images/amiguImg/spiderman.jpg',
  },
];

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
  

  alertError.style.display = 'none';
  alertError.innerHTML = '';
  validos = 0;

  //if General
  if (
    inputNombre.value.trim().replaceAll('  ', '').length < 3 ||
    inputPrice.value.match(priceRegex) == null ||
    inputDescripcion.value.trim().replaceAll('  ', '').length < 20 ||
    validos == 4 ||
    inputImg.value.match(regexImg) == null
  ) {
    //Nombre
    if (inputNombre.value.trim().replaceAll('  ', '').length < 3) {
      alertError.style.display = 'block';
      alertError.innerHTML += 'El nombre debe contener 3 caracteres o más.';
      inputNombre.focus();
      inputNombre.select();
      inputNombre.style.backgroud = '#f8d7da';
      inputNombre.style.border = 'solid red 3px';
    } else {
      inputNombre.style.backgroud = '#fff';
      inputNombre.style.border = 'solid green 3px';
      validos++;
    }

    //Precio
    if (inputPrice.value.match(priceRegex) == null||inputPrice.value<1.00) {
      alertError.style.display = 'block';
      alertError.innerHTML += '<br/>El formato de precio no es válido.';
      inputPrice.style.backgroud = '#f8d7da';
      inputPrice.style.border = 'solid red 3px';
    } else {
      inputPrice.style.backgroud = '#fff';
      inputPrice.style.border = 'solid green 3px';
      validos++;
    }

    //Descripción
    if (inputDescripcion.value.trim().replaceAll('  ', '').length < 20) {
      alertError.innerHTML +=
        '<br/>El mensaje debe contener 20 caracteres o más.';
      alertError.style.display = 'block';
      inputDescripcion.style.backgroud = '#f8d7da';
      inputDescripcion.style.border = 'solid red 3px';
    } else {
      inputDescripcion.style.backgroud = '#fff';
      inputDescripcion.style.border = 'solid green 3px';
      validos++;
    }
    //imagen
    if (inputImg.value.match(regexImg) == null) {
      alertError.innerHTML += '<br/>Tipo inválido de imagen.';
      alertError.style.display = 'block';
      inputImg.style.backgroud = '#f8d7da';
      inputImg.style.border = 'solid red 3px';
    } else {
      inputImg.style.style.backgroud = '#fff';
      inputImg.style.border = 'solid green 3px';
      validos++;
    }

    if (idTimeout != undefined && idTimeout != null) {
      clearTimeout(idTimeout);
    }
    if (validos == 4) {
      setTimeout(function () {
        inputNombre.style.border = '';
        inputNombre.style.backgroud = '#fff';
        inputPrice.style.border = '';
        inputPrice.style.backgroud = '#fff';
        inputDescripcion.style.border = '';
        inputDescripcion.style.backgroud = '#fff';
        inputImg.style.border = '';
        inputImg.style.style.backgroud = '#fff';
      }, 3000);
    }
  } else {
    let elemento = `{
    "name": "${inputNombre.value} ",
    "price": "${inputPrice.value}",
    "description": "${inputDescripcion.value}",
    "inputImg": "${base64}" 
    
    }`;
    Swal.fire('Se ha registro el objeto con exito.', '', 'success')

    productosPB.push(JSON.parse(elemento));
    localStorage.setItem('productosPB', JSON.stringify(productosPB));

    cuerpoTabla[0].innerHTML += `<tr>
    <th> ${inputNombre.value} </th>
    <td> ${inputPrice.value} </td>
    <td> ${inputDescripcion.value} </td>
    </tr> `;

    inputNombre.value = '';
    inputPrice.value = '';
    inputDescripcion.value = '';
    inputImg.value = '';
    preview.src = '';
    inputNombre.focus();
  }
}); //Event listener de btnenviar

window.addEventListener('load', function (event) {
  let tmp = localStorage.getItem('productosPB');
  if (tmp != null) {
    productosPB = JSON.parse(tmp);
    console.log(productosPB);
  } //if
  productosPB.forEach((element) => {
    cuerpoTabla[0].innerHTML += `<tr>
        <th> ${element.name} </th>
        <td> ${element.price} </td>
        <td> ${element.description} </td>
        </tr> `;
  });
});
