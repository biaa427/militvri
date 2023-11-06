/* hamburger menu */

$(document).ready(function() {
    $(".toggle-box").click(function(e) {
        e.stopPropagation(); // Prevents the click event from propagating to parent elements
        $(".menu").stop().slideToggle();
    });

    // Check window width and handle menu item clicks
    $(".menu li a").click(function() {
        if ($(window).width() < 1100) {
            $(".menu").slideUp(); // Closes the menu when a menu item is clicked on smaller screens
        }
    });

});

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
        serial_no: "135"
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: 'product-2.jpeg',
        price: 29,
        serial_no: "222"
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: 'product-3.jpeg',
        price: 29,
        serial_no: "210"
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: 'product-4.jpeg',
        price: 29,
        serial_no: "658"
    },
];

let cart = [];

function loadProducts() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('product');
        newDiv.innerHTML = `
        <div class="product-box" id="${value.serial_no}">
        <img src="images//${value.image}" alt="" class="product-image" style="cursor: pointer" onclick="openProduct(this)">
            <div class="product-info">
                <h4 class="product-title">${value.name}</h4>
                <p class="product-price">${value.price} RON</p>
                <p class="product-serial-no" style="display: none">${value.serial_no}</p>
                <button type="button" class="product-btn" onclick="addCartClicked(this)">Add To Cart</button>
                
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

    var brightSide = document.querySelector(".bright-side");
    var navigation = document.querySelector(".navigation");
    brightSide.style.width = "calc(100% - 360px)";
    navigation.style.width = "calc(100% - 360px)";
};

function closeCart() {
    const cart = document.querySelector('.cart');
    cart.classList.remove("active");

    var brightSide = document.querySelector(".bright-side");
    var navigation = document.querySelector(".navigation");
    brightSide.style.width = "100%";
    navigation.style.width = "100%";
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

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeCartItem(buttonClicked) {
    // Find the index of the cart box in the cart content
    var cartContent = document.querySelector(".cart-content");
    const cartItem = buttonClicked.parentElement;
    const index = Array.from(cartContent.children).indexOf(cartItem);

    // Remove the item from the cart array
    cart.splice(index, 1);

    // Remove the cart box from the cart content
    cartItem.remove();

    saveCartToLocalStorage();

    buttonClicked.parentElement.remove();
    updateTotal();
    cartCountItems();
    checkCartItems();
 }

 function quantityChanged(q) {
    if (isNaN(q.value) || q.value < 1) {
        q.value = 1;
    }
    updateTotal();
    cartCountItems();

    var detailBox = q.parentElement;
    var cartSerialNo = detailBox.querySelector('.cart-serial-no');
    var serialNumber = cartSerialNo.textContent;

    const cartProductIndex = cart.findIndex(product => product.serial_no === parseInt(serialNumber, 10));
    if (cartProductIndex !== -1) {
        cart[cartProductIndex].quantity = parseInt(q.value, 10);
    }

    // Save the updated cart array in localStorage or perform other necessary operations
    localStorage.setItem('cart', JSON.stringify(cart));
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

        var product_serial_no = productInfo.querySelector(".product-serial-no");
        var serial_no = product_serial_no.innerText;

        var productImg = productBox.querySelector(".product-image").src;
        addProductToCart(title, price, productImg, serial_no);
        updateTotal();
        cartCountItems();
        checkCartItems();
    }

    openCart();
}

function addProductToCart(title, price, productImg, serial_no) {

    var cartContent = document.querySelector('.cart-content');
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
    
    var cartSerialNo = document.createElement("div");
    cartSerialNo.classList.add("cart-serial-no");
    cartSerialNo.style.display = "none";
    cartSerialNo.textContent = serial_no;
    detailBox.appendChild(cartSerialNo);
    
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
    
    var sizeOptionXS = document.createElement("option");
    sizeOptionXS.value = "XS";
    sizeOptionXS.innerText = "XS";
    
    var sizeOptionS = document.createElement("option");
    sizeOptionS.value = "S";
    sizeOptionS.innerText = "S";
    
    var sizeOptionM = document.createElement("option");
    sizeOptionM.value = "M";
    sizeOptionM.innerText = "M";
    
    var sizeOptionL = document.createElement("option");
    sizeOptionL.value = "L";
    sizeOptionL.innerText = "L";
    
    var sizeOptionXL = document.createElement("option");
    sizeOptionXL.value = "XL";
    sizeOptionXL.innerText = "XL";
    
    var sizeInput = document.createElement("select");
    sizeInput.classList.add("cart-size");
    sizeInput.appendChild(sizeOptionXS);
    sizeInput.appendChild(sizeOptionS);
    sizeInput.appendChild(sizeOptionM);
    sizeInput.appendChild(sizeOptionL);
    sizeInput.appendChild(sizeOptionXL);
    detailBox.appendChild(sizeInput);
    
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

    cartContent.appendChild(cartBox); // Append the product details to the cart content

    const product = {
        title: title,
        price: price,
        serial_no: serial_no,
        image: productImg,
        quantity: 1, // Initialize quantity to 1
    };
    cart.push(product);

    saveCartToLocalStorage(); // Save the updated cart to localStorage

    displayCartItems(); // Refresh the cart display
}


 function updateTotal() {
    var cartBoxes = document.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace(" RON", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);

        total = Math.round(total * 100) / 100;
    }

    document.getElementsByClassName("total-price")[0].innerText = total + " RON";
 }

function buynow() {
    // window.location.href = "cart.html" -on the same page
    window.open('cart.html', '_blank'); // new page
}

function openProduct(img) {
    var productBox = img.parentNode; // Get the immediate parent container

    while (productBox && !productBox.classList.contains('product-box')) {
        productBox = productBox.parentNode; // Traverse up until product-info class is found
    }

    var id = productBox.id;

    window.location.href = "product.html?sn=" + id;
}

function checkCartItems() {
    var cartContent = document.querySelector(".cart-content");
    var logoCartImg = document.querySelector(".logo-cart");
    var sharedContainer = document.querySelector(".shared-container");
    var navigation = sharedContainer.querySelector(".navigation");
    var logoCart = navigation.querySelector(".logo-cart");
    var cartBtn = navigation.querySelector(".cart-btn");

    if (cartContent !== null) {
        if (cartContent.children.length > 0) {
            logoCartImg.src = "images/logo-cart-full-black.png";
            logoCart.style.setProperty("content", "url(../images/logo-cart-full-black.png)")
            cartBtn.style.padding = "0.2rem 0.93rem";
        } else {
            logoCartImg.src = "images/logo-cart-empty-black.png";
            logoCart.style.setProperty("content", "url(../images/logo-cart-empty-black.png)")
            cartBtn.style.padding = "0.5rem 0.93rem";
        }
    }
}

function cartCountItems() {
    // Select the cart content element
    var cartContent = document.querySelector('.cart-content');

    // Select the cart count element
    var cartCount = document.querySelector('.cart-count');
    var count = 0;

    // Select all divs with the class "cart-box" within the cart content
    var cartBoxes = cartContent.querySelectorAll('.cart-box');
    for (var i = 0; i < cartBoxes.length; i++) { 
        var itemQuantity = parseInt(cartBoxes[i].querySelector(".cart-quantity").value, 10);
        count = count + itemQuantity;
    }
    // Update the cart count element with the number of items
    cartCount.textContent = count;
}

// Display cart items based on the serial numbers
function displayCartItems() {
    const cartContent = document.querySelector(".cart-content");

    cart.forEach(cartProduct => {
        const foundProduct = products.find(product => product.serial_no === cartProduct.serial_no);

        if (foundProduct) {
            if (cartContent !== null) {
                var cartBox = document.createElement("div");
                cartBox.classList.add("cart-box");
    
                var img = document.createElement("img");
                img.src = "images/" + foundProduct.image;
                img.alt = foundProduct.name;
                img.classList.add("cart-img");
                cartBox.appendChild(img);
    
                var detailBox = document.createElement("div");
                detailBox.classList.add("detail-box");
    
                var cartProductTitle = document.createElement("div");
                cartProductTitle.classList.add("cart-product-title");
                cartProductTitle.textContent = foundProduct.name;
                detailBox.appendChild(cartProductTitle);
    
                var cartPrice = document.createElement("div");
                cartPrice.classList.add("cart-price");
                cartPrice.textContent = foundProduct.price;
                detailBox.appendChild(cartPrice);
    
                var cartSerialNo = document.createElement("div");
                cartSerialNo.classList.add("cart-serial-no");
                cartSerialNo.style.display = "none";
                cartSerialNo.textContent = foundProduct.serial_no;
                detailBox.appendChild(cartSerialNo);
    
                var quantityInput = document.createElement("input");
                quantityInput.type = "number";
                quantityInput.value = cartProduct.quantity || 1;
                quantityInput.classList.add("cart-quantity");
                quantityInput.setAttribute("title", "quantity");
                quantityInput.placeholder = "";
                quantityInput.addEventListener("change", function() {
                    quantityChanged(this);
                });
                detailBox.appendChild(quantityInput);
    
                var sizeOptionXS = document.createElement("option");
                sizeOptionXS.value = "XS";
                sizeOptionXS.innerText = "XS";
    
                var sizeOptionS = document.createElement("option");
                sizeOptionS.value = "S";
                sizeOptionS.innerText = "S";
    
                var sizeOptionM = document.createElement("option");
                sizeOptionM.value = "M";
                sizeOptionM.innerText = "M";
    
                var sizeOptionL = document.createElement("option");
                sizeOptionL.value = "L";
                sizeOptionL.innerText = "L";
    
                var sizeOptionXL = document.createElement("option");
                sizeOptionXL.value = "XL";
                sizeOptionXL.innerText = "XL";
    
                var sizeInput = document.createElement("select");
                sizeInput.classList.add("cart-size");
                sizeInput.appendChild(sizeOptionXS);
                sizeInput.appendChild(sizeOptionS);
                sizeInput.appendChild(sizeOptionM);
                sizeInput.appendChild(sizeOptionL);
                sizeInput.appendChild(sizeOptionXL);
                detailBox.appendChild(sizeInput);
    
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
    
                cartContent.appendChild(cartBox); // Append the product details to the cart content
            }
        }
    });
}

window.onload = function() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        displayCartItems();
        //checkCartItems();
        cartCountItems();
    }
}
8