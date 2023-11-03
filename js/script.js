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
        <div class="product-box">
        <img src="images//${value.image}" alt="" class="product-image">
            <div class="product-info">
                <h4 class="product-title">${value.name}</h4>
                <p class="product-price">$${value.price}</p>
                <button class="product-btn" onclick="addCartClicked(this)">Add To Cart</button>
                
            </div>
        </div>
        `;

        list.appendChild(newDiv);
    })    
}

loadProducts();

/* CART */

function openCart() {
    const cart = document.querySelector('.cart');
    cart.classList.add("active");
};

function closeCart() {
    const cart = document.querySelector('.cart');
    cart.classList.remove("active");
};

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var j = 0; j < quantityInputs.length; j++) {
        var input = quantityInputs[j];
        input.addEventListener("change", quantityChanged);
    }

    var addCart = document.getElementsByClassName("product-btn");
    for (var k = 0; k < addCart.length; k++) {
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
}

function ready() {
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var j = 0; j < quantityInputs.length; j++) {
        var input = quantityInputs[j];
        input.addEventListener("change", quantityChanged);
    }

    var addCart = document.getElementsByClassName("product-btn");
    for (var k = 0; k < addCart.length; k++) {
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
}

function removeCartItem(buttonClicked) {
    buttonClicked.parentElement.parentElement.remove();
    updateTotal();
 }

 function quantityChanged(q) {
    if (isNaN(q.value) || q.value < 1) {
        q.value = 1;
    }
    updateTotal();
}

function addCartClicked(buttonAdd) {
    var productBox = buttonAdd.parentNode; // Get the immediate parent container

    while (productBox && !productBox.classList.contains('product-box')) {
        productBox = productBox.parentNode; // Traverse up until product-info class is found
    }

    if (productBox) {
        var productInfo = productBox.querySelector(".product-info");

        var productTitle = productInfo.querySelector(".product-title");
        var title = productTitle.innerText;
        
        var productPrice = productInfo.querySelector(".product-price");
        var price = productPrice.innerText;

        var productImg = productBox.querySelector(".product-image").src;
        addProductToCart(title, price, productImg);
        updateTotal();
    }
}

function addProductToCart(title, price, productImg) {
    var cartContent = document.querySelector(".cart-content");
    var cartBox = document.createElement("div");
    cartBox.classList.add("cart-box");

    var img = document.createElement("img");
    img.src = productImg;
    img.alt = title;
    img.classList.add("cart-img");
    cartBox.appendChild(img);

    var detailBox = document.createElement("div");
    detailBox.classList.add("detail-box");

    var cartProductTitle = document.createElement("div");
    cartProductTitle.classList.add("cart-product-title");
    cartProductTitle.textContent = title;
    detailBox.appendChild(cartProductTitle);

    var cartPrice = document.createElement("div");
    cartPrice.classList.add("cart-price");
    cartPrice.textContent = price;
    detailBox.appendChild(cartPrice);

    var quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.value = 1;
    quantityInput.classList.add("cart-quantity");
    quantityInput.setAttribute("title", "quantity");
    quantityInput.placeholder = "";
    quantityInput.addEventListener("change", function() {
        quantityChanged(this);
    });
    detailBox.appendChild(quantityInput);

    cartBox.appendChild(detailBox);

    var removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.classList.add("cart-remove");
    removeButton.setAttribute("aria-label", "Remove item from cart");
    removeButton.addEventListener("click", function() {
        removeCartItem(this);
    });

    var removeIcon = document.createElement("i");
    removeIcon.classList.add("bx", "bxs-trash");
    removeButton.appendChild(removeIcon);
    cartBox.appendChild(removeButton);

    cartContent.appendChild(cartBox);
}

 function updateTotal() {
    var cartBoxes = document.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);

        total = Math.round(total * 100) / 100;
    }

    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
 }