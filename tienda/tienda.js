const productos = [
  {
    id: 08,
    nombre: "Copa para Champagne",
    categoria: "Cristaleria",
    precio: 40,
    stock: 20,
    img: "./img/coctailGlassChampagneCupp.jpg",
    description:
      "En este caso, se trata de un recipiente de boca ancha, aunque con un ligero cierre que ayuda a que su contenido permanezca en el interior. Esta característica será aliada de los cócteles con hielo picado o cuyos ingredientes se sirven tras haber sido triturados. Por otro lado, cualquier elaboración con champagne será adecuada para el uso de este vaso.",
  },
  {
    id: 25,
    nombre: "Coctelera Shaker",
    categoria: "Cocteleria",
    precio: 600,
    stock: 10,
    img: "./img/coctailShakerBanner.jpg",
    description:
      "También es conocida como «shaker» o «mixer», su composición más habitual es acero inoxidable, su capacidad más típica oscila entre 500ml a 750ml siendo el tamaño más habitual este último. Lo normal es encontrar una con 3 piezas, vaso, filtro y tapón.",
  },
  {
    id: 02,
    nombre: "Vaso Old-Fashioned",
    categoria: "Cristaleria",
    precio: 25,
    stock: 30,
    img: "./img/coctailGlassOldFashioned.jpg",
    description:
      "Se usa para bebidas cortas que se sirven solas y con hielo, Suelen contener un volumen de entre 180 y 240 ml. También están disponibles en versión doble de 480 ml. La versión más pequeña es idónea para espirituosos que se sirven solos, como un whisky o ron añejo. Mientras que los más grandes son perfectos para servir con un cubo o bola de hielo de gran tamaño",
  },
  {
    id: 18,
    nombre: "Dosificador",
    categoria: "Cocteleria",
    precio: 200,
    stock: 10,
    img: "./img/coctailDosificadorBanner.jpg",
    description:
      "Facilitaran la tarea a la persona que hace los cocteles, de esta manera el flujo de líquido desde la botella hasta el jigger será mucho más preciso y podrá adaptarse a cada circunstancia dependiendo de la necesidad",
  },
  {
    id: 09,
    nombre: "Coctail Colador",
    categoria: "Cocteleria",
    precio: 250,
    stock: 10,
    img: "./img/coctailColadorBanner.jpg",
    description:
      "Es un colador o filtro, que se usa para vaciar el líquido evitando partículas indeseadas como por ejemplo las derivadas de la pulpa de la fruta empleada, así como para verter el producto evitando que los hielos se salgan",
  },
  {
    id: 12,
    nombre: "Vaso Highball",
    categoria: "Cristaleria",
    precio: 30,
    stock: 15,
    img: "./img/coctailGlassHighballBanner.jpg",
    description:
      "son vasos altos tubulares y tienen un volumen similar (entre 240 y 480 ml). Los vasos collins tienden a ser más altos y más estrechos con más forma de tubo y el vaso highball tiende a ser más ancho y suele alcanzar un máximo de 300 ml. El vaso de tubo se usa para combinados o bebidas largas y se suele rellenar con abundantes cantidades de hielo",
  },
  {
    id: 18,
    nombre: "Coctail Jigger",
    categoria: "Cocteleria",
    precio: 250,
    stock: 10,
    img: "./img/coctailJiggerBanner.jpg",
    description:
      "Lleva dos medidas por ambos lados en diferentes tamaños, siendo la combinación más típica el de una onza (30ml) por arriba y media onza por abajo (15ml)",
  },
  {
    id: 22,
    nombre: "Vasos de Chupitos",
    categoria: "Cristaleria",
    precio: 10,
    stock: 50,
    img: "./img/coctailGlassChupito.jpg",
    description:
      "Son vasos pequeños, para bebidas que se toman de un solo trago, el chupito típico es de unos 45 ml y suele tener un grosor mayor en la base para poder resistir los golpes que recibe cuando se trata de beber tequila.",
  },
  {
    id: 21,
    nombre: "Coctail Spoon",
    categoria: "Cocteleria",
    precio: 50,
    stock: 10,
    img: "./img/coctailSpoonBanner.jpg",
    description:
      "De largura considerablemente superior a una cuchara tradicional, tiene un uso muy claro en la mezcla de los diferentes ingredientes del coctel",
  },
  {
    id: 23,
    nombre: "Copa para Martinis",
    categoria: "Cristaleria",
    precio: 30,
    stock: 40,
    img: "./img/coctailGlassMartiniCup.jpg",
    description:
      "Se trata de una copa fina y elegante que comenzó siendo exclusividad del Martini pero que actualmente se utiliza para muchas otras recetas, como los conocidos Manhattan o Daiquiris. Su cuerpo tiene la forma de un triángulo invertido y su una boca, muy ancha, va reduciéndose hasta llegar al tallo, normalmente largo. Su capacidad ronda los 200 ml, aunque en la actualidad podemos encontrarla de diversos tamaños.",
  },
  {
    id: 03,
    nombre: "Copa para Margaritas",
    categoria: "Cristaleria",
    precio: 30,
    stock: 40,
    img: "./img/coctailGlassMargaritaCup.jpg",
    description:
      "Recibe su nombre por el famoso cóctel que suele servirse en ella. Su estructura es muy particular y destaca por la pequeña forma ovalada en la que termina su cuerpo, diferenciándose del resto de vasos que conocemos. Este vidrio alcanza un volumen de unos 350 ml aproximadamente. Al igual que la copa Martini, tiene una boca ancha y es de tallo largo, con una base mediana.",
  },
  {
    id: 04,
    nombre: "Copa Hurrican",
    categoria: "Cristaleria",
    precio: 40,
    stock: 10,
    img: "./img/coctailGlassHurricaneCup.jpg",
    description:
      "Es el recipiente más divertido de todos los que proponemos. Se trata de una copa con cuerpo ondulado, que se estrecha en el cuerpo y vuelve a ensancharse en la boca. Posee una gran capacidad, en torno a los 400 ml. Con ella podemos preparar cócteles más elaborados, como la Piña Colada o el San Francisco.",
  },
];

