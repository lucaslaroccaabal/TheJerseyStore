const productsFromStorage = JSON.parse(localStorage.getItem("products"));
console.log(productsFromStorage);

productsFromStorage.forEach((productFromStorage) => {
  const cardProduct = document.getElementById(
    `cardProduct${productFromStorage.id}`
  );
  cardProduct.addEventListener("click", () => {
    localStorage.setItem("selectedProduct", JSON.stringify(productFromStorage));
  });
});
