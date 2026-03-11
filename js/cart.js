let cart = JSON.parse(localStorage.getItem('gaskeun_cart')) || [];

function addToCart(menuId, name, price) {
    const existing = cart.find(item => item.id === menuId);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ id: menuId, name: name, price: price, qty: 1 });
    }
    saveCart();
    updateCartBadge();
    showToast(`${name} masuk keranjang!`);
}

function saveCart() {
    localStorage.setItem('gaskeun_cart', JSON.stringify(cart));
}

function updateCartBadge() {
    const badge = document.getElementById('cart-count');
    if (badge) {
        const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
        badge.innerText = totalQty;
    }
}

function showToast(msg) {
    // Implementasi sederhana notifikasi
    const toast = document.createElement('div');
    toast.className = "fixed top-20 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full z-[100] shadow-xl text-sm animate-bounce";
    toast.innerText = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

// Jalankan saat load
updateCartBadge();