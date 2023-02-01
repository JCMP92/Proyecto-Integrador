let carritoPB = [];
//----CÓDIGO ORIGINAL ----------------------------------------------------------------------------------------->
// let productosPB = [
//   {
//     name: 'Libreta Gato Alicia',
//     price: 200,
//     description: 'Libreta cosida, tamaño media carta, 100 hojas rayadas',
//     image: '/Images/libretasImg/gatoalicia.jpg',
//   },
//   {
//     name: 'Libreta Girasoles',
//     price: 200,
//     description: 'Libreta de arillo, tamaño media carta, 100 hojas rayadas',
//     image: '/Images/libretasImg/girasoles.jpg',
//   },
//   {
//     name: 'Libreta Gravity Falls',
//     price: 200,
//     description: 'Libreta cosida, tamaño media carta, 100 hojas rayadas',
//     image: '/Images/libretasImg/gravity.jpg',
//   },
//   {
//     name: 'Libreta Pink Floyd',
//     price: 200,
//     description: 'Libreta de arillo, tamaño media carta, 100 hojas rayadas',
//     image: '/Images/libretasImg/pinkfloyd.jpg',
//   },
//   {
//     name: 'Libreta El principito',
//     price: 200,
//     description: 'Libreta cosida, tamaño media carta, 100 hojas rayadas',
//     image: '/Images/libretasImg/principito.jpg',
//   },
//   {
//     name: 'Aguacates',
//     price: 300,
//     description: 'Dos aguacates tejidos de 15 cm de altura',
//     image: '/Images/amiguImg/aguacates.jpg',
//   },
//   {
//     name: 'Conejo Evan',
//     price: 200,
//     description: 'Conejo tejido de 15 cm de altura',
//     image: '/Images/amiguImg/conejoEvan.jpg',
//   },
//   {
//     name: 'Monkey',
//     price: 200,
//     description: 'Mono tejido de 15 cm de altura',
//     image: '/Images/amiguImg/monkey.jpg',
//   },
//   {
//     name: 'Monster Inc',
//     price: 250,
//     description:
//       'Figuras tejidas de Mike y Sully de Monsters Inc, 15 cm de altura',
//     image: '/Images/amiguImg/monster.jpg',
//   },
//   {
//     name: 'Spiderman',
//     price: 200,
//     description: 'Spiderman tejido de 15 cm de altura',
//     image: '/Images/amiguImg/spiderman.jpg',
//   },
// ];
//----CÓDIGO ORIGINAL ----------------------------------------------------------------------------------------->

//----PRUEBA CÓDIGO UNIÓN JS----------------------------------------------------------------------------------->
const URL_MAIN = '/api/productos/';

function fetchAndAdd() {
  fetch(URL_MAIN, {
    method: 'get',
  })
    .then(function (response) {
      response.json().then(function (json) {
        console.log(json);
        console.log(json.length);
        productos = json;
        Array.from(json).forEach((producto) => {
          addItem(producto);
        }); // foreach
      }); //then
    })
    .catch(function (err) {
      console.log(err);
    });
} // addItems

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});
//----PRUEBA CÓDIGO UNIÓN JS----------------------------------------------------------------------------------->
window.addEventListener('load', function (event) {
  // let tmp = localStorage.getItem('productosPB');
  // if (tmp != null) {
  //   productosPB = JSON.parse(tmp);
  //   console.log(productosPB);
  // } //if
  // productosPB.forEach((producto) => {
  //   addItem(producto);
  // });
  fetchAndAdd();
});

function addItem(item) {
  let imgSrc = item.image;
  if (item.inputImg) {
    imgSrc = item.inputImg;
  } //if

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
    "price": "${item.price}",
    "description": "${itemDescr.textContent}",
    "inputImg": "${imgSrc}" 
    }`;

    carritoPB.push(JSON.parse(itemToCart));
    localStorage.setItem('carritoPB', JSON.stringify(carritoPB));

    Toast.fire({
      icon: 'success',
      title: '¡Agregado al carrito!',
    });
  }); //addBtn EventListener

  itemBody.append(itemTilte);
  itemBody.append(itemPrice);
  itemBody.append(itemDescr);
  itemBody.append(addBtn);

  itemCard.append(itemImg);
  itemCard.append(itemBody);

  const itemsContainer = document.getElementById('list-items');
  itemsContainer.append(itemCard);
} //functionAddItem
