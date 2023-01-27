
let prodCarrito= [];
let btnCesta= document.getElementById('btnCesta');


window.addEventListener('load', function (event) {
    let tmp = localStorage.getItem('carritoPB');
    if (tmp != null) {
        prodCarrito = JSON.parse(tmp);
        } //if
        console.log(carritoPB);
        carritoPB.forEach((producto) => {
            showProducts(producto);
            });
    });




function showProducts(item){
    const itemElement = document.createElement('div');
    const itemNombre = document.createElement('p');
    const itemPrecio = document.createElement('p');
    const itemDelete = document.createElement('button');

    itemElement.setAttribute(
        'id',
        `${item.name.toLowerCase().trim().replace(/ /g, '-')+ 'list'}`
        );
        itemElement.classList.add('itemListaElement');
        itemNombre.classList.add('itemListaNombre');
        itemPrecio.classList.add('itemListaPrecio');
        itemDelete.classList.add('itemListaDelete');

        itemNombre.textContent=`${item.name}`;
        itemPrecio.textContent=` ${item.price}`;

        itemElement.append(itemNombre);
        itemElement.append(itemPrecio);
        itemElement.append(itemDelete);

        const cuerpoListaCarrito = document.getElementById('cuerpoListaCarrito');
        cuerpoListaCarrito.append(itemElement);
};

