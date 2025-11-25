import { RenderCards } from "../componentes/cards.js";
import { initCart } from "../componentes/cart.js";
import "./search.js";

RenderCards();

document.addEventListener("DOMContentLoaded", function () {
  initCart();
  const cartButton = document.querySelector("#cart-button");
  if (cartButton) {
    cartButton.addEventListener("click", function () {});
  }
});
