const pluses = document.querySelectorAll(".product__quantity-control_inc");
const minuses = document.querySelectorAll(".product__quantity-control_dec");
const quantities = document.querySelectorAll(".product__quantity-value");
const buttons = document.querySelectorAll(".product__add");
const buttonProducts = document.querySelector(".cart__products");

for (let plus of Array.from(pluses)){
    plus.addEventListener("click", () => {
        let currentQuantity = quantities[Array.from(pluses).indexOf(plus)];
        currentQuantity.textContent = Number(currentQuantity.textContent) + 1;
    })
}

for (let minus of Array.from(minuses)){
    minus.addEventListener("click", () => {
        let currentQuantity = quantities[Array.from(minuses).indexOf(minus)];
        if (currentQuantity.textContent > 1){
            currentQuantity.textContent = Number(currentQuantity.textContent) - 1;
        }
    })
}

for (let button of Array.from(buttons)){
    button.addEventListener("click", () => {
        const currentQuantity = quantities[Array.from(buttons).indexOf(button)].textContent;
        const currentProduct = button.closest('.product');
        const currentProductId = currentProduct.dataset.id;
        const productImageSrc = currentProduct.querySelector('.product__image').src;

        buttonElement = buttonProducts.querySelector(`.cart__product[data-id="${currentProductId}"]`);
        if (!buttonElement){
            let newElement = document.createElement("div");
            newElement.className = "cart__product";
            newElement.dataset.id = currentProductId;
            newElement.textContent = `${currentQuantity}`;
            newElement.innerHTML = `<div class="cart__product-count">${currentQuantity}</div>`
            let productImage = document.createElement("img");
            productImage.className = "cart__product-image";
            productImage.src = productImageSrc;
            newElement.appendChild(productImage);
            buttonProducts.appendChild(newElement);
        }
        else{
            buttonElement.querySelector('.cart__product-count').textContent = Number(buttonElement.querySelector('.cart__product-count').textContent) + Number(currentQuantity);
        }
    })
}