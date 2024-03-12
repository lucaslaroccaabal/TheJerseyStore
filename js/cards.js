const container = document.querySelector(".cardsContainer");
if (container.parentElement.id === "indexCards") {
  cardsInIndex = true;
} else {
  cardsInIndex = false;
}
products.forEach((product) => {
  if (cardsInIndex) {
    product.img.replace("../", "");
  }
  const card = document.createElement("div");
  card.innerHTML = `            
  <div id="cardProduct${product.id}" class="card">
  <a href="html/product.html">
  <img src="${product.img}" alt="${product.description}">
  <p>${product.description}</p>
  </a>
  <div>
  <p>$${product.price}</p>
  <button id="addCart${product.id}">Agregar Al Carrito</button>
  </div>
  </div>`;
  container.appendChild(card);
});
