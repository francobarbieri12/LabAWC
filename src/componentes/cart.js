import { 
    saveDummyProducts, 
    getCartProducts, 
    updateProductQuantity, 
    removeProduct,
    getTotalItems,
    getTotalPrice 
} from '../js/localstorage.js';

export function RenderCart() {
    saveDummyProducts();

    const cartContainer = document.querySelector('#cart');
    const cartProducts = getCartProducts();
    const totalItems = getTotalItems();
    const totalPrice = getTotalPrice();

    let template = `
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Listado productos (${totalItems})</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul class="list-group" id="cart-products-list">`;

    cartProducts.forEach(product => {
        template += `
      <li class="list-group-item" data-product-id="${product.id}">
        <div class="d-flex align-items-center">
          <img src="${product.image}" alt="${product.title}" class="img-thumbnail me-3" style="width: 60px; height: 60px; object-fit: contain;">
          <div class="flex-grow-1">
            <h6 class="mb-1">${product.title}</h6>
            <small class="text-muted">${product.category}</small>
            <div class="mt-2">
              <div class="btn-group btn-group-sm" role="group" aria-label="Product controls">
                <button type="button" class="btn btn-outline-secondary btn-decrease rounded-0" data-id="${product.id}">-</button>
                <span class="btn btn-light disabled quantity-display rounded-0" data-id="${product.id}">${product.quantity}</span>
                <button type="button" class="btn btn-outline-secondary btn-increase rounded-0" data-id="${product.id}">+</button>
                <button type="button" class="btn btn-outline-danger ms-2 btn-remove rounded-0" data-id="${product.id}">
                  <i class="bi bi-trash"></i> Eliminar
                </button>
              </div>
            </div>
          </div>
          <span class="badge bg-primary fs-6">$${(product.price * product.quantity).toFixed(2)}</span>
        </div>
      </li>`;
    });

    template += `
    </ul>
    ${cartProducts.length > 0 ? `
    <div class="mt-5 pt-3">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h5 class="mb-0">Total:</h5>
        <h5 class="mb-0 text-success">$${totalPrice.toFixed(2)}</h5>
      </div>
      <button class="btn btn-danger w-100 btn-checkout">Eliminar todos los productos</button>
      <button class="btn btn-primary w-100 btn-checkout mt-2">Finalizar compra</button>
    </div>
    ` : '<p class="text-muted text-center mt-4">Your cart is empty</p>'}
  </div>
</div>`;

    cartContainer.innerHTML = template;

    addCartEventListeners();
}

function addCartEventListeners() {
    document.querySelectorAll('.btn-increase').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const productId = parseInt(this.getAttribute('data-id'));
            handleQuantityIncrease(productId);
        });
    });

    document.querySelectorAll('.btn-decrease').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const productId = parseInt(this.getAttribute('data-id'));
            handleQuantityDecrease(productId);
        });
    });

    document.querySelectorAll('.btn-remove').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const productId = parseInt(this.getAttribute('data-id'));
            handleRemoveProduct(productId);
        });
    });

    document.querySelectorAll('.btn-checkout').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
        });
    });
}

function handleQuantityIncrease(productId) {
    console.log("Increasing quantity for product:", productId);
    const newQuantity = updateProductQuantity(productId, 1);
    if (newQuantity !== null) {
        updateQuantityDisplay(productId, newQuantity);
        refreshCartDisplay();
    }
}

function handleQuantityDecrease(productId) {
    console.log("Decreasing quantity for product:", productId);
    const newQuantity = updateProductQuantity(productId, -1);
    if (newQuantity !== null) {
        updateQuantityDisplay(productId, newQuantity);
        refreshCartDisplay();
    }
}

function handleRemoveProduct(productId) {
    console.log("Removing product:", productId);
    if (removeProduct(productId)) {
        refreshCartDisplay();
    }
}

function updateQuantityDisplay(productId, newQuantity) {
    const quantityDisplay = document.querySelector(`.quantity-display[data-id="${productId}"]`);
    if (quantityDisplay) {
        quantityDisplay.textContent = newQuantity;
    }
    
    const products = getCartProducts();
    const product = products.find(p => p.id === productId);
    if (product) {
        const priceBadge = document.querySelector(`.list-group-item[data-product-id="${productId}"] .badge`);
        if (priceBadge) {
            priceBadge.textContent = `$${(product.price * newQuantity).toFixed(2)}`;
        }
    }
}

function refreshCartDisplay() {
    const products = getCartProducts();
    const totalItems = getTotalItems();
    const totalPrice = getTotalPrice();
    
    const titleElement = document.querySelector('.offcanvas-title');
    if (titleElement) {
        titleElement.textContent = `Shopping Cart (${totalItems})`;
    }
    
    const totalPriceElement = document.querySelector('.offcanvas-body .text-success');
    if (totalPriceElement) {
        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }
    
    if (products.length === 0) {
        const productsList = document.getElementById('cart-products-list');
        const checkoutSection = document.querySelector('.offcanvas-body .border-top');
        
        if (productsList && checkoutSection) {
            productsList.innerHTML = '';
            checkoutSection.style.display = 'none';
            
            const emptyMessage = document.createElement('p');
            emptyMessage.className = 'text-muted text-center mt-4';
            emptyMessage.textContent = 'Your cart is empty';
            document.querySelector('.offcanvas-body').appendChild(emptyMessage);
        }
    }
}

export function initCart() {
    RenderCart();
}