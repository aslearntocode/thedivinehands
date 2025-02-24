class OrderForm {
    constructor() {
        this.modal = document.getElementById('orderModal');
        this.form = document.getElementById('orderForm');
        this.closeBtn = document.querySelector('.close-modal');
        this.setupEventListeners();
    }

    initialize(chefName, menuItems) {
        // Set chef name
        document.querySelector('.chef-name').textContent = chefName;
        document.getElementById('chefNameInput').value = chefName;

        // Generate menu items HTML
        const menuSection = document.getElementById('orderMenuItems');
        menuSection.innerHTML = this.generateMenuHTML(menuItems);

        // Reinitialize event listeners for new menu items
        this.setupMenuItemListeners();
    }

    generateMenuHTML(menuItems) {
        // Group items by category
        const categories = {};
        menuItems.forEach(item => {
            if (!categories[item.category]) {
                categories[item.category] = [];
            }
            categories[item.category].push(item);
        });

        // Generate HTML for each category
        return Object.entries(categories).map(([category, items]) => `
            <h3>${category}</h3>
            <div class="menu-items-selection">
                ${items.map(item => this.generateMenuItemHTML(item)).join('')}
            </div>
        `).join('');
    }

    generateMenuItemHTML(item) {
        return `
            <div class="menu-item-select">
                <input type="checkbox" id="${item.id}" name="menu-items" 
                       value="${item.name}" data-price="${item.price}">
                <label for="${item.id}">
                    <span class="item-name">${item.name}</span>
                    <span class="item-price">₹${item.price}</span>
                </label>
                <input type="number" class="quantity-input" min="1" value="1" disabled>
            </div>
        `;
    }

    // ... rest of the existing order form functionality ...
}

// Export the OrderForm class
window.OrderForm = OrderForm; 