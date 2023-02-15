const carts = document.getElementsByClassName("add-cart");

let products = [
  {
    company: "Zappos",
    price: 29,
    inCart: 0,
  },
  {
    company: "Apex",
    price: 35,
    inCart: 0,
  },
  {
    company: "Bee",
    price: 25,
    inCart: 0,
  },
  {
    company: "Nike",
    price: 66,
    inCart: 0,
  },
  {
    company: "Reebok",
    price: 55,
    inCart: 0,
  },
  {
    company: "Sneakers",
    price: 75,
    inCart: 0,
  },
  {
    company: "Adidas",
    price: 35,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i])
  });
}

const onLoadCartNumbers = () => {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
};

const cartNumbers = (products) => {
  //   console.log("the product click", products);

  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  /* console.log(typeof productNumbers); */

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }

  setItem(products);
};

const setItem = (products) => {
  /* console.log('inside the setItem function');
    console.log("the product click", products); */

  let cartItems = localStorage.getItem("productInCart");
  cartItems = JSON.parse(cartItems);
  console.log("cartItem", cartItems);

  if (cartItems != null) {
    if(cartItems[products.company] == undefined){
      cartItems = {
          ...cartItems,
          [products.company]:products
      }
    }
    cartItems[products.company].inCart += 1;
  } 
  else {
    products.inCart = 1;
    cartItems = {
      [products.company]: products,
    };
  }

  localStorage.setItem("productInCart", JSON.stringify(cartItems));
};

const totalCost = (product) =>{
  // console.log('get in here product',product.price);

  let cartCost = localStorage.getItem('totalCost');
  //console.log('this is the price of this shoe -',cartCost);
  
  if(cartCost != null){
    cartCost = parseInt(cartCost)
    localStorage.setItem('totalCost',cartCost + product.price);
  }
  else{
    localStorage.setItem('totalCost',product.price)
  }
}

const displayCart = () =>{
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);
    let productContainer = document.querySelector('.products');
    if(cartItems && productContainer){
      productContainer.innerHTML = '';
      Object.values(cartItems).map(item =>{
        console.log(item);
        const div = document.createElement('div');
        div.classList.add('tryFixed');
        div.innerHTML += `
        <div class="product">
        <i class="fa-solid fa-circle-xmark"></i>
        <img src="./images/${item.company}.jpg">
        <span>${item.company}</span> 
        </div>
        <div style="margin-left: 95px" class="price">${item.price}$</div> 
        <div style="margin-left: 10px" class="quantity">
        <i style="color:blue" class="fa-solid fa-circle-minus"></i>
        ${item.inCart}
        <i style="color:blue" class="fa-solid fa-circle-plus"></i>
        </div> 
        <div style="margin-left: 66px" class="total">${item.inCart * item.price}$</div>
        `;
        productContainer.appendChild(div);

      })
    }
}
onLoadCartNumbers();
displayCart()