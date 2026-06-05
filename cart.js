fetch("header.html")
.then(response => response.text())
.then(data => {
    document.getElementById("header").innerHTML = data;
});

fetch("footer.html")
.then(response => response.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;
});


let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItems = document.getElementById("cart-items");
let total = 0;

cart.forEach(item => {
    total += item.price;

    cartItems.innerHTML += `
        <div class="cart-box">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
        </div>
    `;
});

document.getElementById("total").innerText = "Total: ₹" + total;

function addToCart(name, price){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert("Product Added To Cart");
}

function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = document.getElementById("cart-count");
    if(count){
        count.innerText = cart.length;
    }
}

updateCartCount();

function addToCart(name, price, image, desc){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let product = {
        name: name,
        price: price,
        image: image,
        desc: desc,
        qty: 1
    };

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product Added To Cart");
}

