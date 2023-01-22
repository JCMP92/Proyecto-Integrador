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

window.addEventListener('load', function (event) {
  let tmp = localStorage.getItem('productosPB');
  if (tmp != null) {
    productosPB = JSON.parse(tmp);
    console.log(productosPB);
  } //if

  productosPB.forEach((producto) => {
    addItem(producto);
  });
});

function addItem(item) {
  let imgSrc = item.image;
  if(item.inputImg) {
    imgSrc = item.inputImg;
  }
  const itemHTML = `<div class="card" id="${item.name
    .toLowerCase()
    .replace(/ /g, '-')}"> 
         <img src=${imgSrc} class="card-img-top" alt="image">
          <div class="card-body" >
              <h5 class="card-title">${item.name}</h5>
                <p class="card-price">$ ${item.price} MXN</p>
              <p class="card-text">${item.description}</p>
              <a href="#" class="btn btn-primary">Añadir</a>
          </div>
      </div>`;
  const itemsContainer = document.getElementById('list-items');
  itemsContainer.insertAdjacentHTML('beforeend', itemHTML);
}

