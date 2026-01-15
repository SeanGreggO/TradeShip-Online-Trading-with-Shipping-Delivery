function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price) {
    const user = localStorage.getItem("currentUser");
    if (!user) {
        alert("Please log in first");
        window.location.href = "login.html";
        return;
    }

    const cart = getCart();
    cart.push({ name, price });
    saveCart(cart);
    updateCartCount();
    alert(name + " added to cart!");
}

function updateCartCount() {
    const count = getCart().length;
    const el = document.getElementById("cartCount");
    if (el) el.innerText = count;
}