//  App tienda

let carrito = [];
let carritoJSON = "";
let unidades = "";
let totalFinal = "";
let contenedor = document.getElementById("contenedor");

let cocteleria = document.getElementById("cocteleria");
let cristaleria = document.getElementById("cristaleria");
let tienda = document.getElementById("tienda");
let button = document.getElementById("buscador");
let contenedorCarritoTotal = document.getElementById("carritoContent");

let cartNav = document.getElementById("cart-nav");
let botonCarrito = document.getElementById("cart-button");

let carritoRender = document.getElementById("cart-row");
let total = document.getElementById("total");

cristaleria.addEventListener("click", filtroCategoria);
cocteleria.addEventListener("click", filtroCategoria);
tienda.addEventListener("click", renderizarTodo);
button.addEventListener("click", buscar);

botonCarrito.addEventListener("click", esconder);

renderizar(productos);
comprobar(carrito);

//  Filtors

function filtroCategoria(e) {
  e.preventDefault();
  let categoriaFiltrado = productos.filter(
    (producto) => producto.categoria.toLowerCase() == e.target.id
  );
  mostrar();
  renderizar(categoriaFiltrado);
}
function buscar(e) {
  e.preventDefault();
  let productoFiltrado = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(input.value.toLowerCase()) ||
      producto.categoria.toLowerCase().includes(input.value.toLowerCase())
  );
  renderizar(productoFiltrado);
}
function renderizarTodo(e) {
  e.preventDefault();
  mostrar();
  renderizar(productos);
}
function comprobar() {
  if (localStorage.getItem("Carrito")) {
    carrito = JSON.parse(localStorage.getItem("Carrito"));
    renderizarCarro(carrito);
    totalRender(carrito);
  } else {
    totalRenderVacio(carrito);
  }
}
function renderizar(array) {
  contenedor.innerHTML = "";
  for (const product of array) {
    let { id, nombre, categoria, precio, stock, img, description } = product;
    let tarjetabody = document.createElement("div");
    tarjetabody.className = "tarjeta";
    tarjetabody.innerHTML = `
        <div class='tarjeta-img'>
          <img class="thumbnail" src=${img} alt="">
        </div>
        <div class='tarjeta-description'>
          <p class='description-p'>${description}</p>
        </div>
        <div class='tarjeta-body'>
          <p class="precio">Price: $${precio}</p>
           <a id=${id} class='tarjeta-btn' href=# >buy</a>
        </div>
        `;
    contenedor.append(tarjetabody);
  }
  let button = document.getElementsByClassName("tarjeta-btn");
  for (btn of button) {
    btn.addEventListener("click", addItem);
  }
}

