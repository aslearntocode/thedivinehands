document.addEventListener('DOMContentLoaded', function() {
    // Initialize menu functionality
    initializeMenu();
    // Initialize order form
    initializeOrderForm();
});

function initializeMenu() {
    const menuForm = document.getElementById('menuForm');
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        const quantityInput = item.querySelector('.quantity-input');

        // Set initial state
        quantityInput.disabled = !checkbox.checked;

        checkbox.addEventListener('change', function() {
            quantityInput.disabled = !this.checked;
            if (!this.checked) {
                quantityInput.value = 1;
            }
            updateTotal();
        });

        quantityInput.addEventListener('input', function() {
            if (this.value < 1) this.value = 1;
            if (checkbox.checked) {
                updateTotal();
            }
        });
    });
}

function updateTotal() {
    // ... existing updateTotal function ...
}

function initializeOrderForm() {
    // ... existing order form initialization ...
} 