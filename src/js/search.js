const searchBar = document.getElementById("search-bar");
const productList = document.getElementById("product-list");

let originalOrderIds = [];

function saveOriginalOrder() {
  const productCols = document.querySelectorAll("#product-list .col");
  originalOrderIds = Array.from(productCols).map((col) => {
    const card = col.querySelector(".card");
    return card ? card.getAttribute("data-id") : null;
  }).filter(id => id !== null);
}

function restoreOriginalOrder() {
  if (originalOrderIds.length === 0) return;
  
  const productCols = document.querySelectorAll("#product-list .col");
  const colsMap = new Map();
  
  productCols.forEach((col) => {
    const card = col.querySelector(".card");
    if (card) {
      const id = card.getAttribute("data-id");
      colsMap.set(id, col);
    }
  });
  
  originalOrderIds.forEach((id) => {
    const col = colsMap.get(id);
    if (col) {
      productList.appendChild(col);
      col.style.display = "";
    }
  });
}

const observer = new MutationObserver(() => {
  const productCols = document.querySelectorAll("#product-list .col");
  if (productCols.length > 0 && originalOrderIds.length === 0) {
    saveOriginalOrder();
  }
});

observer.observe(productList, { childList: true, subtree: true });

setTimeout(() => {
  if (originalOrderIds.length === 0) {
    saveOriginalOrder();
  }
}, 1000);

searchBar.addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase().trim();
  
  if (query === "") {
    restoreOriginalOrder();
    return;
  }

  const productCols = document.querySelectorAll("#product-list .col");
  const visibleCols = [];
  const hiddenCols = [];

  productCols.forEach((col) => {
    const card = col.querySelector(".card");
    const title = card.querySelector(".card-title").textContent.toLowerCase();
    const description = card
      .querySelector(".card-text")
      .textContent.toLowerCase();

    if (title.includes(query) || description.includes(query)) {
      visibleCols.push(col);
      col.style.display = "";
    } else {
      hiddenCols.push(col);
      col.style.display = "none";
    }
  });
  
  visibleCols.forEach((col) => {
    productList.appendChild(col);
  });
});