function addItem(e) {
  let productoBuscado = productos.find((prod) => prod.id == e.target.id);
  let indexProduct = carrito.findIndex((prod) => prod.id == productoBuscado.id);

  if (indexProduct != -1) {
    carrito[indexProduct].unidades++;
    carrito[indexProduct].subtotal =
      carrito[indexProduct].precio * carrito[indexProduct].unidades;
    carritoJSON = JSON.stringify(carrito);
    localStorage.setItem("Carrito", carritoJSON);
  } else {
    carrito.push({
      id: productoBuscado.id,
      nombre: productoBuscado.nombre,
      categoria: productoBuscado.categoria,
      precio: productoBuscado.precio,
      subtotal: productoBuscado.precio,
      unidades: 1,
      img: productoBuscado.img,
    });
    carritoJSON = JSON.stringify(carrito);
    localStorage.setItem("Carrito", carritoJSON);
  }
  totalFinal = carrito.reduce((a, b) => a + b.subtotal, 0);
  unidades = carrito.reduce((a, b) => a + b.unidades, 0);
  renderizarCarro(carrito);
  totalRender(carrito);
  tostada("Producto agregado al carrito", {
    background: "linear-gradient(to right,#047b89, #6fa5ab)",
  });
}

function renderizarCarro(array) {
  carritoRender.innerHTML = "";
  for (let producto of array) {
    let { nombre, img, precio, unidades, id, subtotal } = producto;
    let cart = document.createElement("div");
    cart.className = "cart-render";
    cart.innerHTML = `
          <div class="cart-row">
          <div  style="flex:2"><img class="row-image" src="${img}"></div>
          <div  style="flex:2"><p class="cart-p">${nombre}</p></div>
          <div  style="flex:1"><p class="cart-p">$${precio.toFixed(2)}</p></div>
          <div class='content-quantity' style="flex:1">
           
            <p id="${id}" class="chg-quantity update-cart ">ᐃ</p>
            <p class="quantity">${unidades}</p>
            <p id="${id}" class="chg-quantity-2 update-cart ">ᐁ</p>
           
          </div>
          <div style="flex:1"><p class="cart-p">$${subtotal.toFixed(
            2
          )}</p></div>
          </div>
          `;
    carritoRender.append(cart);
  }
  let add = document.getElementsByClassName("chg-quantity update-cart");
  for (let a of add) {
    a.addEventListener("click", addItem);
  }
  let remove = document.getElementsByClassName("chg-quantity-2 update-cart");
  for (let b of remove) {
    b.addEventListener("click", removeItem);
  }
}

