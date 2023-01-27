let prodCarrito = [];
let btnCesta = document.getElementById('btnCesta');
let totalCost = document.getElementById('totalCost');
let costoTotal = 0;

window.addEventListener('load', function (event) {
  let tmp = localStorage.getItem('carritoPB');
  if (tmp != null) {
    prodCarrito = JSON.parse(tmp);
  } //if
  prodCarrito.forEach((producto) => {
    showProducts(producto);
  });
});

function showProducts(item) {
  const itemElement = document.createElement('div');
  const itemImg = document.createElement('img');
  const itemNombre = document.createElement('p');
  const itemPrecio = document.createElement('p');
  const itemDelete = document.createElement('button');

  itemElement.setAttribute(
    'id',
    `${item.name.toLowerCase().trim().replace(/ /g, '-') + 'list'}`
  );
  itemElement.classList.add('itemListaElement');
  itemImg.classList.add('itemListaImg');
  itemNombre.classList.add('itemListaNombre');
  itemPrecio.classList.add('itemListaPrecio');
  itemDelete.classList.add('itemListaDelete');

  itemImg.src = `${item.inputImg}`;
  itemNombre.textContent = `${item.name}`;
  itemPrecio.textContent = `$ ${item.price} MXN`;
  itemDelete.textContent = 'Eliminar';

  itemElement.append(itemImg);
  itemElement.append(itemNombre);
  itemElement.append(itemPrecio);
  itemElement.append(itemDelete);

  //item delete--------------------------------------------------
  itemDelete.addEventListener('click', function (e) {
    let indexItem = prodCarrito.findIndex(
      (item) =>
        `${item.name.toLowerCase().trim().replace(/ /g, '-') + 'list'}` ===
        e.target.parentNode.id
    );

    let removeItem = document.getElementById(
      `${item.name.toLowerCase().trim().replace(/ /g, '-') + 'list'}`
    );
    prodCarrito.splice(indexItem, 1);
    removeItem.remove();

    localStorage.setItem('carritoPB', JSON.stringify(prodCarrito));
    costoTotal -= parseInt(`${item.price}`);
    totalCost.textContent = costoTotal;
  });

  const cuerpoListaCarrito = document.getElementById('cuerpoListaCarrito');
  cuerpoListaCarrito.append(itemElement);

  costoTotal += parseInt(`${item.price}`);
  totalCost.textContent = costoTotal;
}
