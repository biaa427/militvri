/* photo slider buttons */

var imgList = document.getElementById("img-list");
var caroBtns = document.getElementsByClassName("caro-btn");

var status = 0;
var positionUit = -100;

function slideImg(x) {
    var i;

    for (i = 0; i < caroBtns.length; i++) {
        caroBtns[i].style.backgroundColor = "#ffffff44";        
    }

    caroBtns[x].style.backgroundColor = "#fff";
    position = x * positionUit;
    imgList.style.left = position + "%";
};

/* show navigation */

$(document).ready(function() {
    $('#navigationContainer').load('nav.html .navigation');
});

/* shopping cart */

let list = document.querySelector('.all-products');
let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: 'product-1.jpeg',
        price: 29,
        serial_no: 135
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: 'product-2.jpeg',
        price: 29,
        serial_no: 222
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: 'product-3.jpeg',
        price: 29,
        serial_no: 210
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: 'product-4.jpeg',
        price: 29,
        serial_no: 658
    },
];

function loadProducts() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('product');
        newDiv.innerHTML = `
        <img src="images//${value.image}" alt="">
        <div class="product-info">
            <h4 class="product-title">${value.name}</h4>
            <p class="product-price">$${value.price}</p>
            <button class="product-btn">Add To Cart</button>
            
        </div>
        `;

        list.appendChild(newDiv);
    })    
}

loadProducts();

/* CART */

function openCart() {
    const cartIcon = document.querySelector('#cart-btn');
    const cart = document.querySelector('.cart');
    
    cartIcon.onclick = () => {
        cart.classList.add("active");
    }
};

function closeCart() {
    const cart = document.querySelector('.cart');
    const closeCart = document.querySelector('#close-cart');
    
    closeCart.onclick = () => {
        cart.classList.remove("active");
    }
};

    
