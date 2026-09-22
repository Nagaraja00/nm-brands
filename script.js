let cartCount = 0;


// ADD TO CART
function addToCart(productName) {

    cartCount++;

    document.getElementById("cart-count").textContent = cartCount;

    alert(productName + " added to cart!");
}


// SUBSCRIBE
function subscribe() {

    let email = document.getElementById("email").value;

    if (email === "") {

        alert("Please enter your email.");

    } else {

        alert("Thank you for subscribing to NM Brands!");

        document.getElementById("email").value = "";
    }
}