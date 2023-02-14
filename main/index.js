const allCarts = document.getElementsByClassName('add-cart');

let products = [
    {
        Company: 'Bata',
        price:20,
        inCart:0
    },
    {
        Company: 'Apex',
        price:35,
        inCart:0
    },
    {
        Company: 'Bee',
        price:25,
        inCart:0
    },
    {
        Company: 'Nike',
        price:15,
        inCart:0
    },
    {
        Company: 'Reebok',
        price:55,
        inCart:0
    },
    {
        Company: 'Sneakers',
        price:75,
        inCart:0
    },
    {
        Company: 'Vellore',
        price:35,
        inCart:0
    }
]

for (const carts of allCarts) {
     carts.addEventListener('click',() => {
        // console.log('hello');
        cartNumber()
     })  
}


const onLoadCartNumbers = () =>{
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
      document.querySelector('.cart span').textContent = productNumbers;
    }
}


const cartNumber = () =>{
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    /* console.log(typeof productNumbers); */

    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
}

onLoadCartNumbers()