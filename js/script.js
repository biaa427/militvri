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

/* send mail */

function sendemail() {
    // Gather form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('msg').value;

    // Simple client-side validation
    if (!firstName || !lastName || !email || !phoneNumber || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Prepare data to send to the server
    const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        message: message
    };

    // Send data to the server using XMLHttpRequest or fetch API
    // Here, I'm assuming you have a server-side script named 'sendEmail.php'
    fetch('sendEmail.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

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

let listBrightFeatured = document.querySelector('.all-products-bright');

let listDarkFeatured = document.querySelector(".all-products-dark");

let sizes = [
    { id: 1, size: "XS"},
    { id: 2, size: "S"},
    { id: 3, size: "M"},
    { id: 4, size: "L"},
    { id: 5, size: "XL"}
]

let featuredProducts_bright = [
    { id: 1, name: 'ADDICTION', image: 'addiction f.jpg', price: 29, serial_no: "1", category: "tshirt", hoverImage: 'images/addiction s-1.jpg'},
    { id: 2, name: 'BALAKLAVA', image: 'balaklavaalb f.jpg', price: 29, serial_no: "2", category: "hoodie", hoverImage: 'images/balaklavaalb s-2.jpg'},
    { id: 3, name: 'BANKNOTE', image: 'banknotealb f.jpg', price: 29, serial_no: "3", category: "tshirt", hoverImage: 'images/banknotealb s-3.jpg'}
];

let featuredProducts_dark = [
    { id: 1, name: 'BALAKLAVA', image: 'balaklavablk f.jpg', price: 29, serial_no: "10", category: "hoodie", hoverImage: 'images/balaklavablk s-10.jpg'},
    { id: 2, name: 'BANKNOTE', image: 'banknoteblk f.jpg', price: 29, serial_no: "11", category: "tshirt", hoverImage: 'images/banknoteblk s-11.jpg'},
    { id: 3, name: 'BLOW', image: 'blow f.jpg', price: 29, serial_no: "12", category: "hoodie", hoverImage: 'images/blow s-12.jpg'}
];

let products = [
    { id: 1, name: 'ADDICTION', image: 'addiction f.jpg', price: 29, serial_no: "1", category: "tshirt", hoverImage: 'addiction s-1.jpg'},
    { id: 2, name: 'BALAKLAVA', image: 'balaklavaalb f.jpg', price: 29, serial_no: "2", category: "hoodie", hoverImage: 'balaklavaalb s-2.jpg'},
    { id: 3, name: 'BANKNOTE', image: 'banknotealb f.jpg', price: 29, serial_no: "3", category: "tshirt", hoverImage: 'banknotealb s-3.jpg'},
    { id: 4, name: 'CRIMINALREC', image: 'criminalrecalb f.jpg', price: 29, serial_no: "4", category: "hoodie", hoverImage: 'ciminalrecalb s-4.jpg'},
    { id: 5, name: 'EYE', image: 'eye f.jpg', price: 29, serial_no: "5", category: "hoodie", hoverImage: 'eye s-5.jpg'},
    { id: 6, name: 'GETEM', image: 'getemalb f.jpg', price: 29, serial_no: "6", category: "tshirt", hoverImage: 'getemalb s-6.jpg'},
    { id: 7, name: 'SELL', image: 'sellalb f.jpg', price: 29, serial_no: "7", category: "tshirt", hoverImage: 'sellalb s-7.jpg'},
    { id: 8, name: 'SNAKEROSE', image: 'snakerose f.jpg', price: 29, serial_no: "8", category: "hoodie", hoverImage: 'snakerose s-8.jpg'},
    { id: 9, name: 'UZZI', image: 'uzzialb f.jpg', price: 29, serial_no: "9", category: "tshirt", hoverImage: 'uzzialb s-9.jpg'},
    { id: 10, name: 'INFINITY', image: 'infinity f.jpg', price: 29, serial_no: "21", category: "tshirt", hoverImage: 'infinity s-21.jpg'}
];

let products_sizes = [
    { id: 2, productid: 1, sizeid: 2},
    { id: 3, productid: 1, sizeid: 3},
    { id: 4, productid: 1, sizeid: 4},
    { id: 5, productid: 1, sizeid: 5},
    { id: 6, productid: 2, sizeid: 1},
    { id: 8, productid: 2, sizeid: 3},
    { id: 9, productid: 2, sizeid: 4},
    { id: 10, productid: 2, sizeid: 5},
    { id: 13, productid: 3, sizeid: 3},
    { id: 15, productid: 3, sizeid: 5},
    { id: 16, productid: 4, sizeid: 1},
    { id: 18, productid: 4, sizeid: 3},
    { id: 19, productid: 4, sizeid: 4},
    { id: 20, productid: 4, sizeid: 5}
];



let productsDark = [
    { id: 1, name: 'BALAKLAVA', image: 'balaklavablk f.jpg', price: 29, serial_no: "12", category: "hoodie", hoverImage: 'balaklavablk s-10.jpg'},
    { id: 2, name: 'BANKNOTE', image: 'banknoteblk f.jpg', price: 29, serial_no: "11", category: "tshirt", hoverImage: 'banknoteblk s-11.jpg'},
    { id: 3, name: 'BLOW', image: 'blow f.jpg', price: 29, serial_no: "12", category: "hoodie", hoverImage: 'blow s-12.jpg'},
    { id: 4, name: 'CHROME', image: 'chrome f.jpg', price: 29, serial_no: "13", category: "tshirt", hoverImage: 'chrome s-13.jpg'},
    { id: 5, name: 'CRIMINALREC', image: 'criminalrec f.jpg', price: 29, serial_no: "14", category: "hoodie", hoverImage: 'criminalrec s-14.jpg'},
    { id: 6, name: 'FVCKYALL', image: 'fvckyall f.jpg', price: 29, serial_no: "15", category: "hoodie", hoverImage: 'fvckyall s-15.jpg'},
    { id: 7, name: 'GETEM', image: 'getemblk f.jpg', price: 29, serial_no: "16", category: "tshirt", hoverImage: 'getemblk s-16.jpg'},
    { id: 8, name: 'SELL', image: 'sellblk f.jpg', price: 29, serial_no: "17", category: "tshirt", hoverImage: 'sellblk s-17.jpg'},
    { id: 9, name: 'STREETASSETS', image: 'streetassets f.jpg', price: 29, serial_no: "18", category: "tshirt", hoverImage: 'streetassets s-18.jpg'},
    { id: 10, name: 'UZZI', image: 'uzziblk f.jpg', price: 29, serial_no: "19", category: "tshirt", hoverImage: 'uzziblk s-19.jpg'},
    { id: 11, name: 'WATCHEDOUT', image: 'watchedout f.jpg', price: 29, serial_no: "20", category: "tshirt", hoverImage: 'watchedout s-20.jpg'}
];

let cart = [];

function loadProductsDark() {
    featuredProducts_dark.forEach((value, key) => {
        let newDivDark = document.createElement('div');
        newDivDark.classList.add('product');
        newDivDark.innerHTML = `
        <div class="product-box" id="${value.serial_no}" onmouseover="changeImage(this, '${value.hoverImage}')" onmouseout="resetImage(this, 'images/${value.image}')">
        <img src="images//${value.image}" alt="" class="product-image" style="cursor: pointer" onclick="openProductFeatured(this)">
            <div class="product-info">
                <h4 class="product-title">${value.name}</h4>
                <p class="product-price">${value.price} RON</p>
                <p class="product-serial-no" style="display: none">${value.serial_no}</p>
                <button type="button" class="product-btn" onclick="buyItem(this)">Buy Now</button>
                
            </div>
        </div>
        `;

        listDarkFeatured.appendChild(newDivDark);
    })

    displayProductsDark(productsDark);
}


function changeImage(element, newImage) {
    element.querySelector('.product-image').src = newImage;
}

function resetImage(element, originalImage) {
    element.querySelector('.product-image').src = originalImage;
}

function loadProducts() {
    // Function to get the available sizes for a given product
    function getAvailableSizes(productId) {
        const productSizes = products_sizes.filter(ps => ps.productid === productId);
        const availableSizes = productSizes.map(ps => sizes.find(size => size.id === ps.sizeid)?.size);
        return availableSizes.filter(Boolean).join(', '); // Filter out undefined sizes and join them
    }

    // Function to generate product HTML
    function generateProductHTML(product, sizes) {
        return `
        <div class="product-box" id="${product.serial_no}" onmouseover="changeImage(this, '${product.hoverImage}')" onmouseout="resetImage(this, 'images/${product.image}')">
            <img id="hoverImage" src="images//${product.image}" alt="" class="product-image" style="cursor: pointer" 
                    onclick="openProductFeatured(this)">
            <div class="product-info">
                <h4 class="product-title">${product.name}</h4>
                <p class="product-price">${product.price} RON</p>
                <p class="product-serial-no" style="display: none">${product.serial_no}</p>
                <p class="product-size">Available sizes: ${sizes}</p>
                <button type="button" class="product-btn" onclick="buyItem(this)">Buy Now</button>
            </div>
        </div>`;
    }

    

    // Display bright products
    featuredProducts_bright.forEach(product => {
        const availableSizes = getAvailableSizes(product.id);
        if (availableSizes) {
            let newDivBright = document.createElement('div');
            newDivBright.classList.add('product');
            newDivBright.innerHTML = generateProductHTML(product, availableSizes);

            listBrightFeatured.appendChild(newDivBright);
        }
    });

    displayProducts(products);
}


/* CART */

function openCart() {
    const cart = document.querySelector('.cart');
    cart.classList.add("active");
    
    var brightSide = document.querySelector(".bright-side");
    var navigation = document.querySelector(".navigation");
    //brightSide.style.width = "calc(100% - 360px)";
    navigation.style.width = "calc(100% - 360px)";
};

function closeCart() {
    const cart = document.querySelector('.cart');
    cart.classList.remove("active");

    var brightSide = document.querySelector(".bright-side");
    var navigation = document.querySelector(".navigation");
    //brightSide.style.width = "100%";
    navigation.style.width = "100%";
};

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
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

    var sizeInputs = document.getElementsByClassName("cart-size");
    for (var l = 0; l < sizeInputs; l++) {
        var inputSize = sizeInputs[l];
        inputSize.addEventListener("change", sizeChanged);
    }

    var addCart = document.getElementsByClassName("product-btn");
    for (var k = 0; k < addCart.length; k++) {
        var buttonAdd = addCart[k];
        buttonAdd.addEventListener("click", addCartClicked);
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

 function sizeChanged(x) {
    if (x.value === 0) {

    }

    if (x.classList == "cart-size") {
        var detailBox = x.parentElement;
        var cartSerialNo = detailBox.querySelector('.cart-serial-no');
        var serialNumber = cartSerialNo.textContent;
    }

    const cartProductIndex = cart.findIndex(product => product.serial_no === serialNumber);
    if (cartProductIndex !== -1) {
        cart[cartProductIndex].size = x.value;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
 }

 function quantityChanged(q) {
    if (isNaN(q.value) || q.value < 1) {
        q.value = 1;
    }
    updateTotal();
    cartCountItems();

    if (q.classList == "cart-quantity") {
        var detailBox = q.parentElement;
        var cartSerialNo = detailBox.querySelector('.cart-serial-no');
        var serialNumber = cartSerialNo.textContent;
    }
    

    const cartProductIndex = cart.findIndex(product => product.serial_no === serialNumber);
    if (cartProductIndex !== -1) {
        cart[cartProductIndex].quantity = parseInt(q.value, 10);
    }

    // Save the updated cart array in localStorage or perform other necessary operations
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addCartClicked(buttonAdd) {
    var productBox = buttonAdd.parentElement;
    while (productBox && !productBox.classList.contains('product-box')) {
        productBox = productBox.parentElement;
    }

    if (productBox) {
        var productTitle = productBox.querySelector('.product-title').innerText;
        var productPrice = productBox.querySelector('.product-price').innerText;
        var productSerial = productBox.querySelector('.product-serial-no').innerText;
        var productImg = productBox.querySelector('.product-image').src;

        addProductToCart(productTitle, productPrice, productImg, productSerial, 1);
        updateTotal();
        cartCountItems();
        checkCartItems();

        openCart();
    }
}

function addProductToCart(title, price, productImg, serial_no, quantity) {

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
    quantityInput.value = quantity;
    quantityInput.classList.add("cart-quantity");
    quantityInput.setAttribute("title", "quantity");
    quantityInput.placeholder = "";
    quantityInput.addEventListener("change", function() {
        quantityChanged(this);
    });
    detailBox.appendChild(quantityInput);
    
    var sizeOptionSelect = document.createElement("option");
    sizeOptionSelect.value = "0";
    sizeOptionSelect.innerText = "Select size";

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
    sizeInput.appendChild(sizeOptionSelect);
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
        quantity: quantity, 
        size: 0,
    };
    cart.push(product);

    saveCartToLocalStorage(); // Save the updated cart to localStorage

    // Clear the cart content to avoid displaying all items
    document.querySelector('.cart-content').innerHTML = '';
    
    // Display the items in the cart from local storage
    displayCartItems();
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

function buyItem(e) {
    var productBox = e.parentNode; // Get the immediate parent container

    while (productBox && !productBox.classList.contains('product-box')) {
        productBox = productBox.parentNode; // Traverse up until product-info class is found
    }

    var id = productBox.id;

    window.open('product.html?sn=' + id, '_blank');
}

function openProductFeatured(img) {
    var productBox = img.parentNode; // Get the immediate parent container

    while (productBox && !productBox.classList.contains('product-box')) {
        productBox = productBox.parentNode; // Traverse up until product-info class is found
    }

    var id = productBox.id;

    window.location.href = "product.html?sn=" + id;
}

function openProduct(img) {
    var productBox = img.parentNode; // Get the immediate parent container

    while (productBox && !productBox.classList.contains('product-item')) {
        productBox = productBox.parentNode; // Traverse up until product-item class is found
    }

    var id = productBox.id;

    window.location.href = "product.html?sn=" + id;
}

function checkCartItems() {
    var cartContent = document.querySelector(".cart-content");
    var logoCartImg = document.querySelector(".logo-cart");
    var cartBtn = document.querySelector(".cart-btn");

    if (cartContent !== null) {
        if (cartContent.children.length > 0) {
            logoCartImg.src = "images/logo-cart-full-black.png";
            logoCartImg.style.setProperty("content", "url(../images/logo-cart-full-black.png)")
            cartBtn.style.padding = "0.2rem 0.93rem";
        } else {
            logoCartImg.src = "images/logo-cart-empty-black.png";
            logoCartImg.style.setProperty("content", "url(../images/logo-cart-empty-black.png)")
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
    cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach(cartProduct => {
        const foundProduct = products.find(product => product.serial_no === cartProduct.serial_no);

        if (foundProduct) {
            if (cartContent) {
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
                cartPrice.textContent = foundProduct.price + " RON";
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
    
                var sizeOptionSelect = document.createElement("option");
                sizeOptionSelect.value = "0";
                sizeOptionSelect.innerText = "Select size";
                if (cartProduct.size === 0) {
                    sizeOptionSelect.selected = true;
                }

                var sizeOptionXS = document.createElement("option");
                sizeOptionXS.value = "XS";
                sizeOptionXS.innerText = "XS";
                if (cartProduct.size == "XS") {
                    sizeOptionXS.selected = true;
                }
    
                var sizeOptionS = document.createElement("option");
                sizeOptionS.value = "S";
                sizeOptionS.innerText = "S";
                if (cartProduct.size === "S") {
                    sizeOptionS.selected = true;
                }
    
                var sizeOptionM = document.createElement("option");
                sizeOptionM.value = "M";
                sizeOptionM.innerText = "M";
                if (cartProduct.size === "M") {
                    sizeOptionM.selected = true;
                }
    
                var sizeOptionL = document.createElement("option");
                sizeOptionL.value = "L";
                sizeOptionL.innerText = "L";
                if (cartProduct.size === "L") {
                    sizeOptionL.selected = true;
                }
    
                var sizeOptionXL = document.createElement("option");
                sizeOptionXL.value = "XL";
                sizeOptionXL.innerText = "XL";
                if (cartProduct.size === "XL") {
                    sizeOptionXL.selected = true;
                }
    
                var sizeInput = document.createElement("select");
                sizeInput.classList.add("cart-size");
                sizeInput.setAttribute("title", "size");
                
                sizeInput.appendChild(sizeOptionSelect);
                sizeInput.appendChild(sizeOptionXS);
                sizeInput.appendChild(sizeOptionS);
                sizeInput.appendChild(sizeOptionM);
                sizeInput.appendChild(sizeOptionL);
                sizeInput.appendChild(sizeOptionXL);
                sizeInput.addEventListener("change", function() {
                    sizeChanged(this);
                });
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
    
                cartContent.appendChild(cartBox);

                checkCartItems();
                cartCountItems();
            }  
        }

        
    });
}

window.addEventListener("load", displayCartItems);

/* product page */


// Get the full URL
const url = window.location.href;
var sn = 0;

// Parse the URL to extract the 'sn' parameter value
const urlParts = url.split('?');
if (urlParts.length > 1) {
    const params = urlParts[1].split('&');
    for (const param of params) {
        const [key, value] = param.split('=');
        if (key === 'sn') {
            sn = decodeURIComponent(value);
            break;
        }
    }
}

// Find the product with the matching serial number
const productWithSN = products.find(product => product.serial_no === sn);

if (productWithSN) {
    //var productImg = document.querySelector(".image-left");
    var imageLeft = document.querySelector(".detailPage-gallery");
    var productImg = document.createElement("img");
    productImg.setAttribute("id", "productImg");
    productImg.src = "images/" + productWithSN.image;
    productImg.setAttribute("alt", "");
    imageLeft.appendChild(productImg);
    
    var details = document.querySelector(".product-info");
    var titleProduct = document.createElement("h1");
    titleProduct.innerHTML = productWithSN.name;
    details.appendChild(titleProduct);

    var priceProduct = document.createElement("h2");
    priceProduct.innerHTML = productWithSN.price + " RON";
    details.appendChild(priceProduct);

    var description = document.createElement("p");
    description.innerHTML = "Elevate your casual wardrobe with our Classic Comfort Tee. Crafted with premium, ultra-soft cotton, this versatile t-shirt offers a perfect blend of comfort and style.";
    details.appendChild(description);

    let btnImages = document.getElementsByClassName("imgBtn");

    btnImages[0].onclick = function() {
        productImg.src = "images/" + productWithSN.image;
        for (bt of btnImages) {
            bt.classList.remove("active");
        }
        this.classList.add("active");
    }
    btnImages[1].onclick = function() {
        let currentImage = productWithSN.image;
        const baseName = currentImage.substring(0, currentImage.lastIndexOf(" "));
        const extension = currentImage.substring(currentImage.lastIndexOf("."));
        currentImage = baseName + " s-" + productWithSN.serial_no + extension;
        
        productImg.src = "images/" + currentImage;
        
        for (bt of btnImages) {
            bt.classList.remove("active");
        }
        this.classList.add("active");

        
    }
} else {
    
}

function addToCart(btnClicked) {
    if (productWithSN) {
        var productTitle = document.querySelector(".product-info h1");
        var productPrice = document.querySelector(".product-info h2");
        var productImg = document.querySelector(".detailPage-gallery img");
        var productQuantity = document.querySelector(".quantity-select input").value;

        addProductToCart(productTitle.innerText, productPrice.innerText, productImg.src, productWithSN.serial_no, productQuantity);
        updateTotal();
        cartCountItems();
        checkCartItems();

        openCart();
    }
}

/* list all products */

// Sample product data (replace this with your actual data)


function displayProducts(productsToDisplay) {
    const productListContainer = document.getElementById('product-list');
    productListContainer.innerHTML = ''; // Clear existing content

    // Function to get the available sizes for a given product
    function getAvailableSizes(productId) {
        const productSizes = products_sizes.filter(ps => ps.productid === productId);
        const availableSizes = productSizes.map(ps => sizes.find(size => size.id === ps.sizeid)?.size);
        return availableSizes.filter(Boolean).join(', '); // Filter out undefined sizes and join them
    }

    productsToDisplay.forEach(product => {
        const availableSizes = getAvailableSizes(product.id);

        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.id = product.serial_no;

        productItem.innerHTML = `
            <img src="images//${product.image}" alt="" class="product-image" style="cursor: pointer">
            <h3>${product.name}</h3>
            <p>Price: ${product.price} RON</p>
            <p>Available sizes: ${availableSizes}</p>
        `;

        // Add event listeners inside the loop for each product
        productItem.addEventListener('mouseenter', function () {
            changeImage(productItem, `images/${product.hoverImage}`);
        });

        productItem.addEventListener('mouseleave', function () {
            resetImage(productItem, `images/${product.image}`);
        });

        productItem.addEventListener('click', function () {
            openProduct(productItem.querySelector('.product-image'));
        });

        productListContainer.appendChild(productItem);
    });

    countProducts();
}

function displayProductsDark(productsToDisplay) {
    const productListContainer = document.getElementById('product-list-dark');
    productListContainer.innerHTML = ''; // Clear existing content

    productsToDisplay.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item-dark');
        productItem.innerHTML = `
        <img src="images//${product.image}" alt="" class="product-image" style="cursor: pointer">
            <h3>${product.name}</h3>
            
            <p>Price: ${product.price} RON</p>
            <p>Size: ${product.size}</p>
        `;

        // Add event listeners inside the loop for each product
        productItem.addEventListener('mouseenter', function () {
            changeImage(productItem, `images/${product.hoverImage}`);
        });

        productItem.addEventListener('mouseleave', function () {
            resetImage(productItem, `images/${product.image}`);
        });

        productListContainer.appendChild(productItem);
    });

    countProductsDark();
}

// Check if the page is brightside.html
const isBrightside = window.location.pathname.includes('brightside.html');
const isDarkside = window.location.pathname.includes('darkside.html');

if (isBrightside) {
    // Attach event listeners for brightside.html
    document.getElementById('category-filter').addEventListener('change', () => {
        try {
            filterProducts(products, products_sizes, 'category-filter', 'price-range-filter', 'size-filter', displayProducts);
        } catch (error) {
            console.error('Error filtering products:', error);
        }
    });

    document.getElementById('price-range-filter').addEventListener('change', () => {
        try {
            filterProducts(products, products_sizes, 'category-filter', 'price-range-filter', 'size-filter', displayProducts);
        } catch (error) {
            console.error('Error filtering products:', error);
        }
    });

    document.getElementById('size-filter').addEventListener('change', () => {
        try {
            filterProducts(products, products_sizes, 'category-filter', 'price-range-filter', 'size-filter', displayProducts);
        } catch (error) {
            console.error('Error filtering products:', error);
        }
    });
} else if (isDarkside) {
    // Attach event listeners for darkside.html
    document.getElementById('category-filter-dark').addEventListener('change', () => {
        try {
            filterProducts(productsDark, products_sizes, 'category-filter-dark', 'price-range-filter-dark', 'size-filter-dark', displayProductsDark);
        } catch (error) {
            console.error('Error filtering products:', error);
        }
    });

    document.getElementById('price-range-filter-dark').addEventListener('change', () => {
        try {
            filterProducts(productsDark, products_sizes, 'category-filter-dark', 'price-range-filter-dark', 'size-filter-dark', displayProductsDark);
        } catch (error) {
            console.error('Error filtering products:', error);
        }
    });

    document.getElementById('size-filter-dark').addEventListener('change', () => {
        try {
            filterProducts(productsDark, products_sizes, 'category-filter-dark', 'price-range-filter-dark', 'size-filter-dark', displayProductsDark);
        } catch (error) {
            console.error('Error filtering products:', error);
        }
    });
}
else {

}


function filterProducts(productsArray, sizesArray, categoryFilterId, priceRangeFilterId, sizeFilterId, displayFunction) {
    const categoryCheckboxes = document.querySelectorAll(`#${categoryFilterId} input:checked`);
    const priceRangeCheckboxes = document.querySelectorAll(`#${priceRangeFilterId} input:checked`);
    const sizeCheckboxes = document.querySelectorAll(`#${sizeFilterId} input:checked`);

    // Extract values from checked checkboxes
    const selectedCategories = Array.from(categoryCheckboxes).map(checkbox => checkbox.title);
    const selectedPriceRanges = Array.from(priceRangeCheckboxes).map(checkbox => checkbox.title);
    const selectedSizes = Array.from(sizeCheckboxes).map(checkbox => checkbox.title);

    // Apply filters to the products
    const filteredProducts = productsArray.filter(product => {
        const productSizes = sizesArray.filter(ps => ps.productid === product.id);

        return (
            (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
            (selectedPriceRanges.length === 0 || selectedPriceRanges.some(range => checkPriceRange(product.price, range))) &&
            (selectedSizes.length === 0 || selectedSizes.some(size => productSizes.some(ps => ps.sizeid === sizes.find(s => s.size === size).id)))
        );
    });

    // Update the displayed product list using the provided display function
    displayFunction(filteredProducts);
}

function checkPriceRange(price, range) {
    const [min, max] = range.split('-');
    return price >= parseInt(min, 10) && price <= parseInt(max, 10);
}

function countProducts() {
    var count = 0;
    var products = document.querySelectorAll(".product-item");
    count = products.length;
    var productsCount = document.querySelector(".productsCount");
    productsCount.innerText = count + " products";
}

function countProductsDark() {
    var count = 0;
    var products = document.querySelectorAll(".product-item-dark");
    count = products.length;
    var productsCount = document.querySelector(".productsCount-dark");
    productsCount.innerText = count + " products";
}