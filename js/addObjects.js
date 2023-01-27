let carritoPB = [];
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
  if (item.inputImg) {
    imgSrc = item.inputImg;
  }

  const itemCard = document.createElement('div');
  const itemImg = document.createElement('img');
  const itemBody = document.createElement('div');
  const itemTilte = document.createElement('h5');
  const itemPrice = document.createElement('p');
  const itemDescr = document.createElement('p');
  const addBtn = document.createElement('button');

  itemCard.setAttribute(
    'id',
    `${item.name.toLowerCase().trim().replace(/ /g, '-')}`
  );
  itemCard.classList.add('card');
  itemImg.classList.add('card-img-top');
  itemBody.classList.add('card-body');
  itemTilte.classList.add('card-title');
  itemPrice.classList.add('card-price');
  itemDescr.classList.add('card-text');
  addBtn.classList.add('btn', 'btn-primary', 'btnTienda');

  itemImg.src = `${imgSrc}`;
  itemTilte.textContent = `${item.name}`;
  itemPrice.textContent = `$ ${item.price} MXN`;
  itemDescr.textContent = `${item.description}`;
  addBtn.textContent = 'Añadir';

  // Event Listeners -------------------------------------------------------------------->
  addBtn.addEventListener('click', function (e) {
    e.preventDefault;
    console.log(e.target.parentNode.parentNode.id);

    let itemToCart = `{
    "name": "${itemTilte.textContent}",
    "price": "${itemPrice.textContent}",
    "description": "${itemDescr.textContent}",
    "inputImg": "${imgSrc}" 
    }`;

    carritoPB.push(JSON.parse(itemToCart));
    localStorage.setItem('carritoPB', JSON.stringify(carritoPB));
    
    
    Toast.fire({
      icon: 'success',
      title: '¡Agregado al carrito!'
    });
  });

  itemBody.append(itemTilte);
  itemBody.append(itemPrice);
  itemBody.append(itemDescr);
  itemBody.append(addBtn);

  itemCard.append(itemImg);
  itemCard.append(itemBody);

  const itemsContainer = document.getElementById('list-items');
  itemsContainer.append(itemCard);
}

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

