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

let cartProducts = [];
productsFromStorage = parse(localStorage.getItem("products"));
productsFromStorage.forEach((product) => {
  const addButton = document.querySelector(`#addCart${product.id}`);
  addButton?.addEventListener("click", (e) => {
    const products = parse(localStorage.getItem("products"));
    const selectedProduct = products[e.target.id.slice(7) - 1];
    const found = cartProducts.find(
      (cartProduct) => cartProduct.id === selectedProduct.id
    );

    if (found && selectedProduct.stock > 0) {
      cartProducts[cartProducts.indexOf(found)].cantCart++;
      selectedProduct.stock--;
      localStorage.setItem("cart", parse(cartProducts));
      showNotification("Se a Agregado el producto al Carrito");
      showAddedProduct();
    } else if (selectedProduct.stock > 0) {
      cartProducts.push(selectedProduct);
      cartProducts[cartProducts.length - 1].cantCart++;
      selectedProduct.stock--;
      localStorage.setItem("cart", parse(cartProducts));
      showNotification("Se a Agregado el producto al Carrito");
      showAddedProduct();
    } else {
      showNotification("No hay más Stock");
    }
    localStorage.setItem("products", stringify(products));
    localStorage.setItem("cart", stringify(cartProducts));
  });
});
