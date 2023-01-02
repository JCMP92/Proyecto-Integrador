//Objetos Libreta
const libreta01 = {
  // Nombre de la libreta
  name: 'Libreta Gato Alicia',
  // Precio de la libreta
  price: 200,
  // Descripción de la libreta (tamaño, tipo de hoja, número de hojas, tipo de encuadernación)
  description: 'Libreta cosida, tamaño media carta, 100 hojas rayadas',
  // Ubicación de la imagen de la libreta
  image: '/Images/libretasImg/gatoalicia.jpg',
};

const libreta02 = {
  // Nombre de la libreta
  name: 'Libreta Girasoles',
  // Precio de la libreta
  price: 200,
  // Descripción de la libreta (tamaño, tipo de hoja, número de hojas, tipo de encuadernación)
  description: 'Libreta de arillo, tamaño media carta, 100 hojas rayadas',
  // Ubicación de la imagen de la libreta
  image: '/Images/libretasImg/girasoles.jpg',
};

const libreta03 = {
  // Nombre de la libreta
  name: 'Libreta Gravity Falls',
  // Precio de la libreta
  price: 200,
  // Descripción de la libreta (tamaño, tipo de hoja, número de hojas, tipo de encuadernación)
  description: 'Libreta cosida, tamaño media carta, 100 hojas rayadas',
  // Ubicación de la imagen de la libreta
  image: '/Images/libretasImg/gravity.jpg',
};

const libreta04 = {
  // Nombre de la libreta
  name: 'Libreta Pink Floyd',
  // Precio de la libreta
  price: 200,
  // Descripción de la libreta (tamaño, tipo de hoja, número de hojas, tipo de encuadernación)
  description: 'Libreta de arillo, tamaño media carta, 100 hojas rayadas',
  // Ubicación de la imagen de la libreta
  image: '/Images/libretasImg/pinkfloyd.jpg',
};

const libreta05 = {
  // Nombre de la libreta
  name: 'Libreta El principito',
  // Precio de la libreta
  price: 200,
  // Descripción de la libreta (tamaño, tipo de hoja, número de hojas, tipo de encuadernación)
  description: 'Libreta cosida, tamaño media carta, 100 hojas rayadas',
  // Ubicación de la imagen de la libreta
  image: '/Images/libretasImg/principito.jpg',
};

const amigu01 = {
  // Nombre del amigurumi
  name: 'Aguacates',
  // Precio del amigurumi
  price: 300,
  // Descripción
  description: 'Dos aguacates tejidos de 15 cm de altura',
  // Ubicación de la imagen
  image: '/Images/amiguImg/aguacates.jpg',
};

const amigu02 = {
  // Nombre del amigurumi
  name: 'Conejo Evan',
  // Precio del amigurumi
  price: 200,
  // Descripción
  description: 'Conejo tejido de 15 cm de altura',
  // Ubicación de la imagen
  image: '/Images/amiguImg/conejoEvan.jpg',
};

const amigu03 = {
  // Nombre del amigurumi
  name: 'Monkey',
  // Precio del amigurumi
  price: 200,
  // Descripción
  description: 'Mono tejido de 15 cm de altura',
  // Ubicación de la imagen
  image: '/Images/amiguImg/monkey.jpg',
};

const amigu04 = {
  // Nombre del amigurumi
  name: 'Monster Inc',
  // Precio del amigurumi
  price: 250,
  // Descripción
  description:
    'figuras tejidas de Mike y Sully de Monsters Inc, 15 cm de altura',
  // Ubicación de la imagen
  image: '/Images/amiguImg/monster.jpg',
};

const amigu05 = {
  // Nombre del amigurumi
  name: 'Spiderman',
  // Precio del amigurumi
  price: 200,
  // Descripción
  description: 'Spiderman tejido de 15 cm de altura',
  // Ubicación de la imagen
  image: '/Images/amiguImg/spiderman.jpg',
};

function addItem(item) {
  const itemHTML = `<div class="card">\n 
         <img src=${item.image} class="card-img-top" alt="image">\n 
          <div class="card-body">\n
              <h5 class="card-title">${item.name}</h5>\n
                <p class="card-text">$ ${item.price} pesos</p>\n
              <p class="card-text">${item.description}</p>\n
              <a href="#" class="btn btn-primary">Add</a>\n
          </div>\n
      </div>\n`;
  const itemsContainer = document.getElementById('list-items');
  itemsContainer.insertAdjacentHTML('beforeend', itemHTML);
}

addItem(libreta01);
addItem(libreta02);
addItem(libreta03);
addItem(libreta04);
addItem(libreta05);
addItem(amigu01);
addItem(amigu02);
addItem(amigu03);
addItem(amigu04);
addItem(amigu05);
