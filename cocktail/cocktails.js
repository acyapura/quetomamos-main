const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let str = document.getElementById("str");
function alpha(arr) {
  str.innerHTML = "";
  for (const e of arr) {
    let alphabetical = document.createElement("div");
    alphabetical.className = "alphabetical";
    alphabetical.innerHTML = `
        <button id="${e}" class="letras" >${e.toUpperCase()}</button>
          `;
    str.append(alphabetical);
    let button = document.getElementsByClassName("letras");
    for (btn of button) {
      btn.addEventListener("click", concat);
    }
  }
}
alpha(alphabet);

function concat(e) {
  e.preventDefault();
  let url =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + e.target.id;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let { drinks } = data;
      appWeb(drinks);
    })
    .catch((error) => console.log(error));
}

function appWeb(array) {
  let contenedor = document.getElementById("contenedor");
  let modal = document.getElementById("myModal");
  let receta = document.getElementById("receta");
  const drinks = array;
  renderizar(array);

  function renderizar(array) {
    contenedor.innerHTML = "";
    for (const product of array) {
      let tarjetabody = document.createElement("div");
      tarjetabody.className = "tarjeta";
      tarjetabody.innerHTML = `
            <div class="card-1">
                <button id='${product.idDrink}' class='btn-img' >
                    <img id='${product.idDrink}' class="card-img-top" src=${product.strDrinkThumb} alt="Card image cap">
                </button>
                <div class="">
                    <h5 class="card-title">${product.strDrink}</h5>
                </div>
            </div>
              `;
      contenedor.append(tarjetabody);
    }
    let imgModal = document.getElementsByClassName("card-img-top");
    for (let a of imgModal) {
      a.addEventListener("click", esconder);
      a.addEventListener("click", renderizarModal);
    }
  }
  function renderizarModal(e) {
    receta.innerHTML = "";
    let drink = drinks.find((p) => p.idDrink == e.target.id);
    receta.innerHTML = `
        <span id='close' class="close">&times;</span>
            <div class="card mb-3">
                <div class="card-body">
                    <div class='modal-image'>
                    <img class="card-img-top" src="${drink.strDrinkThumb}" alt="Card image cap">
                    </div>
                    <div class='card-body-text'>
                        <h4 class="card-title">${drink.strDrink}</h4>
                        <h5 class="card-text">${drink.strInstructions}</h5>
                    </div>
                </div>
                <div class="table-responsive text-nowrap">
                    <table class="table table-dark table-striped">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ingredient</th>
                            <th scope="col">Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>${drink.strIngredient1}</td>
                            <td>${drink.strMeasure1}</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td >${drink.strIngredient2}</td>
                            <td >${drink.strMeasure2}</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td >${drink.strIngredient3}</td>
                            <td >${drink.strMeasure3}</td>
                            </tr>
                            <tr>
                            <th scope="row">4</th>
                            <td >${drink.strIngredient4}</td>
                            <td >${drink.strMeasure4}</td>
                            </tr>
                            <tr>
                            <th scope="row">5</th>
                            <td>${drink.strIngredient5}</td>
                            <td>${drink.strMeasure5}</td>
                            </tr>
                            <tr>
                            <th scope="row">6</th>
                            <td>${drink.strIngredient6}</td>
                            <td>${drink.strMeasure6}</td>
                            </tr>
                            <tr>
                            <th scope="row">7</th>
                            <td>${drink.strIngredient7}</td>
                            <td>${drink.strMeasure7}</td>
                            </tr>
                            <tr>
                            <th scope="row">8</th>
                            <td>${drink.strIngredient8}</td>
                            <td>${drink.strMeasure8}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
                `;
    let span = document.getElementById("close");
    span.addEventListener("click", mostrar);
  }

  function esconder(e) {
    modal.style.display = "block";
  }
  function mostrar(e) {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
