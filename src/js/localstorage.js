const CART_KEY = 'cartProducts';

export function initCartKey() {
    const existingProducts = getCartProducts();
    if (existingProducts.length > 0) {
        return;
    }

    localStorage.setItem(CART_KEY, JSON.stringify([]));
}

export function getCartProducts() {
    const products = localStorage.getItem(CART_KEY);
    return products ? JSON.parse(products) : [];
}

export function updateProductQuantity(productId, change) {
    const cartProducts = getCartProducts();
    const productIndex = cartProducts.findIndex(p => p.id === productId);
    
    if (productIndex !== -1) {
        cartProducts[productIndex].quantity += change;
        
        if (cartProducts[productIndex].quantity < 1) {
            cartProducts[productIndex].quantity = 1;
        }
        
        localStorage.setItem(CART_KEY, JSON.stringify(cartProducts));
        return cartProducts[productIndex].quantity;
    }
    return null;
}

export function removeProduct(productId) {
    let cartProducts = getCartProducts();
    const initialLength = cartProducts.length;
    cartProducts = cartProducts.filter(p => p.id !== productId);
    
    if (cartProducts.length !== initialLength) {
        localStorage.setItem(CART_KEY, JSON.stringify(cartProducts));
        return true;
    }
    return false;
}

export function getTotalItems() {
    const products = getCartProducts();
    return products.reduce((total, product) => total + product.quantity, 0);
}

export function getTotalPrice() {
    const products = getCartProducts();
    return products.reduce((total, product) => total + (product.price * product.quantity), 0);
}

export function clearCart() {
    localStorage.removeItem(CART_KEY);
}

export function addProductToCart(product) {
    
    const cartProducts = getCartProducts();
    const existingProductIndex = cartProducts.findIndex(p => p.id === product.id);
    
    if (existingProductIndex !== -1) {
        cartProducts[existingProductIndex].quantity += product.quantity || 1;
    } else {
        const productToAdd = {
            ...product,
            quantity: product.quantity || 1
        };
        cartProducts.push(productToAdd);
    }

    localStorage.setItem(CART_KEY, JSON.stringify(cartProducts));

    return true;
}