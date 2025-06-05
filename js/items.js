const products = [
  {
    id: 1,
    name: 'Ноутбук Lenovo IdeaPad 1',
    price: 24500,
    img: 'https://img.ktc.ua/img/base/1/0/410430.jpg'
  },
  {
    id: 2,
    name: 'Смартфон Samsung Galaxy A34 5G',
    price: 11999,
    img: 'https://m.media-amazon.com/images/I/61+Q6Rh3OQL._AC_SL1500_.jpg'
  },
  {
    id: 3,
    name: 'Навушники Sony WH-1000XM5',
    price: 8999,
    img: 'https://i.moyo.ua/img/products/6139/9_1500.jpg?1728561570'
  },
  {
    id: 4,
    name: 'Мишка Logitech MX Master 3',
    price: 3499,
    img: 'https://img.mta.ua/image/cache/data/foto/z264/264172/photos/264172-1-600x600.jpg'
  },
  {
    id: 5,
    name: 'Монітор LG UltraFine 27” 5K',
    price: 10500,
    img: 'https://m.media-amazon.com/images/I/71VbHaAqbML._AC_SL1500_.jpg'
  },
  {
    id: 6,
    name: 'Клавіатура Keychron K2',
    price: 2999,
    img: 'https://static.tildacdn.one/tild3662-3432-4162-a362-306564323133/Keychron-K2-wireless.jpg'
  }
];

const cartKey = "cart";

const list = document.querySelector(".list");

function createMarkup(arr) { 
    return arr.map(({id, name, price, img}) => `<li class="item" data-id="${id}">
              <img
                src="${img}"
                width="264px"
              />
                <h2 class="item-name">${name}</h2>
                <p class="item-price">${price}</p>
                <button class="button-add">Add to cart</button>
                `).join("")}

list.insertAdjacentHTML( "afterbegin",createMarkup(products));

list.addEventListener("click", handleClick);

function handleClick(event) {
  if (!event.target.classList.contains("button-add")) {
    return;
  }
  const parent = event.target.closest(".item");
  const productId = +parent.dataset.id;
  const currentProduct = products.find(({ id }) => id === productId);

  const cartProducts = JSON.parse(localStorage.getItem(cartKey)) || [];
  const index = cartProducts.findIndex(({ id }) => id === productId)
  
  if (index === -1) {
    currentProduct.qty = 1;
    cartProducts.push(currentProduct);
  } else {
    cartProducts[index].qty += 1;
  }

  localStorage.setItem(cartKey, JSON.stringify(cartProducts))

  console.log(cartProducts)
}

