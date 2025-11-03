const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase();
  const productCards = document.querySelectorAll("#product-list .card");

  productCards.forEach((card) => {
    const title = card.querySelector(".card-title").textContent.toLowerCase();
    const description = card
      .querySelector(".card-text")
      .textContent.toLowerCase();

    if (title.includes(query) || description.includes(query)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});
