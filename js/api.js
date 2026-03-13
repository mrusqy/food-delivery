const API_URL = "https://script.google.com/macros/s/AKfycbykGkoutTI2_Wfi4e-4WyNG8CAhqPaI4kDaZQ-QtqvHswDU2mueBtDHOGtgEEEM3r3h/exec";

async function fetchMenus() {
    try {
        const response = await fetch(`${API_URL}?action=getMenus`);
        const menus = await response.json();
        renderMenus(menus);
    } catch (err) {
        console.error("Gagal memuat menu", err);
    }
}

function renderMenus(menus) {
    const container = document.getElementById('menu-container');
    container.innerHTML = menus.map(item => `
        <div class="bg-white p-3 rounded-2xl shadow-sm hover:shadow-md transition">
            <img src="${item.image}" class="w-full h-32 object-cover rounded-xl mb-2">
            <h4 class="font-semibold text-sm h-10 overflow-hidden">${item.name}</h4>
            <div class="flex justify-between items-center mt-2">
                <span class="font-bold text-sm">Rp ${item.price.toLocaleString()}</span>
                <button onclick="addToCart('${item.menu_id}')" class="bg-primary p-2 rounded-lg text-xs">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', fetchMenus);