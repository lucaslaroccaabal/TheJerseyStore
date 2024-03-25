const buttonCart = document.querySelector(".buttonCart");
const buttonClose = document.querySelector("#buttonCloseCart");
const cart = document.querySelector("#cart");
buttonCart.addEventListener("click", () => {
  cart.classList.add("onCart");
  cart.classList.remove("offCart");
});
buttonClose.addEventListener("click", () => {
  cart.classList.remove("onCart");
  cart.classList.add("offCart");
});

function displayCart(cartProducts) {
  cart.children[0].innerHTML = "";
  cartProducts.forEach((product) => {
    li = document.createElement("li");
    li.innerHTML = `       
          <img src="/${product.img}" alt="${product.description}">
          <div>
              <p>${product.description}</p>
              <p>${product.price}</p>
              <p>${product.cantCart}</p>
          </div>
        `;
    cart.children[0].appendChild(li);
  });
}

const buttonBuy = document.querySelector(".buyButton");
buttonBuy.addEventListener("click", () => {
  showNotification("GRACIAS POR TU COMPRA");
  cartProducts = [];
  displayCart(cartProducts);
});

let cartProducts = [];
productsFromStorage = parse(localStorage.getItem("products"));
productsFromStorage.forEach((product) => {
  const addButton = document.querySelector(`#addCart${product.id}`);
  addButton.addEventListener("click", (e) => {
    const products = parse(localStorage.getItem("products"));
    const selectedProduct = products[e.target.id.slice(7) - 1];
    const found = cartProducts.find(
      (cartProduct) => cartProduct.id === selectedProduct.id
    );

    if (found && selectedProduct.stock > 0) {
      cartProducts[cartProducts.indexOf(found)].cantCart++;
      selectedProduct.stock--;
      showNotification("Se a Agregado el producto al Carrito");
      displayCart(cartProducts);
    } else if (selectedProduct.stock > 0) {
      cartProducts.push(selectedProduct);
      cartProducts[cartProducts.length - 1].cantCart++;
      selectedProduct.stock--;
      localStorage.setItem("cart", stringify(cartProducts));
      showNotification("Se a Agregado el producto al Carrito");
      displayCart(cartProducts);
    } else {
      showNotification("No hay más Stock");
    }
    localStorage.setItem("products", stringify(products));
    localStorage.setItem("cart", stringify(cartProducts));
  });
});
