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

const cartNumbers = (product) => {
  //   console.log("the product click", product);

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

  setItem(product);
};

const setItem = (product) => {
  /* console.log('inside the setItem function');
    console.log("the product click", product); */

  let cartItems = localStorage.getItem("productInCart");
  cartItems = JSON.parse(cartItems);
  console.log("cartItem", cartItems);

  if (cartItems != null) {
    if (cartItems[product.company] == undefined) {
      cartItems = {
        ...cartItems,
        [product.company]: product,
      };
    }
    cartItems[product.company].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.company]: product,
    };
  }

  localStorage.setItem("productInCart", JSON.stringify(cartItems));
};


const totalCost = (product) =>{
  
}

onLoadCartNumbers();