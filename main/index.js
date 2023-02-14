const carts = document.getElementsByClassName("add-cart");

let products = [
  {
    company: "Bata",
    price: 20,
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
    price: 15,
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
    company: "Vellore",
    price: 35,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
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
  } 
  else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
  
  setItem(products)
};


const setItem = (products) =>{
    console.log('insite the setItem fuction');
    console.log("the product click", products);
}

onLoadCartNumbers();