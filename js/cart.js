const cartKey = "cart";

const container = document.querySelector(".container-cart");
const totalPrice = document.querySelector(".total-price");
const clearbutton = document.querySelector(".clear-button");
const cartList = document.querySelector(".cart-list");

const products = JSON.parse(localStorage.getItem(cartKey)) || [];

let totalCost;

if (products.length) {
    clearbutton.hidden = false;
    totalCost = products.reduce((acc, {qty, price}) => acc + price * qty, 0);
}

totalPrice.textContent = totalCost ? `total cost is ${totalCost} грн` : "Your basket is empty";

cartList.insertAdjacentHTML("beforeend", createMarkup(products));

function createMarkup(arr) {
    return arr.map(({id, name, price, img, qty}) => `<li class="item" data-id="${id}">
              <img
                src="${img}"
                width="264px"
              />
                <h2 class="item-name">${name}</h2>
                <p class="item-price">Total price: ${price * qty}</p>
                <p class="quantity">Quantity: ${qty}</p>
                `).join("")}

clearbutton.addEventListener("click", handleClick);

function handleClick() {
  localStorage.removeItem(cartKey);
  // window.location.href = "./items.html";
  cartList.innerHTML = "";
  totalCost = 0;
  totalPrice.textContent = totalCost ? `total cost is ${totalCost} грн` : "Your basket is empty";

}




















// const button = document.querySelector(".submit-test");
// const title = document.querySelector(".ls-test-title");

// if (button) {
//     button.addEventListener("click", () => {
//     localStorage.setItem("cart-test", "hello World");
//     })
// }
    
// if (title) {
//     title.textContent = localStorage.getItem("cart-test") || "Нічого не знайдено";
// }