function removeItem(e) {
  let productoBuscado = productos.find(
    (producto) => producto.id == e.target.id
  );
  let indexProduct = carrito.findIndex(
    (producto) => producto.id == productoBuscado.id
  );
  if (indexProduct != -1) {
    if (carrito[indexProduct].unidades >= 2) {
      carrito[indexProduct].unidades--;
      carrito[indexProduct].subtotal =
        carrito[indexProduct].subtotal - carrito[indexProduct].precio;
      carritoJSON = JSON.stringify(carrito);
      localStorage.setItem("Carrito", carritoJSON);
    } else {
      carrito.splice(indexProduct, 1);
      carritoJSON = JSON.stringify(carrito);
      localStorage.setItem("Carrito", carritoJSON);
    }
  }
  totalFinal = carrito.reduce((a, b) => a + b.subtotal, 0);
  unidades = carrito.reduce((a, b) => a + b.unidades, 0);

  renderizarCarro(carrito);
  totalRender(carrito);
  tostada("Producto eliminado del carrito", {
    background: "linear-gradient(to right,  #e92424,  #da5353)",
  });
}
/*                   Renderizar Total de Precio y Unidades del Carrito             */
function totalRender(array) {
  totalFinal = carrito.reduce((a, b) => a + b.subtotal, 0);
  unidades = carrito.reduce((a, b) => a + b.unidades, 0);
  total.innerHTML = "";
  let totalResumen = document.createElement("div");
  totalResumen.className = "total";
  totalResumen.innerHTML = `
      <a class="close" href='#'>✖</a>
      <h4 class="totalh5" >Items:<strong class='total-strong'>${unidades}</strong></h4>
      <h4 class="totalh5" >Total:<strong class='total-strong'> $ ${totalFinal.toFixed(
        2
      )}</strong></h4>
      <button id="clear" >Pagar</button>
      `;
  total.append(totalResumen);
  let span = document.getElementsByClassName("close")[0];
  span.addEventListener("click", mostrar);
  cartNav.innerHTML = "";
  if (array.lenght != 0) {
    let parrafo = document.createElement("div");
    parrafo.className = "cart-total";
    parrafo.innerHTML = `<p>${unidades}</p>`;
    cartNav.append(parrafo);
  } else {
    let parrafo = document.createElement("div");
    parrafo.className = "cart-total";
    parrafo.innerHTML = `<p>0</p>`;
    cartNav.append(parrafo);
  }

  let clear = document.getElementById("clear");
  clear.addEventListener("click", borrarStorage);
}
function totalRenderVacio(array) {
  total.innerHTML = "";
  let totalResumen = document.createElement("div");
  totalResumen.className = "total";
  totalResumen.innerHTML = `
          <span class="close">X</span> 
          <h5 class="totalh5">Items: <strong>  0 </strong></h5>
          <h5 class="totalh5">Total:<strong> $ 0.00 </strong></h5>
          `;
  total.append(totalResumen);
  cartNav.innerHTML = "";
  let parrafo = document.createElement("div");
  parrafo.className = "cart-total";
  parrafo.innerHTML = `<p>0</p>`;
  cartNav.append(parrafo);

  let span = document.getElementsByClassName("close")[0];
  span.addEventListener("click", mostrar);
}
/*       Eliminar Carrito del LocalStorage  */
function borrarStorage() {
  localStorage.removeItem("Carrito");
  Swal.fire({
    title: "<hr><strong>Gracias por su compra!</strong><br>",
    // imageUrl: './img/elementsBanner1.jpg',
    // imageWidth: 350,
    // imageHeight: 200,
    // imageAlt: "logo",
    icon: "success",
    showConfirmButton: false,
    backdrop: `rgba(78, 76, 76, 0.65)`,
    timer: 2500,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
  mostrar();
  carrito = [];
  totalRenderVacio(carrito);
  renderizarCarro(carrito);
  renderizar(productos);
}
function mostrar(e) {
  contenedorCarritoTotal.style.display = "none";
  contenedor.style.display = "grid";
}
function esconder(e) {
  contenedorCarritoTotal.style.display = "block";
  contenedor.style.display = "none";
}

// Tostify y sweetAlert

function cartel() {
  Swal.fire({
    title: "Proximamente!",
    showConfirmButton: false,
    timer: 1000,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
}
function tostada(text, style) {
  Toastify({
    text: text,
    style: style,
    duration: 1000,
    gravity: "bottom",
    position: "right",
  }).showToast();
}
