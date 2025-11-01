const CART_KEY = 'cartProducts';

export function saveDummyProducts() {
    const existingProducts = getCartProducts();
    if (existingProducts.length > 0) {
        return;
    }

    const products = [
        {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
            "rating": {
                "rate": 3.9,
                "count": 120
            },
            "quantity": 2
        },
        {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
            "rating": {
                "rate": 4.1,
                "count": 259
            },
            "quantity": 2
        }
    ];

    localStorage.setItem(CART_KEY, JSON.stringify(products));
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