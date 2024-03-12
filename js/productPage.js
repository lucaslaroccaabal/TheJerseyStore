const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
console.log(selectedProduct);
main = document.querySelector(".productMain");
main.innerHTML = `<h1>${selectedProduct.description}</h1>
        <img class="jerseyImg" src="../${selectedProduct.img}" alt="">
        <div>
            <p>$ ${selectedProduct.price}</p>
            <form>
                <div>
                    <label for="sizeS">S</label>
                    <input hidden id="sizeS" type="radio" name="size">
                </div>
                <div>
                    <label for="sizeM">M</label>
                    <input hidden id="sizeM" type="radio" name="size">
                </div>
                <div>
                    <label for="sizeL">L</label>
                    <input hidden id="sizeL" type="radio" name="size">
                </div>
            </form>
            <div class="payment">
                <img class="paymentImg"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png"
                    alt="Mastercard">
                <img class="paymentImg"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
                    alt="Visa">
            </div>

            <button id="addCart${selectedProduct.id}">Agregar Al Carrito</button>
        </div>`;
