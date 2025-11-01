import { RenderCards } from "../componentes/cards.js";
import { initCart } from "../componentes/cart.js"

RenderCards();

document.addEventListener('DOMContentLoaded', function() {
    initCart();
    
    // Example: Add event listener to cart button
    const cartButton = document.querySelector('#cart-button');
    if (cartButton) {
        cartButton.addEventListener('click', function() {
            // The cart is already rendered, just show it
            // Bootstrap will handle the offcanvas display
        });
    }
});